function buildGrid() {
    for (let i = 0; i < 4096; i++) {
        const container2 = document.getElementById('gridContainer');
        const div = document.createElement('div');
        container2.appendChild(div);
        // div.style.cssText = 'background-color: red';
        div.classList.add('grid-item');
    }
}

window.onload = function () {
    buildGrid();

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