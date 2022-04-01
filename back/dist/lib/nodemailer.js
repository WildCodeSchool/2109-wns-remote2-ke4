"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'ke4service@outlook.com',
        pass: 'Passwordke4@',
    },
});
const sendEmail = ({ to, subject, html, attachments, text, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = yield exports.transporter.sendMail({
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
    }
    catch (err) {
        console.log('MAIL ERROR -->', err);
        return err;
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=nodemailer.js.map