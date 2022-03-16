import mailgun from 'mailgun-js';
import nodemailer from 'nodemailer';

interface Args {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  attachment?: mailgun.messages.SendData['attachment'];
}

export const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ke4service@outlook.com',
    pass: 'Passwordke4@',
  },
});

export const sendEmail = async ({
  to,
  subject,
  html,
  attachment,
  text,
}: Args): Promise<any> => {
  try {
    const email: any = await sendEmail({
      //@ts-ignore
      from: 'ke4service@outlook.com',
      to,
      subject,
      text,
      html,
      attachment,
    });
    console.info('EMAIL SEND -->', email);
    return email;
  } catch (err) {
    console.log('MAIL ERROR -->', err);
    return err;
  }
};
