// - Change the background color of box1
document.getElementById('box1').style.backgroundColor = 'beige'

// - Set the font size in box1s to 44px
document.getElementById('box1s').style.fontSize = '44px'


// - Shrink box2 by half
// changing width and height will create a different behavior
document.getElementById('box2').style.transform = 'scale(0.5)'


// - Double the size of box2s
// changing width and height will create a different behavior
document.getElementById('box2s').style.transform = 'scale(2)'


// - Create `div` with the class of `circle` and put it in the middle of box3
const div = document.createElement('div')
const att = document.createAttribute("class")
att.value = 'circle'
div.setAttributeNode(att)
document.getElementById('box3').appendChild(div)


// - Write an arrow function for #box5 called `clearFinished` that will move all the completed tasks the chores in the list that have the class "done" to the #box5s.
const clearFinished = className => {
  const items = document.querySelectorAll(className)
  //items is a node list
  //to remove the each child node from the DOM you need to loop through each member of the node list.The forEach removes the child node. It does not modify the items object.
  items.forEach(node => node.parentNode.removeChild(node))

  //select the new parent node to insert the node objects that were removed from #box5 ul
  const parent = document.querySelector('#box5s ul')
  //looping through items and appendding each node to the parent node. 
  items.forEach(node => parent.appendChild(node))
}
// - Call your function
clearFinished('.done')

// - Write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

//   -  using the .appendChild().
function addChore(element, text, newClass) {
  const node = document.createElement(element)
  const att = document.createAttribute("class")
  att.value = newClass
  node.setAttributeNode(att)
  const textnode = document.createTextNode(text)
  node.appendChild(textnode)
  document.querySelector('#box5 ul').appendChild(node)
}


//   -  using .innerHTML.
function addChore2(element, text, newClass) {
  const node = document.createElement(element)
  const att = document.createAttribute("class")
  att.value = newClass
  node.setAttributeNode(att)
  document.querySelector('#box5 ul').appendChild(node).innerHTML = text;
}

// - Call your function

addChore('li', 'potatoes', 'undone');
addChore2('li', 'sugar', 'undone')
// - Reverse the text in #box6
let str = document.querySelector('#box6 p').innerHTML;
let reverseStr = "";
//the for loop begins at the last letter of the string and loops until it gets to the first letter => position 0 of the string.
for (i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i]
}
document.querySelector('#box6 p').innerHTML = reverseStr;


// - Put <em></em> tags around the word "keep" in #box6s
document.querySelector('#box6s p').innerHTML = `the word <em>"keep"</em> is not italicized, and i'd like to keep it that way thank you.`;
