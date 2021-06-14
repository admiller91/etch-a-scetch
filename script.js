function buildGrid() {
    for (let i = 0; i < 4096; i++) {
        const container2 = document.getElementById('gridContainer');
        const div = document.createElement('div');
        container2.appendChild(div);
        // div.style.cssText = 'background-color: red';
        div.classList.add('grid-item');
    }
}

function getNumer() {
    let num = prompt('Enter how big the grid should be. 1-64');
    buildCustomGrid(num);
}

function buildCustomGrid(num) {
    let numSqrd = num*num;
    for (let i = 0; i < numSqrd; i++) {
        const container2 = document.getElementById('gridContainer');
        const div = document.createElement('div');
        container2.appendChild(div);

        //change root CSS variable to equal num
        let root = document.documentElement;
        root.style.setProperty('--grid-size', num);
        
        div.classList.add('grid-item');
    }
}

window.onload = function () {
   //buildGrid();
    getNumer();
    // Event Listener - When button is clicked
    const button = document.querySelectorAll('button');
    button.forEach((event) => {
        event.addEventListener('click', () => {
            alert(event.id);
            //buildGrid(); //doesnt work - just adds more divs
        });
    });

    //Event Listener - when a mouse enters a div
    const divs = document.querySelectorAll('div');
    divs.forEach((event) => {
        event.addEventListener('mouseenter', () => {
            // console.log('clicked a div');
            event.style.cssText = 'background-color: black'; //changes the main div color, not the grid divs
            // alert('clicked div');
        });
    });
}