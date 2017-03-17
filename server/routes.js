import { Router } from 'express';

const CHEESES = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue",
    "Cheshire Blue",
    "Devon Blue",
    "Dorset Blue Vinney",
    "Dovedale",
    "Exmoor Blue",
    "Harbourne Blue",
    "Lanark Blue",
    "Lymeswold",
    "Oxford Blue",
    "Shropshire Blue",
    "Stichelton",
    "Stilton",
    "Blue Wensleydale",
    "Yorkshire Blue"
];

const cheeseRoutes = Router();

cheeseRoutes.get('/', (req, res) => {
    res.json(CHEESES);
});

export { cheeseRoutes };
