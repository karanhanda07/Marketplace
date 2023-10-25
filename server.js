const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes'); // Adjust the path as needed

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your-connection-string' with your MongoDB Atlas connection string)
mongoose.connect('mongodb+srv://karanhanda40:.......@marketplace.hxa4bzw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Parse JSON request bodies
app.use(bodyParser.json());

// Define a root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to DressStore application' });
});

// Use the product routes (adjust the path as needed)
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
