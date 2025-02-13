import express from 'express'
import router from './routes'
import dotenv from 'dotenv'
import poolDb from './poolDb';

dotenv.config();

console.log(process.env.TOTO);
const resourcePath = process.env.RESOURCE_PATH
const port = process.env.APPLICATION_PORT

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(resourcePath, router);

app.listen(port, () => {
    console.log('Server running on port:' + port);
});