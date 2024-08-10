const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email for password reset
exports.sendMail = (email, token) => {
  const resetURL = `http://localhost:5000/api/auth/reset?token=${token}`;

  return transporter.sendMail({
    to: email,
    from: process.env.EMAIL_USER,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset</p>
           <p>Click <a href="${resetURL}">here</a> to reset your password.</p>`,
  });
};