let buttonsView = document.getElementById('buttonsView'); //"<div>" for buttons
let path = [mainActions]; // to keep track of folder depth.

// When back button on browser is pressed, update the buttons on screen.
window.addEventListener("popstate", (e) => {
    path.pop();
    createButtons();
});

// Creating initial set of buttons.
createButtons();

function createButtons() {
    // Remove existing buttons.
    buttonsView.innerHTML = "";
 
    // If parent folder exists, create a back button.
    if(path[path.length-2]) {
        let folderUp =  document.createElement('button');
        folderUp.innerText = "Back";
        folderUp.style.color='red';
        folderUp.addEventListener('click', () => {
            path.pop();
            createButtons();
        });
        buttonsView.appendChild(folderUp);
    }


    // Get the list of actionables in current folder.
    let actionables = path[path.length-1];

    for(let i=0; i < actionables.length; i++) {

        // Get the first actionable
        let item = actionables[i];

        // Based on type of actionable, create buttons.
        if(item[0] == 'folder') {
            for(let i=0; i < item[2].length; i++) {
                let folder = item[2][i];
                let folderDown =  document.createElement('button');
                if(!folder[0][3])
                    folderDown.innerText = folder[0][1];
                folderDown.style.color='cyan';
                folderDown.addEventListener('click', () => {
                    // https://youtu.be/d10k3iiZ_xk?t=154
                    history.pushState(0, 0);
                    path.push(folder);
                    createButtons();
                });
                buttonsView.appendChild(folderDown);
            }
        } else if(item[0] == 'text') {
            for(let i=0; i < item[2].length; i++) {
                createButton(item[2][i], 'text', item[2][i]);
            }
        } else if(item[0] == 'apps') {
            for(let i=0; i < item[2].length; i++) {
                let app = item[2][i];
                createButton(app[0], 'apps', app[1]);
            }
        } else if(item[0] == 'url') {
            for(let i=0; i < item[2].length; i++) {
                let url = item[2][i];
                createButton(url[0], 'url', url[1]);
            }
        } else if(item[0] == 'import') {
            for(let i=0; i < item[2].length; i++) {
                createButton(item[2][i], 'import', item[2][i]);
            }
        }
    }
}

// Helper function to create buttons.
function createButton(title, type, data, color, url) {
    let newBtn = document.createElement('button');

    if(color)
        newBtn.style.color = color;
    if(url) {
        newBtn.style.backgroundImage = url(url);
    } else {
        newBtn.innerText = title;
    }

    // Send type and data to the server on click.
    newBtn.addEventListener('click', () => {
        fetch('http://192.168.0.27:3000/secret', {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": type,
                "data": data
            })
        });
    })

    buttonsView.appendChild(newBtn);
}