import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());// informacion en formato json
app.use(bodyParser.urlencoded({extended: true}));// informacion en formato urlencoded


app.get('/', (req, res)=>{ //recibe una peticion get a la ruta raiz
     res.send('Hello World!');
});

app.get('/user/:id', (req, res)=>{ //ruta dinamica ":id" es un parametro "/user/123"
     const userId =req.params.id; //obtiene el id
     res.send(`User ID is: ${userId}`);
});

app.get('/search', (req, res)=>{ //ruta de busqueda "/search?word=someting-word&otherParam=some-value"
     const query = req.query.word || 'no hay'; //obtiene el query
     const dificulty = req.query.dif || 'no se';

     res.send(`Search word is: ${query} and difficulty is: ${dificulty}`);
});

app.post('/form', (req, res)=>{ //envia peticion post
     const name =req.body.name;
     const email = req.body.email;

     res.json({
          message:'data received',
          data:{
               name: name,
               email: email
          }
     });
});

app.post('/api/data',(req, res)=>{
     const data =req.body;

     if (!data || Object.keys(data).length === 0) return res.status(400).json({ error: 'No data provided' });

     res.status(201).json({
          message: 'Data received successfully',
          data: data
     });
});

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});