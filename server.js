// Import the Express module
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Example in-memory data store
let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
];

// GET route: Fetch all products
app.get('/products', (req, res) => {
    res.status(200).json(products); // Status 200: OK
});

// GET route: Fetch a single product by ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.status(200).json(product); // Status 200: OK
    } else {
        res.status(404).json({ error: "Product not found" }); // Status 404: Not Found
    }
});

// POST route: Add a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    // Check if required data is provided and valid
    if (!name || typeof name !== 'string' || !price || typeof price !== 'number') {
        return res.status(400).json({ error: "Invalid product data. 'name' must be a string and 'price' must be a number." });
    }

    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct); // Status 201: Created
});

// PUT route: Update a product by ID
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    // Check if required data is provided and valid
    if (!name || typeof name !== 'string' || !price || typeof price !== 'number') {
        return res.status(400).json({ error: "Invalid product data. 'name' must be a string and 'price' must be a number." });
    }

    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { id, name, price };
        res.status(200).json(products[index]); // Status 200: OK
    } else {
        res.status(404).json({ error: "Product not found" }); // Status 404: Not Found
    }
});

// DELETE route: Remove a product by ID
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send(); // Status 204: No Content
    } else {
        res.status(404).json({ error: "Product not found" }); // Status 404: Not Found
    }
});

// Route that always returns 500: Server error simulation
app.get('/error', (req, res) => {
    res.status(500).json({ error: "Internal Server Error. Something went wrong!" }); // Status 500: Internal Server Error
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
