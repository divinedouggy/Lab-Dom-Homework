let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

// Please create individual functions for each solution. Don't forget to call the function once you're finished.

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  let newTitle = document.querySelector('#main-title');
  newTitle.innerText = "Hi! I'm DOM Toretto.";

  // Part 2

  document.body.style.backgroundColor = 'turquoise';

  // Part 3

  let favList = document.querySelector('#favorite-things');
  let items = document.querySelectorAll('#favorite-things li')
  favList.removeChild(items[items.length - 1]);
  // Part 4

  let specialTitle = document.querySelectorAll('.special-title');
  
  specialTitle.forEach(element => {
    element.style.fontSize = '2rem';
  });

  // Part 5

  let pastRaces = document.querySelector('#past-races');
  let raceItems = document.querySelectorAll('#past-races li');
  pastRaces.removeChild(raceItems[3]);
  


  // Part 6

  let newLi = document.createElement('li');
  newLi.innerText = "Mishawaka";
  pastRaces.appendChild(newLi);

  // Part 7
  let domAdventures = document.querySelector(".main");
  let newDiv = document.createElement('div');
  newDiv.className = "blog-post purple";
  domAdventures.appendChild(newDiv);
  let newHeading = document.createElement('h1');
  newDiv.appendChild(newHeading);
  newHeading.innerText = "Mishawaka";
  let newPara = document.createElement('p');
  newDiv.appendChild(newPara);
  newPara.innerText = "I SOMERSAULTED MY CAR THROUGH CORNFIELDS!";

}
