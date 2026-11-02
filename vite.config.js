import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'local-api-send-email',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            // Set CORS headers
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const { name, email, subject, message } = parsed;

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'Name, email, and message are required.' }));
                  return;
                }

                const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                const toEmail = env.RESEND_TO_EMAIL || process.env.RESEND_TO_EMAIL || 'satyaprem1714@gmail.com';
                const fromEmail = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'RESEND_API_KEY is not defined in .env' }));
                  return;
                }

                const emailSubject = subject?.trim()
                  ? `[Portfolio Contact] ${subject.trim()}`
                  : `New Portfolio Message from ${name.trim()}`;

                const htmlContent = `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                    <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #5eead4; padding-bottom: 12px;">New Contact Message</h2>
                    <p><strong>Name:</strong> ${name.trim()}</p>
                    <p><strong>Email:</strong> ${email.trim()}</p>
                    ${subject?.trim() ? `<p><strong>Subject:</strong> ${subject.trim()}</p>` : ''}
                    <div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #0f766e;">
                      <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message.trim()}</p>
                    </div>
                  </div>
                `;

                const resendRes = await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    from: fromEmail,
                    to: [toEmail],
                    reply_to: email.trim(),
                    subject: emailSubject,
                    html: htmlContent
                  })
                });

                const data = await resendRes.json();

                res.statusCode = resendRes.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(resendRes.ok ? { success: true, data } : { success: false, error: data.message || 'Resend error' }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message || 'Internal server error' }));
              }
            });
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: true,
    },
  };
});
