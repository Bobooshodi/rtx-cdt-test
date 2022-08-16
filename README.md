# software-engineer-test

How to run With Docker (recommended)
1. Have Docker and Docker-compose installed on your machine 
2. Clone this repo
3. Navigate to the directory containing the the cloned Repo.
4. modify the `Server/.env` and `docker/db/.env` files accordingly
5. Run `docker-compose up -d --build` in the terminal from the root directory of the cloned Repo.

How to run Without Docker
1. see the Prerequisite section of this document 
2. Clone this repo
3. Navigate to the directory containing the the cloned Repo.
4. Navigate to the `/Server` directory
5. modify the `.env` file accordingly
6. Run `npm test` in the terminal from the `Server` directory to view the tests.
7. run `npm run dev` in the terminal from the `Server` directory to start the server.
8. Navigate to the `/client` directory from the root folder
9. Modify the `vue.config.js` file accordingly
10. run `npm run serve` in the terminal from the `client` directory to start the client / UI.

Difficulty: Level 1

Overview:
1. This test is owned by RTX and is solely used to facilitate RTX interview process only. 
2. This test covers the basics of working with VueJS/NodeJS working environment, which includes
    a) Basic git operations
    b) NodeJS environment setup
    c) VueJS environment setup
    d) CRUD with postgresql DB
    e) Unit test with jest
3. This test is intented to solve real life scenario with open book concepts. 

Test objectives:
1. Ability to setup and run nodejs and vuejs application
2. Understanding of how API works, through routing in expressjs
3. Understanding of basic error handling
4. Understanding of basic CRUD operations with postgresql
5. Know how to write unit test and/or integration test 

Prerequisite:
1. Have git, npm installed and running in local machine.
2. Have postgresql installed in local machine
3. Use node version v16.13.1

Optional:
1. Have Docker and Docker-compose installed on your machine.

Goals:
1. Get a list of property list from external API
2. Display the list of data in vuejs frontend
3. Assuming postgresql is installed at localhost:5432, save the list and get it on next load
4. Add the functionality to update and delete saved record
5. Write unit test and/or integrated test for all functinalities

Steps:
1. Clone this repo
2. Feel in the blanks in code and get both client and server up and running in local
3. Create basic implementation of CRUD operations for predefined data
4. Write test to cover both client and server functionalities, especially API
5. Do proper error handling to tackle network issues (4xx, 5xx errors)
6. Submit completed source code

Bonus Tips:
1. Showcase your ability to write clean code
2. Showcase your understanding on object-oriented programming concepts using javascript
3. You may change the structure of the files to achieve the same goals
4. Using standard library will be a plus
5. Commenting your thinking flow and add function definition will be a big plus