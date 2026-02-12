const express = require('express');
const app = express();
const userRoutes = require('/routes/userRoutes');


const PORT = 3000;

app.use(express.json());

app.use('/api', userRoutes);


app.get('/api' , userRoutes);

app.get ('/' , (req, res) => {
    res.send('Welcome to the API')
}); 


app.listen(PORT, () => {
    console.log('Server is running.')
})