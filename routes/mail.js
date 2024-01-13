const nodemailer = require("nodemailer");

/**
 * Sends a motivational quote via email.
 * @param {string} toEmail - The recipient's email address.
 * @param {string} quote - The motivational quote to be sent.
 */
function sendMail(toEmail, quote) {
  // Create a transporter for sending emails
  let mailTransporter = nodemailer.createTransport({
    host: 'mail.openjavascript.info',
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: "pokharnajay2@gmail.com",
      pass: "tfep jbgn oolr danp"  // Use the app password here
    }
  });

  // Define email details
  let mailDetails = {
    from: {
      name: 'Quoter',
      address: 'noreply@example.com'
    },
    to: toEmail,  // Correct the recipient's email address
    subject: "Today's Motivational Quote",
    text: quote
  };

  // Send the email
  mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Emails sent successfully");
    }
  });
}

// Export the function for external use
module.exports = {
  sendMail
};
