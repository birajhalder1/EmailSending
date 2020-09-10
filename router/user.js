const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");
var cron = require("node-cron");

router.get("/", (req, res) => {
  cron.schedule("0 */2 * * * *", () => {
    console.log("Email will sent every two minute");

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: process.env.USER1,

      subject: "Sending Email using Node.js",
      text: `Good Morning
              Every minute mail will sent
              Thank you so much`,
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("Email have send successfully ..!!");
  });
  res.json({ msg: "Email sent" });
});

module.exports = router;
