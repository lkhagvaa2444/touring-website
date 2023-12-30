const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// In-memory user data for demonstration (replace with a database)
const users = [
    { username: 'Lkhagvaa', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
  // Handle form submission
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (user) {
      res.send({ message: 'Login successful!' });
    } else {
      res.status(401).send({ message: 'Incorrect username or password.' });
    }
  });