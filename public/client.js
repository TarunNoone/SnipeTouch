let buttonsView = document.getElementById('buttonsView'); //"<div>" for code snippets.

// Creating a button for each snippet of code.
Object.keys(actions).forEach( (key) => {
    if(key == 'webpages') {
        for(let i=0; i < actions[key].length; i++)
            createButton(key, actions[key][i]['url'], actions[key][i]['title'], 'cyan');
    } else if(key == 'apps') {
        for(let i=0; i < actions[key].length; i++)
            createButton(key, actions[key][i]['cmd'], actions[key][i]['title'], 'pink');
    } else {
        for(let i=0; i < actions[key].length; i++)
            createButton(key, actions[key][i]);
    }

});

function createButton(action, data, title, color) {
    let newBtn = document.createElement('button');
    newBtn.innerText = title ? title : data;
    newBtn.style.color=color;
    newBtn.addEventListener('click', () => {
        fetch('http://192.168.0.27:3000/secret', {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                "action": action,
                "data": data.toString()
            }),
        });
    })

    buttonsView.appendChild(newBtn);
}