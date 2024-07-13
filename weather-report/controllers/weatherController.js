const User = require('../models/user'); 

exports.getUserWeatherData = async (req, res) => {
  const { email, date } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const weatherData = user.weatherData.find(data => data.date.toISOString().slice(0, 10) === date);

    if (!weatherData) {
      return res.status(404).json({ message: 'Weather data not found for the given date' });
    }

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
