const express = require('express');
const bodyParser = require('body-parser');
const { swaggerUi, specs } = require('./swagger');
const webhookRoutes = require('./routes/webhookRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from .env, or default to 3000

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/', webhookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
