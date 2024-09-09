import User from "@/models/user";
import mongoose from 'mongoose';
const nodeMailer = require('nodemailer');

const html = `<div class="Desktop3" style="width: 1440px; height: 1024px; position: relative; background: white">
  <div class="Rectangle12" style="width: 1158px; height: 773px; left: 144px; top: 107px; position: absolute; background: #97DCFF; box-shadow: 0px 4px 45.900001525878906px 23px rgba(0, 0, 0, 0.25); border-radius: 37px"></div>
  <div class="Welcome" style="width: 1158px; height: 773px; left: 141px; top: 107px; position: absolute; text-align: center; color: black; font-size: 128px; font-family: Julius Sans One; font-weight: 400; word-wrap: break-word">WELCOME!</div>
</div>`;

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
