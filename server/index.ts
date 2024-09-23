import express, { type Request, type Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/api', (request: Request, response: Response) => {
    response.status(200).send('Hello World');
});

app.use(express.static('./frontend/dist'));

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
}).on('error', (error: Error) => {
    // gracefully handle error
    throw new Error(error.message);
});
