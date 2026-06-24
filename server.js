import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const PORT = 3001;

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_YE45CAoG_C7fLyVQCbBukRBNfRaSbUo2f');

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
}));
app.use(express.json());

// POST /api/send-email
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields (name, email, message) are required.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sraut7105@gmail.com'],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a35;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 32px; text-align: center;">
            <h1 style="margin: 0; color: #0a0a0f; font-size: 24px; font-weight: 700;">
              ✉️ New Contact Message
            </h1>
            <p style="margin: 8px 0 0; color: rgba(10,10,15,0.7); font-size: 14px;">
              Someone reached out through your portfolio
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">
            <!-- Sender Info -->
            <div style="background: #13131a; border: 1px solid #2a2a35; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 80px;">Name</td>
                  <td style="padding: 8px 0; color: #f3f4f6; font-size: 15px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none; font-size: 15px;">${email}</a></td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 24px;">
              <p style="color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px;">Message</p>
              <div style="background: #13131a; border: 1px solid #2a2a35; border-radius: 12px; padding: 20px;">
                <p style="margin: 0; color: #e5e7eb; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Reply Button -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: #0a0a0f; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 15px;">
                Reply to ${name} →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 32px; border-top: 1px solid #2a2a35; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              Sent from your portfolio contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again later.',
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
