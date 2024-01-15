![Application](https://socialify.git.ci/jaypokharna/quoter/image?font=Bitter&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark)
<p align="center"> · <a href="https://tame-gold-deer-coat.cyclic.app/">View Demo</a> · </p>

## 📝 About the project

<b>Quoter</b> is a web application that allows users to subscribe to daily motivational quotes. Users can select categories such as coding, trading, exams, business, fashion, and sports to receive random motivational quotes tailored to their preferences. The application utilizes Node.js, Express, MongoDB, and Node-cron for scheduling tasks.
 
## Installation 🛠️

1. Clone the repo.

```bash
git clone https://github.com/jaypokharna/quoter

cd quoter
```
2. Install the dependancies/packages.

```bash
npm install
```
3. Replace the MongoDB connection string in place of `<MongoDB_Connection_String>` in `quotes.js` file with your own credentials.

## Database Setup 📊

1. Create a MongoDB database named `quotes`.
2. Inside the quotes database, create collections named `codings`, `fashions`, `tradings`, `businesses`, `exams` and `sports`.
3. Import the respective collection's JSON data from the collections folder into their corresponding collections.

## Usage 🚀

1. Start the application: `npm nodemon` or `npm run dev` or `npm start` for development with nodemon.
2. Access the application in your browser: http://localhost:3000/

## Features 🌟
- <b>User Subscription:</b> Users can subscribe to daily motivational quotes by providing their email and selecting one or more categories of interest.
- <b>Category Preferences:</b> Users can choose from a variety of categories, including coding, trading, exams, business, fashion, and sports.
- <b>Random Quotes:</b> Scheduled cron jobs deliver random motivational quotes to users every Monday at 6:00 AM based on their selected categories.
- <b>Flash Messages:</b> Informative flash messages are displayed to users for successful subscriptions, category preference updates, and errors.

## Technologies Used 💻

- <b>Node.js:</b> The server-side JavaScript runtime environment.
- <b>Express:</b> A minimal and flexible Node.js web application framework.
- <b>MongoDB:</b> A NoSQL database used for storing user information and motivational quotes.
- <b>Node-cron:</b> A cron-like job scheduler for Node.js, used to schedule tasks like sending random quotes.
- <b>Nodemailer:</b> A module for sending emails, utilized to deliver motivational quotes to users.
- <b>Express Session and Connect-flash:</b> Middleware for managing user sessions and displaying flash messages.

## Sreenshot

![Screenshot](https://github.com/jaypokharna/quoter/assets/105444251/112b782b-8c0b-43fd-92d7-a1371b9ca485)

![Screenshot](https://github.com/jaypokharna/quoter/assets/105444251/f04322cd-275e-4ee5-a084-7341e2a0db42)

![Screenshot](https://github.com/jaypokharna/quoter/assets/105444251/b03129d7-8522-4040-a777-6c76b0b5d872)

## Contributing 🤝

Contributions to the <a href="https://github.com/jaypokharna/quoter" >Quoter</a> project are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request. Make sure to follow the existing code of conduct and conventions when contributing.

Feel free to customize this `README` file based on your specific project details and requirements.





