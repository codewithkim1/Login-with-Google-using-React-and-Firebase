# Login with Google using React and Firebase

This project demonstrates how to implement Google authentication in a React application using Firebase. Users can log in using their Google accounts, and their authentication status is managed through Firebase Authentication.

## ## Prerequisites
Before running the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started


1. Clone the repository:

   ```jbash
   git clone https://github.com/codewithkim1/
   ```
   
  
2. Change to the project directory:
 ```bash
cd login-with-google

  ```



3. Install dependencies:


Run the script:

```bash
npm install
```
4. Create a Firebase project and obtain your Firebase configuration.

5. Create a file named firebase.js in the project root and add your Firebase configuration. For example:

 ```bash
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

  ```

5. Run the development server:

```bash
npm run dev
```
6. Open your browser and navigate to http://localhost:5173 to see the application.

## Demo

- run app
![image](https://raw.githubusercontent.com/codewithkim1/Login-with-Google-using-React-and-Firebase/master/Screenshot%20from%202023-12-27%2017-03-46.png)

- loggedin user

  ![image](https://raw.githubusercontent.com/codewithkim1/Login-with-Google-using-React-and-Firebase/master/Screenshot%20from%202023-12-27%2016-40-16.png)
