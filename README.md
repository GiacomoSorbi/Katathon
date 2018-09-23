# Katathon

## General
This project is meant to connect together all the coding aficionados that started to meet together (either physically or remotely) to start solving a bunch of pre-selected problems in a competitive and friendly way.

## Local Setup
To set up this repo for local viewing/testing, first of all make sure you have the latest stable versions of NodeJS and NPM installed.
Once you have cloned the repo, navigate to the root directory in terminal and install the dependencies with:
```
npm install
```
You will need to add a .env file to the project root to access the test database. You can populate this file with the credentials for your own MongoDB database to test the APIs. The .env file contents should be in the format:

```
DB_USER=username
DB_PASS=password
```

where `username` is your MongoDB database user name and `passsword` is your MongoDB database password.

_Note: You will also need to make the necessary modifications to the config file if you are testing with your own database._

To start the server:
```
npm run dev
```
In your browser, navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Aims and Goals
* create the main site of a community of competitive coding enthusiasts
* practice development skills, including:
    * front-end development
    * back-end development
    * UX design
    * copy writing
    * user profile management
    * mailing
    * APIs integration
* spread computer literacy and involve minorities in the IT industry

## Features
* static pages including content like:
  * who we are
  * our goals
  * how to join us/create your local katathon team
  * useful resources to improve your skills
  * various disclaimers and legal mumbo jumbo to pretend we thought things through on that side
* dynamic pages including:
  * user profiles, including:
    * users listing, searching and filtering
    * generic user info
    * integration with other social platform to share information
    * favoured languages
    * favoured locations among the ones available
    * overall score display
    * badges
    * gravatar and/or github avatar integration
    * new user registration, including:
      * stand alone registration
      * registration using social media APIs
    * referral to invite users
    * notification preferences
    * other preferences
    * disable account feature
    * reactive account feature
    * delete account feature
  * events management, including:
    * integration with CodeWars or other competitive coding sites APIs
    * creation and management of a list of katas for each single event with relative scores
    * check on the solved problems on a single user basis before and after the event to auto-compute scores
    * sending newsletter to registered users
    * sending reminders to registered users
  * locations management, including
    * locations listing, searching and filtering
    * location rating by registered users according to specific parameters on a 0-10 basis
    * new location submission
    * old location deletion
* newsletter management
  * creation and sending of generic newsletter with tips on competitive coding, next events and more
  * subscribe/unsubscribe database integration
* social media integration with:
  * integration with automated feed for most important social platforms, including:
    * twitter
    * google plus (quite good for SEO, do not complain that *you* are not using it ;) )
    * linkedin
    * facebook
