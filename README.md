# SnipeTouch

**Update 1.0**
* Added folder structure
* Moved `snippets.js` to `actionables.js`
* Added `import` type. Import statements are added at the top of text field.

<br><br>

Insipred by Taran Van Hemert's (Linus Tech Tips) macro keyboard video, I wanted to make something similar to help me code.

**Features:**
* Type in code snippets
* Open webpages
* Open applications


<img src="https://github.com/TarunNoone/SnipeTouch/blob/master/images/img1.jpg?raw=true" alt="Screenshot1" height="400px">
<br>
<div>
<img src="https://github.com/TarunNoone/SnipeTouch/blob/master/images/img2.jpg?raw=true" alt="Screenshot2" height="400px"> <img src="https://github.com/TarunNoone/SnipeTouch/blob/master/images/img3.jpg?raw=true" alt="Screenshot3" height="400px"> <img src="https://github.com/TarunNoone/SnipeTouch/blob/master/images/img4.jpg?raw=true" alt="Screenshot4" height="400px"> <img src="https://github.com/TarunNoone/SnipeTouch/blob/master/images/img5.jpg?raw=true" alt="Screenshot5" height="400px"> 
 </div>

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

To add code snippets, edit `public/actionables.js` file.

To edit how the webpage looks, edit files in `public` folder.


**Dependecies:**
  * NodeJS
    * Express
    * CORS
    * Express Rate Limit
    * Child Process
  * xdotool / python
    * For keyboard input

**References:**

* https://www.youtube.com/watch?v=Arn8ExQ2Gjg&t=42s
* https://www.youtube.com/watch?v=JnEH9tYLxLk
* https://www.youtube.com/watch?v=RTb1_8GWyCU

* https://stackoverflow.com/questions/15825333/how-to-reload-current-page-in-express-js
* https://stackoverflow.com/questions/27855154/website-elements-and-font-are-too-small-in-mobiles
* https://stackoverflow.com/questions/37673454/javascript-iterate-key-value-from-json/37673499
