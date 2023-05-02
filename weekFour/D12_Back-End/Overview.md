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
    The above code performs the functionaltiy of taking a request and giving it a response. Where it says `const port = 8000` this means it will run on `localhost:8000` rather than on `localhost:3000` On the next line, write the following:
    ```js
    app.get("/api", (req, res) => {
        res.json({ message: "Hello World!" });
    });
    ```
    _What does the above code mean?_ Everytime there is a `get()` request to `/api`, we are getting the object response (in JSON) "`message: Hello World`".
6. Below this block of code, write:
    ```js
    app.listen( port, () => console.log(`Listening on port ${port}`) );
    ```
    _What does the above code mean?_ This means: listen to the request being done on this port (i.e., `port 8000`).
### Starting Our Server
7. Now that our server is ready, we can start our server by writing the terminal command (`cd server`):
    ```
    node server.js
    ```
8. Now go on the browser and type in the url `localhost:8000/api`.

### Nodemon
9. **Nodemon** can also be installed to run our server. This is useful if we want to see the updates to our server upon change as `node server.js` does not reflect what we add/remove in our running app. To start up the server using Nodemon, type this into the terminal:
    ```
    nodemon server.js
    ```
    However, Nodemon needs to be installed globally before being able to run this code above. This will require the following command to install globally:
    ```
    npm install -g nodemon
    ```
    Or if on Mac or Linux, `sudo` will need to be used:
    ```
    sudo npm install -g nodemon
    ```
    If we want the same ability to see our changes live without installing Nodemon, we can use this command:
    ```
    node --watch server.js
    ```
    If this poses an issue, then Nodemon may need to be installed.
10. Another way to check our responses is checking with the Postman app. We can type GET request URL—`localhost:8000/api`—and see the results get fetched. Watch as it returns the data in JSON.