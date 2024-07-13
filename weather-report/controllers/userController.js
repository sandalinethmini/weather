const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.subscribeUser = async (req, res) => {
  const { email, location } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, location, subscribed: true });
    } else {
      user.location = location;
      user.subscribed = true;
    }
    await user.save();
    res.json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
