<h1>EMRI Web App</h1>

- This is a web application designed to assist doctors in managing the treatment of several patients belonging to the 25 ambulances alloted to him using data such as patient vitals, accessing medical documents, and communicating with Emergency Medical Technicians (EMTs) for critical cases.

- The application is built using React for the frontend and Node.js with GraphQL for the backend.

The features being provided are the following :-

1. View Vitals: View vitals of patients assigned to the doctor.
2. Document Query: Search for medicines or procedures from uploaded medical documents.
3. Live Chat: Communicate with EMT assistants regarding critical cases.

<h2>Setup Instructions</h2>

To run the application, follow these steps:<br>
Backend Setup :<br>
Firstly if you have'nt installed react-draggable once then run on terminal<br>
**npm install react-draggable**<br>
Secondly if you have'nt installed re-resizable once then run on terminal<br>
**npm install re-resizable**<br>
Navigate to the **code** directory.<br>
Open a terminal and run **npm i**.<br>
Modify server.js:
Change the MongoDB connection string from **process.env.MONGO_URI** to <br> **'mongodb+srv://dass39:dass39@emri.vubkrrz.mongodb.net/?retryWrites=true&w=majority'.**<br>
Start the server by running **nodemon server.js**.<br>

<h2>Frontend Setup</h2>

    Navigate to the client directory.
    Open a terminal and run npm i.
    Start the frontend server by running npm run start.
    Access the application at http://localhost:3000.

<h2>Live Chat Setup</h2>

    Navigate to the emt dummy 2 directory.
    Open a terminal and run npm i.
    Start the chat server by running npm run start.
    Access the dummy EMT chat at http://localhost:3001.

<h2>Default Login (for Development)</h2>

    Username: admin
    Password: admin

<h2>Usage</h2>

    Navigate to / to access the login page. For development, you may directly navigate to /home.
    Once logged in, you'll be able to view patient vitals, search medical documents, and chat with EMTs.

<h2>Supported Links</h2>

    /: Login page.
    /home: Dashboard for doctors.
    /emt-dummy-2: Chat interface for dummy EMT.

<h2>Note</h2>

    Ensure that the port used is 3000 for the client and 3001 for the EMT chat. Modify CORS origin URL if necessary.

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

## Authors

- [Shivam Mittal](https://github.com/mittalshivam2709)
- [Manan Garg](https://github.manangarg21)
- [Mayank Mittal](https://github.com/mayankmittal29)
- [Bassam Adnan](https://github.bassamadnan)
- [Uday Bindal](https://github.udaybindal01)
