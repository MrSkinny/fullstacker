import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
}

// Mount routes here

app.listen(PORT, () => console.log(`Server on ${PORT}`));
