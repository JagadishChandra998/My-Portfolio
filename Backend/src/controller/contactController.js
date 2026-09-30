import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required.",
      });
    }

    // Name validation
    if (name.trim().length < 2) {
      return res.status(400).json({
        message: "Name is too short.",
      });
    }

    if (name.length > 100) {
      return res.status(400).json({
        message: "Name is too long.",
      });
    }

    // Email validation
    if (email.length > 150) {
      return res.status(400).json({
        message: "Email is too long.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email address.",
      });
    }

    // Message validation
    if (message.trim().length < 10) {
      return res.status(400).json({
        message: "Message must contain at least 10 characters.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        message: "Message is too long.",
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: "Unable to send message right now.",
      });
    }

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      message: "Unable to send message right now.",
    });
  }
};
