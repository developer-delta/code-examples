// get all the DOM elements we'll be working with
const text        = document.querySelector('.quote-text p');
const image       = document.querySelector('.quote-poster');
const attribution = document.querySelector('.attribution em');
const shuffle     = document.querySelector('button.shuffle');
const shuffleBlur = document.querySelector('button.shuffle .blur-bg');
const userQuote   = document.querySelector('input.custom-text');

// set up our initial arrays
let quotes       = ["To all who come to this happy place, welcome!", "You merely adopted the dark. I was born in it, molded by it", "My name is Inigo Montoya. You killed my father. Prepare to die", "In space no one can hear you scream", "Don't let the muggles get you down", "Dance like no one is watching", "I am Groot.", "Not all who wander are lost", "Live, Laugh, Love", "Goonies never say die", "I like my men how I like my chocolate. Dark and rich", "No coffee, no workee", "Life is like a box of chocolates"];
let images       = ["https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1600003251514-239257fb4c53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1598501479146-ef2b41258663?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80", "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1484923720570-4bc210954735?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1546792913-cfec613d2163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", "https://images.unsplash.com/photo-1421986527537-888d998adb74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]
let attributions = ["Jeffrey Dahmer", "Ed Gein", "Mark Zuckerberg", "Stan Lee", "George Lucas", "Marilyn Monroe", "Julia Roberts", "Barack Obama", "Mark Twain"];

// function to get random item from an array
const randomValueFromArray = (array) => {

  // Math.random() returns a random decimal less than 1
  // console.log(Math.random());

  // Math.floor rounds down to the nearest integer. (5.99 and 5.01 would both return 5 for example)
  // console.log(Math.floor(Math.random()));

  // multiplying the array length by Math.random() gives a random decimal between 0 and the length of the array.
  // console.log(Math.random() * array.length);

  // Math.floor drops the decimal so we can use the number as an index of the array
  const random = Math.floor(Math.random() * array.length);

  // return an item from the array at a random index
  return array[random];
}

// function that will update the DOM
const update = () => {

  // use our function to get random items from our arrays!
  text.innerHTML = randomValueFromArray(quotes);
  attribution.innerHTML = '- ' + randomValueFromArray(attributions);
  
  // here we use a variable here so that we can update the two backgrounds with the same image
  let pic = randomValueFromArray(images);
  image.style.backgroundImage = 'url(' + pic + ')';
  shuffleBlur.style.backgroundImage = 'url(' + pic + ')';

  // if the user entered a value, that will take priority and become the next quote, 
  // as well as getting added to the array
  if(userQuote.value) {
    quotes.push(userQuote.value);
    text.innerHTML = userQuote.value;
    userQuote.value = '';
  }

}

// shuffle everything on click
shuffle.addEventListener('click', update);

// Start with a random one
update();
