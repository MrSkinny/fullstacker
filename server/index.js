import path from 'path';
import express from 'express';
import { cheeseRoutes } from './routes';

const buildPath = () => {
    return process.env.NODE_ENV !== 'production' ?
        path.join(__dirname, '../build') :
        path.join(__dirname, 'build'); 
}

const app = express();
app.use(express.static(buildPath()));
app.use('/cheeses', cheeseRoutes);

app.listen(3001, () => console.log('Server on 3001'));
