const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const weatherController = require('./controllers/weatherController');
const cron = require('cron'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));


mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  

app.use(cors());

app.use(express.json());

app.use('/users', userRoutes);
app.use('/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const job = new cron.CronJob('0 */3 * * *', async () => {
  try {
    const subscribedUsers = await User.find({ subscribed: true });
    for (const user of subscribedUsers) {
     
      
    }
  } catch (error) {
    console.error('Error sending weather reports:', error);
  }
});
job.start();