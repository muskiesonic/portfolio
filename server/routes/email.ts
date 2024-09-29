import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { sgMail } from '../util/emailClient';
import { contactFormSchema } from '../../shared/types';

const emailRoute = Router();

emailRoute.route('/').post(async (req: Request, res: Response) => {
    try {
        const parsedBody = contactFormSchema.parse(req.body);

        const { email, name, message } = parsedBody;

        const msg = {
            to: 'jhilborn09@gmail.com',
            from: 'jhilborn09@gmail.com',
            subject: `From Portfolio: ${name} <${email}>`,
            html: message
        };
        await sgMail.send(msg);

        return res.json({ success: 'Email sent successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors });
        }

        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return res.status(500).json({ error: errorMessage });
    }
});

export { emailRoute };
