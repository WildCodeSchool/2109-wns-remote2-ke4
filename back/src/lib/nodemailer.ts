import mailgun from 'mailgun-js';
import nodemailer from 'nodemailer';

interface Args {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: any;
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
  attachments,
  text,
}: Args): Promise<any> => {
  try {
    const email: any = await transporter.sendMail({
      //@ts-ignore
      from: 'ke4service@outlook.com',
      to,
      subject,
      text,
      html,
      attachments,
    });
    console.info('EMAIL SEND -->', email);
    return email;
  } catch (err) {
    console.log('MAIL ERROR -->', err);
    return err;
  }
};
