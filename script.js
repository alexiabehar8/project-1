
// const preserveColors = ['red1', 'red2', 'red3', 'green', 'blue', 'yellow', 'orange1', 'orange2', 'orange3', 'orange4','orange5','orange6', 'purple'];

// const colorMap = {
//     'red1': 'red',
//     'red2': 'red',
//     'red3': 'red',
//     'green': 'green',
//     'blue': 'blue',
//     'yellow': 'yellow',
//     'orange1': 'orange',
//     'orange2': 'orange',
//     'orange3': 'orange',
//     'orange4': 'orange',
//     'orange5': 'orange',
//     'orange6': 'orange',
//     'purple' : 'purple'
// }

// function changeColor(event) {
//     const clickedTd = event.target;

//     // If the clicked td has a preserved color ID
//     if (preserveColors.includes(clickedTd.id)) {
//         // If it's already the preserved color, change it to white
//         if (clickedTd.style.backgroundColor === colorMap[clickedTd.id]) {
//             clickedTd.style.backgroundColor = 'white';
//         } else {
//             // Otherwise, apply the preserved color
//             clickedTd.style.backgroundColor = colorMap[clickedTd.id];
//         }
//     } else {
//         // For non-preserved colors, toggle between grey and white
//         if (clickedTd.style.backgroundColor === 'grey') {
//             clickedTd.style.backgroundColor = 'white';
//         } else if (clickedTd.style.backgroundColor === 'white') {
//             clickedTd.style.backgroundColor = 'grey';
//         } else {
//             clickedTd.style.backgroundColor = 'grey';
//         }
//     }
// }


// const tds = document.querySelectorAll('td');
// tds.forEach(function(td) {
//     td.addEventListener('click', changeColor);
// });


 

const preserveColors = ['red1', 'red2', 'red3', 'green1','green2','green3','green4', 'green5', 'blue1', 'blue2', 'blue3', 'blue4', 'yellow1','yellow2','yellow3','yellow4','yellow5','yellow6', 'orange1', 'orange2', 'orange3', 'orange4', 'orange5', 'orange6', 'purple1', 'purple2', 'purple3', 'purple4', 'purple5', 'purple6'];

const colorMap = {
    'red1': 'red',
    'red2': 'red',
    'red3': 'red',
    'green1': 'green',
    'green2': 'green',
    'green3': 'green',
    'green4': 'green',
    'green5': 'green',
    'blue1': 'blue',
    'blue2': 'blue',
    'blue3': 'blue',
    'blue4': 'blue',
    'yellow1': 'rgb(255, 234, 0)',
    'yellow2': 'rgb(255, 234, 0)',
    'yellow3': 'rgb(255, 234, 0)',
    'yellow4': 'rgb(255, 234, 0)',
    'yellow5': 'rgb(255, 234, 0)',
    'yellow6': 'rgb(255, 234, 0)',
    'orange1': 'orange',
    'orange2': 'orange',
    'orange3': 'orange',
    'orange4': 'orange',
    'orange5': 'orange',
    'orange6': 'orange',
    'purple1': 'purple',
    'purple2': 'purple',
    'purple3': 'purple',
    'purple4': 'purple',
    'purple5': 'purple',
    'purple6': 'purple',

};

// Function to check if all the right cells are set to their respective colors
function checkCompletion() {
    let allCorrect = true;

    // Loop through each preserved color ID
    preserveColors.forEach(function(id) {
        const td = document.getElementById(id);
        if (td && td.style.backgroundColor !== colorMap[id]) {
            allCorrect = false; // If any color doesn't match, set to false
        }
    });

    // If all correct, redirect to a new page
    if (allCorrect) {
        window.location.href = "endpage.html"; // Replace 'newpage.html' with the URL of the page you want to navigate to
    }
}

// Function to handle click event
function changeColor(event) {
    const clickedTd = event.target;

    // If the clicked td has a preserved color ID
    if (preserveColors.includes(clickedTd.id)) {
        // If it's already the preserved color, change it to white
        if (clickedTd.style.backgroundColor === colorMap[clickedTd.id]) {
            clickedTd.style.backgroundColor = 'white';
        } else {
            // Otherwise, apply the preserved color
            clickedTd.style.backgroundColor = colorMap[clickedTd.id];
        }
    } else {
        // For non-preserved colors, toggle between grey and white
        if (clickedTd.style.backgroundColor === 'grey') {
            clickedTd.style.backgroundColor = 'white';
        } else if (clickedTd.style.backgroundColor === 'white') {
            clickedTd.style.backgroundColor = 'grey';
        } else {
            clickedTd.style.backgroundColor = 'grey';
        }
    }

    // Check if all the cells are correctly colored after each click
    checkCompletion();
}

// Access all <td> elements and add the click event listener
const tds = document.querySelectorAll('td');
tds.forEach(function(td) {
    td.addEventListener('click', changeColor);
});
