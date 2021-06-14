The Odin Project

Etch-a-scetch

Lessons learned:
    -include script tag just above closing body tag
    -include window.onload function for variables/functions that need to run right away
        -such as event listeners
    -in js file, functions have to be defined before being called
        -cant have a function call in window.onload that is defined later in the file
            -must be defined first before window.onload
    -hard code what you can, dont make it harder on myself by making everything load in JS and dynamic
        -ex: making the divs display:grid and styling the new divs being created



TODO:
    -make a clear grid button
    -add user input functionality to determine grid size
        -change the for loop counter in buildGrid function
        -change the number in the repeating function in grid-template-rows/columns