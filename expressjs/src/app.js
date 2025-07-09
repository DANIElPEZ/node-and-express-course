import express from 'express';
import routes from './routes/index.js';
const app = express();

app.use(express.json());
app.use('/api', routes); //enpoint base para las rutas de la API
app.get('/', (req, res)=>{
     res.send('Welcome to the Express API!');
});

export default app;