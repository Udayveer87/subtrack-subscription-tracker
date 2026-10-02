const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/subtrack');

// Models
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

const Subscription = mongoose.model('Subscription', {
  userEmail: String,
  name: String,
  cost: Number,
  renewalDate: String,
  category: String,
  status: String,
  usage: Number
});

// Register
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (await User.findOne({ email }))
    return res.json({ error: "User exists" });

  await User.create({ name, email, password });
  res.json({ success: true });
});

// Login
app.post('/api/login', async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.json({ error: "Invalid credentials" });
  res.json({ success: true, user });
});

// Add Subscription
app.post('/api/subscriptions', async (req, res) => {
  await Subscription.create(req.body);
  res.json({ success: true });
});

// Get Subscriptions
app.get('/api/subscriptions/:email', async (req, res) => {
  const subs = await Subscription.find({ userEmail: req.params.email });
  res.json(subs);
});

// Delete
app.delete('/api/subscriptions/:id', async (req, res) => {
  await Subscription.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Update status
app.put('/api/subscriptions/:id', async (req, res) => {
  await Subscription.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));