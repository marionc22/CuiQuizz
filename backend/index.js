
import express from 'express';


//import router from './routes';
import geo from './Data/geo.js';
import film from './Data/film.js';
import sport from './Data/sport.js';
import images from './Data/images.js';
import musique from './Data/musique.js';

const baseUrl = 'localhost:5050/api'
const PORT = 5050;
// initialize express
const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PATCH, DELETE'
  );
  next();
});
// Routes
app.use('/api/geo', (req, res)=> {
 
  res.status(200).json(geo)
});

app.use('/api/film', (req, res)=> {
 
  res.status(200).json(film)
});

app.use('/api/sport', (req, res)=> {
 
  res.status(200).json(sport)
});

app.use('/api/images', (req, res)=> {
 
  res.status(200).json(images)
});

app.use('/api/musique', (req, res)=> {
 
  res.status(200).json(musique)
});

// starter server
app.listen(PORT, () => {
  console.log(`Listening on ${baseUrl}`);
});

export default app;