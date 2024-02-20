import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const user = process.env.EMAIL;
  const pass = process.env.PASSWORD;
  console.log(user, pass);

  const data = {
    name,
    email,
    message,
  };

  const transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // Use 587 if you prefer to use STARTTLS encryption instead
    secure: true, // true for 465, false for other ports, indicates SSL
    auth: {
      user: user, // Your Zoho email address
      pass: pass, // Your Zoho password or app-specific password
    },

  });

  try {
    const mail = await transport.sendMail({
      from: user,
      to: "info@pantheras.ca",
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Submitted on Pantheras.ca</p>
        `,
    });

    console.log(pass, user);
    return res.status(200).json({ message: "Nice!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "oops!" });
  }
}
