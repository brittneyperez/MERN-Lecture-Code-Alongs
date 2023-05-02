### ２０２３年０４月２７日
---
### Recap
- Routing Practice
- `useNavigate`, `useParams`, `Link`

## **Topics to Cover**
- **Back-End Introduction**
- **Back-end Set up**
- **Back-end Folder Structure**
- **HTTP Verbs**

---

## **Note: How to Set Up the Back-End**

1. Inside the project folder create a directory called **server**
    ```
    mkdir server
    ```
**Disclaimer!** Before installing anything, ensure to INITIALIZE a git repository.

2. After changing directory into server, install the `package.json` with the terminal command:
    ```
    npm init -y
    ```
    This will install the following:
    ```json
    {
        "name": "server",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }
    ```
3. In the same directory, we can now install Express:
    ```
    npm install express
    ```
    The file `package.json` should now have the depenecies listed at the end as:
    ```json
    // for brevitiy, the contents shown prior are omitted
    "dependencies": {
        "express": "[current version installed]"
    }
    ```
    This will not only show that express is installed, but now the server directory should also have `package-lock.json` and `node_modules`. 
    
    When `node_modules` are present. create a `.gitignore` file and type the following:
    ```
    /node_modules
    ```
    Now this directory will not be uploaded to GitHub in the case that we forget to delete them before pushing.
4. Create a react app as normal (outside the server folder).
    ```
    npx create-react-app project-name-here
    ```
### Creating our Server
5. Inside the server directory, create a file called `server.js`. (Not `.jsx`; this is unecessary for back-end which is just `Node`). The following is what we write in the file:
    ```js
    const express = require("express");
    const app = express();
    const port = 8000;
    // port can be changed to whatever is available
    ```
    The above code performs the functionaltiy of taking a request and giving it a response. On the next line, write the following:
    ```js
    app.get("/api", (req, res) => {
        res.json({ message: "Hello World!" });
    });
    ```