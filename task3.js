const express = require('express');
const app = express();
const port = 1000;

// Sample user data stored in memory
const users = {};
app.use(express.json());

// User registration endpoint
app.post('/user/register', (req, res) => {
  const { username, password, email } = req.body;

  if (users[username]) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }

  const newUser = { username, password, email };
  users[username] = newUser;

  return res.status(200).json({ success: true, message: 'User registered successfully' });
});

// User login endpoint
app.post('/user/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  return res.status(200).json({ success: true, message: 'User logged in successfully' });
});

// User profile endpoint
app.get('/user/profile/:username', (req, res) => {
  const { username } = req.params;
  const user = users[username];

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  return res.status(200).json({
    success: true,
    message: 'User profile retrieved successfully',
    profile: { username: user.username, email: user.email }
  });
});

// User update endpoint
app.put('/user/update/:username', (req, res) => {
  const { username } = req.params;
  const { newEmail } = req.body;
  const user = users[username];

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  user.email = newEmail;
  return res.status(200).json({ success: true, message: 'User profile updated successfully' });
});

// User delete endpoint
app.delete('/user/delete/:username', (req, res) => {
  const { username } = req.params;

  if (!users[username]) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  delete users[username];
  return res.status(200).json({ success: true, message: 'User deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});