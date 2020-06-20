# SnipeTouch

Insipred by Taran Van Hemert's (Linus Tech Tips) macro keyboard video, I wanted to make something similar to help me code.
First, I added just the code snippets. Later, I added webpages option, to open YouTube, etc.

### How to use:
After downloading the files, navigate to the folder containing "server.js" file and type in terminal:
```sh
# to install dependencies
npm install

# to start the server
npm start
```

* Open `http://ip-address-of-server:3000` on your mobile (or any other device).
* Place the mouse where you want to type the snippet, and click.

> Note: Devices should be on the same network 

### Info:

To add code snippets, edit `public/snippets.js` file.

To edit how the webpage looks, edit files in `public` folder.


**Dependecies:**
  * NodeJS
    * Express
    * CORS
    * Expree Rate Limit
    * Child Process
  * xdotool / python
    * For keyboard input

**References:**

* https://www.youtube.com/watch?v=Arn8ExQ2Gjg&t=42s
* https://www.youtube.com/watch?v=RTb1_8GWyCU

* https://stackoverflow.com/questions/15825333/how-to-reload-current-page-in-express-js
* https://stackoverflow.com/questions/27855154/website-elements-and-font-are-too-small-in-mobiles
* https://stackoverflow.com/questions/37673454/javascript-iterate-key-value-from-json/37673499
