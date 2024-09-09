import User from "@/models/user";
import mongoose from 'mongoose';
const nodeMailer = require('nodemailer');

const html = `
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>
    <!--[if mso]>
      <style>
        table {{
          border-collapse: collapse;
          border-spacing: 0;
          border: none;
          margin: 0;
        }}

        div, td {{
          padding:0;
        }}

        div {{
          margin: 0 !important;
        }}
      </style>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff">
    <div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
      <table role="presentation" style="width:100%;border:0;border-spacing:0;">
        <>
          <td align="center">
            <!--[if mso]>
              <table role="presentation" align="center" style="width:660px;">
                <tr>
                  <td style="padding:20px 0;">
            <![endif]-->
            <div class="outer" style="width:96%;max-width:660px;margin:20px auto;">
              <table role="presentation" style="width:100%;border:0;border-spacing:0;">
                <tr>
                  <td style="text-align:center;">
                    <h1 style="margin-top:0;margin-bottom:8px;font-family:Playfair Display,serif;font-weight:400;font-size:96px;color:#1c77ff;">Yanura!</h1>
                    <h1 style="margin-top:16px;margin-bottom:36px;font-family:Inter,sans-serif;font-size:36px;color:#1a1c1f;">Thanks for joining our waitlist!</h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="text-align:left;font-family:Inter,sans-serif;font-weight:normal;font-size:18px;color:#1a1c1f;">
                      Dear user,<br><br>Thank you for joining our waitlist! We are excited to have you on board and we can't wait to show you what we have been working on.<br><br>Our team is working hard to bring you the best experience possible. We will keep you updated on our progress and let you know when you can start using our platform.<br><br>Stay tuned!<br><br>Best,<br>The <span style="color:#1c77ff;">Yanura</span> Team
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center;">
                    <hr style="margin: 10px 0">
                    <p style="font-family:Basier Square,sans-serif;font-size:14px;color:#8b959e;">
                      Copyright © Yanura 2024<br>
                      <a href="#" style="color:#8b959e;">Unsubscribe</a>
                    </p>
                    <h1 style="font-family:Playfair display,serif;font-weight:400;color:#8b959e">Yanura!</h1>
                  </td>
                </tr>
              </table>
            </div>
            <!--[if mso]>
          </td>
        </tr>
      </table>
            <![endif]-->
          </td>
        </tr>
      </table>
    </div>
    </body>
</html>
`;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'user'
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const email = body.email;
        await connectDB();
        const userCheck = await User.findOne({ email });
        if (!userCheck) {
            await User.create({ email });
            const t = nodeMailer.createTransport({
                host:'smtp.gmail.com',
                port:465,
                secure:true,
                auth:{
                    user:'thetunersdev@gmail.com',
                    pass:process.env.GMAIL_PASS
                }
            });
            const info =await t.sendMail({
                from:'DevTeam@yanura.com',
                to:email,
                subject:'Welcome to Yanura!',
                html:html,
            })
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
