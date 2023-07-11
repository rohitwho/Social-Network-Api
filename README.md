# Social-Network-Api


 # ![](https://img.shields.io/badge/Mongoose-ExpressJs-blue-Routes-red) ![](https://img.shields.io/badge/license-MIT-brightgreen) ![](https://img.shields.io/badge/Mongodb-orange) ![](https://img.shields.io/badge/node.js) 




 ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

  ## Video Link
https://drive.google.com/file/d/1vPRF1aTBxB9ZUGVYeQ0-MylJzZdRTvkY/view?usp=sharing


  


## Description
The given social network API is a server application that provides various routes for interacting with users, thoughts, reactions, and friend lists. The application utilizes Mongoose models to synchronize data with a MongoDB database. Here is a descriptive summary of the API functionality:

1. Server Initialization: When the application is invoked, the server is started, allowing it to receive and handle incoming requests.

2. Database Sync: The Mongoose models are synced with the MongoDB database, ensuring that the data structure and schema are consistent.

3. User and Thought Retrieval: Insomnia, an API testing tool, can be used to make GET requests to retrieve data about users and thoughts. The response for each of these routes is formatted in JSON, providing a structured representation of the requested data.

4. User and Thought Manipulation: Using Insomnia, POST, PUT, and DELETE requests can be made to create, update, and delete users and thoughts in the database. These routes enable the addition, modification, and removal of user profiles and thought content.

5. Reaction Handling: POST and DELETE requests can be made in Insomnia to create and delete reactions associated with specific thoughts. Users can express their reactions to thoughts, and these reactions can be managed through the API.

6. Friend List Management: Similarly, POST and DELETE requests in Insomnia can be used to add and remove friends from a user's friend list. Users can establish connections with other users and manage their friend relationships through the API.

Overall, the social network API provides a set of routes that allow users to interact with the application's core entities, including users, thoughts, reactions, and friend lists. It enables the retrieval, creation, modification, and deletion of data through well-defined HTTP endpoints, facilitating the functionality of a social networking platform.


## Installation
To set up the project on your local machine, follow these steps:

1.Clone the repository: git clone <repository_url>
2.Navigate to the project directory: cd Social-Network-Api
3.Install the dependencies: npm install

## Usage
To start the server, run the following command:

`node  .\utils\seeds.js`

`npx nodemon server.js`


.


## Installation

`npm i`
`npm run seed`
`npm run watch`

## Dependencies

Express-Routes,Mongoose,MongoDB,Nodemon

## Language and Technology Used

Javascript

## Creator

rohitwho

## Contact

rohitnayyar54@gmail.com

## Contributors

NONE

## Testing

N/A

## License

Licensed under the MIT license

## Questions

If you have encounter any issues or have any Questions Regarding this Repo. Please send your questions [here](mailto:rohitnayyar54@gmail.com?subject=[GitHub]%20Dev%20Connect) or visit [github/rohitwho](https://github.com/rohitwho).
