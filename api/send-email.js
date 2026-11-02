// Vercel Serverless Function handler using Resend REST API (Zero external npm dependency)
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.'
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY is not configured on the server.'
      });
    }

    const toEmail = process.env.RESEND_TO_EMAIL || 'satyaprem1714@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Visitor <onboarding@resend.dev>';

    // Distinct recognizable email subject for easy identification in inbox
    const customSubject = subject?.trim() ? ` — ${subject.trim()}` : '';
    const emailSubject = `🔔 [PORTFOLIO VISITOR] New Message from ${name.trim()}${customSubject}`;

    const sentTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 18px 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #5eead4; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">
            🚀 PORTFOLIO VISITOR INQUIRY
          </h2>
          <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">
            Received from your portfolio website contact form on ${sentTime} IST
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 8px;">
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 120px; border-bottom: 1px solid #f1f5f9;">Visitor Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${email.trim()}" style="color: #0f766e; text-decoration: none; font-weight: 500;">${email.trim()}</a>
            </td>
          </tr>
          ${
            subject?.trim()
              ? `<tr>
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Subject:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f1f5f9;">${subject.trim()}</td>
                </tr>`
              : ''
          }
        </table>

        <div style="margin-top: 20px;">
          <p style="color: #64748b; font-weight: 600; font-size: 13px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Visitor Message:</p>
          <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #0f766e; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email.trim()}?subject=Re: ${encodeURIComponent(subject?.trim() || 'Portfolio Inquiry')}" style="display: inline-block; background: #0f766e; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 22px; border-radius: 6px;">
            Reply to ${name.trim()}
          </a>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px;">
          Sent automatically from Satya Prem's Portfolio (satya-prem.vercel.app)
        </p>
      </div>
    `;

    // Direct HTTP request to Resend official API
    const response = await fetch('https://api.resend.com/emails', {
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

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data.message || 'Failed to send email via Resend'
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send message.'
    });
  }
}
