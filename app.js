const sequelize = require('./integration/sequelize');
const Contacts = require('./models/contacts');
const ContactRoutes = require('./routes/contacts')

const express = require('express')
const app = express()
const cors = require("cors")

const port = process.env.PORT || 80
app.use(cors())
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded request bodies


// Synchronize the model with the database
async function syncDatabase() {
  try {
      await sequelize.sync({ force: false }); // Set { force: true } to recreate the table on every application start
      console.log('Database synchronized');
  } catch (error) {
      console.error('Error synchronizing database:', error);
  }
}


// Routes
app.use('/identify', ContactRoutes)


//Ping
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Staring Server
syncDatabase();
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})