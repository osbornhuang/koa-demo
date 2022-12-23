import { createTransport } from "nodemailer";
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "koaAdmin@gmail.com",
    pass: "koa#789^Admin"
  }
});

const sendMail = userMail => {
  const mailOptions = {
    from: "koaAdmin@gmail.com",
    to: userMail,
    subject: "purchase fund notify message",
    text: "purchase fund result:........"
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.info("email send:" + info.response);
    }
  });
};
export default sendMail;
