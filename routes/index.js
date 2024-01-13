const express = require('express');
const router = express.Router();
const cron = require('node-cron');
const { Coding, Sports, Fashion, Business, Exams, Trading } = require('./quotes');
const { userModel } = require('./users');
const { sendMail } = require('./mail');

// Use JSON parser middleware for handling JSON data
router.use(express.json());

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

// Schedule a cron job to send random quotes every Monday at 6:00 AM
cron.schedule("0 6 * * 1", async function () {
  try {
    // Fetch all users from the database
    const users = await userModel.find();

    // Iterate through each user and send random quotes based on their categories
    for (const user of users) {
      const categories = user.categories;
      const email = user.email;

      // Function to send random quotes based on user's categories
      await printRandomQuotes(categories, email);
    }
  } catch (error) {
    console.error('Error scheduling cron job:', error);
  }
});

// Function to get a random quote from a given model
async function getRandomQuote(model) {
  const count = await model.countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  const randomQuote = await model.findOne().skip(randomIndex);
  return randomQuote;
}

// Function to print random quotes based on user's categories
async function printRandomQuotes(categories, email) {
  try {
    // Select a random category from the user's preferences
    const randCat = categories[Math.floor(Math.random() * categories.length)];

    // Get a random quote based on the selected category
    let randomQuote;
    switch (randCat) {
      case "coding":
        randomQuote = await getRandomQuote(Coding);
        break;
      case "trading":
        randomQuote = await getRandomQuote(Trading);
        break;
      case "business":
        randomQuote = await getRandomQuote(Business);
        break;
      case "exams":
        randomQuote = await getRandomQuote(Exams);
        break;
      case "fashion":
        randomQuote = await getRandomQuote(Fashion);
        break;
      case "sports":
        randomQuote = await getRandomQuote(Sports);
        break;
      default:
        break;
    }

    // Send the random quote to the user via email
    await sendMail(email, randomQuote.quote);
  } catch (error) {
    console.error("Error fetching and sending random quotes:", error);
  }
}

// Save user subscription preferences
router.post('/subscribe', async function (req, res) {
  const { email, coding, sports, fashion, business, exams, trading } = req.body;

  const categories = [];

  // Check which categories the user has subscribed to and add to the array
  if (coding) categories.push(coding);
  if (sports) categories.push(sports);
  if (fashion) categories.push(fashion);
  if (business) categories.push(business);
  if (exams) categories.push(exams);
  if (trading) categories.push(trading);

  try {
    // Check if the user already exists in the database
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      // If the user exists, update their subscription preferences
      existingUser.categories = categories;
      await existingUser.save();
    } else {
      // If the user doesn't exist, create a new user with subscription preferences
      const newUser = new userModel({
        email,
        categories
      });
      await newUser.save();
    }

    // Send success response
    res.status(200).json({ success: true, message: 'Subscription updated successfully.' });
  } catch (error) {
    console.error('Error subscribing:', error);
    // Send error response
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

module.exports = router;
