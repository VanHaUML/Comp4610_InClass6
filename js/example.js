// ADD NEW ITEM TO END OF LIST
var newItem = document.createElement('li');
newItem.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(newItem);

// ADD NEW ITEM START OF LIST
var newFirstItem = document.createElement('li');
newFirstItem.appendChild(document.createTextNode('kale'));
var list = document.querySelector('ul');
list.insertBefore(newFirstItem, list.childNodes[0]);
// ADD A CLASS OF COOL TO ALL LIST ITEMS
items = document.querySelectorAll('li');
for (var i = 0; i < items.length; i++) {
    items[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
number = items.length;
var nItem = document.createElement('span');
nItem.appendChild(document.createTextNode(number));
var heading = document.querySelector('h2');
heading.appendChild(nItem);