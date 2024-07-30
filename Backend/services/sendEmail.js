const nodemailer= require("nodemailer");

let transporter = nodemailer.createTransport({
    service:"gmail",
    port: 587,
    auth: {
      user: "sattvikdwivedi2001@gmail.com",
      pass: "kiqn okfy votm vtzj",
}})
const sendMail = async(to, subject, text, html)=>{

const info = await transporter.sendMail({
    from: '"SAttvik 👻" <sattvikdwivedi2001@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports=sendMail;