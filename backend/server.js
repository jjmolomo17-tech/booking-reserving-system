const express = require('express');
const app = express();
const userRoutes = require('/routes/userRoutes');

app.use('/api', userRoutes);
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running.')
})