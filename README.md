<!-- ## Title

## Description

## Theme

## Special Tracks

## Description

## Tech Stack

## Installation Steps

## Libraries and dependencies

## Declaration of previous work -->

<h1 align="center" id="title">Title : Mental Aarog</h1>

<p id="description">Our app named "Mental Aarog" is designed to address the pressing issue of untreated depression by providing early detection diagnosis and effective treatment through a holistic approach. The app utilizes various innovative methods to track users' mental health and provide personalized solutions to improve their well-being. Our use of web3.storage, FileCoin and IPFS ensures secure storage of user reports and our own token MAG adds a unique incentive and reward system to keep users engaged and motivated.</p>
 
<h2>🧐 Features</h2>

Here're some of the project's best features:

### METHODS THROUGH WHICH WE TRACK MENTAL HEALTH

- Social Media Analysis: We are currently taking data from user's twitter account (tweets retweets) and analyzing them using our ML model that says if the user is depressed or not based on their social media activities.
- Consultation: This features sends the report of collected data to the doctor so that the doctor can analyze the user's current situation and provide solutions based on the same. It also let's the user to connect with doctor.
- PHQ-9: We made a research and studied about WHO ( World Health Organization ) PHQ-9. According to study PHQ-9 has a positive impact on public opinion. We are making the users to take the test every week and track their mental health data based on PHQ-9.
- Smart Watch: We have a feature to connect our app with smart watch to gather sleep and steps data. Usually depressed person have different sleep cycle. So we collect the user sleep data to analyze the pattern and find solution. Staying in the same place for a long period may affect the person mental health. So we also collect step data to analyze.

### SOLUTIONS FOR DEPRESSION

- Daily Routine: The user is required to give their daily routine and a short summary that let us to track their mental health.
- Connect: This feature is useful for sharing your mental health data with your family members. This feature is useful especially for children. Parents can only track of their kid's physical health not the mental health.This is where our app comes in. This feature removes that barrier and lets them to track evne their kid's mental health.
- Smart Suggestion: People do different things in their time of depression which may be eating watching movies travelling reading ... Smart Suggestion suggests the user activities that helps them feel better. We have

1. Food: We have collected over 10000+ recipes in our database and we will suggest the user the correct food based on their situation we have also partnered with food deliver companies that will be useful for the user to order the food based on their mood.
2. Music: We've used spotify API to suggest user songs based on their current situtaion.
3. Reading: We will suggest user books to read that'll help them at their down times and we have also connected with audible that'll enable users to listen to audiobooks.
4. Travel: We suggest users places that are cost effective and at the same time that'll help them to overcome their depression.

5. Movies: We suggest movies with happy endings to users that will have an positive impact on their current mental health.

- Rewards: Why the user wants to download and use our app? This question hit us very hard. So we have come up with a solution of rewards. We are having our own crypto token named MAG and we are using it to reward the users who complete the tasks which we discussed above and we are using that crypto as an in-app currency for them to use at the "Smart Suggestion" feature enabling them to buy food movie tickets etc.. Rewarding the users with money motivates them to open the app daily and complete the tasks which will be beneficial for the users to fight their depression. Who would say no if you can earn and get rid of your depression at the same time!
- Chat Bot: This AI bot acts as personal companion for the users when the feel lonely. As of now we have made this using dialog flow. We have future improvements on this.
- Meditation: We have guided meditation which helps the users to be stress free and have relax mind set.
- Daily Facts: We send daily motivation facts for the app users to be motivated at all times which helps them to boot their career also.
- Our use of web3.storage FileCoin and IPFS ensures secure storage of user reports and our own token MAG adds a unique incentive and reward system to keep users engaged and motivated.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository from github</p>

git clone https://github.com/DevCrews/mental-aarog-hackverse4.0.git

<p>2. Install the required packages</p>

npm install

npm install --global truffle

<p>3. Download Ganache and setup the local blockchain server</p>

<p>4. Run the react app</p>

npm start

<p>5. Install the requirements for the ML model</p>

cd depression-detection-using-text

python -m venv env

source env/bin/activate

pip install -r requirements.txt

python main.py

<p>6. Compile and migrate Smart Contract for MAG</p>

cd token

truffle migrate

<p>7. Run the express server to handle the rewards section using web3.js</p>

node index.js

<h2>💻 Built with</h2>

Technologies used in the project:

- React
- Supabase
- Nodejs
- Expressjs
- Flask
- web3.storage (IPFS + FileCoin)
- Truffle
- Ganache
- Ethereum (Solidity)
- Scikit Learn

<h2>Libraries and dependencies </h2>

- React
- Supabase
- Expressjs
- Flask
- web3.storage (IPFS + FileCoin)
- Truffle
- Scikit Learn
- Material UI
- web3.js
- Axios

<h2>Declaration of previous work</h2>

The machine learning model that we used is already trained model for one of our previous projects. So for twitter analysis and daily routine analysis, we used the same model.

<h2>Works done in Hackathon</h2>
We implemented the following features

1. Connect
2. Consultation
3. Actvities and Rewards
4. Chat
5. Smart Watch
6. Meditation
7. PHQ - 9
8. Daily Facts
9. Daily Routine

We also deployed our own token named MAG (short form of Mental Aarog) on the ethereum blockchain! We have used web3.storage SDK which is implemented on IPFS and FileCoin.
