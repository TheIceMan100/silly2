var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + ' (' + totalItems + ')'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list
for(var i = 0; i < totalItems; i++) {
    var item = listItems[i].textContent.toLowerCase();
    if(item === "honey" || item === "fresh figs" || item === "kale") {
        listItems[i].className = 'cool';
    }
}




// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list





