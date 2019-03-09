require("dotenv").config();
var nodemailer = require('nodemailer');


var reset = {
    send: function(email, newpassword){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'markheardtest@gmail.com',
              pass: process.env.email
            }
          });
          
          var mailOptions = {
            from: 'markheardtest@gmail.com',
            to: email,
            subject: 'Sway -- Temporary Password',
            text: `Your temporary password is ${newpassword}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
};

module.exports = reset;