import express, { type Request, type Response } from 'express';
import { emailRoute } from './routes/email';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/email', emailRoute);

app.use(express.static('./frontend/dist'));

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
}).on('error', (error: Error) => {
    // gracefully handle error
    throw new Error(error.message);
});
