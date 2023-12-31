// An array that contains random quotes
const quotes = [ {
  quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  source: 'Albert Einstein',
  citation: '@Goodreads',
  year: '1911'
  },

  {
  quote: "Logic will get you from A to Z; imagination will get you everywhere.",
  source: 'Albert Einstein ',
  citation: '@Goodreads',
  year: '1915'
  },

  {
  quote: "Anyone who has never made a mistake has never tried anything new.",
  source: 'Albert Einstein',
  citation: '@Goodreads',
  year: '1919'
  },

  {
  quote: "Never memorize something that you can look up.",
  source: 'Albert Einstein',
  citation: '@Goodreads',
  year: '1913'
  },

  {
  quote: "A clever person solves a problem. A wise person avoids it.",
  source: 'Albert Einstein',
  citation: '@Goodreads',
  year: '1911'
  },

  {
    quote: "Laughter has the power to heal wounds, both physical and emotional..",
    source: 'Takeshi Kitano',
    citation: '@Goodreads',
    year: '2020'
    }


  ];

// A function that loops through the random quotes
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}


// A color generator that changes the color of the page each time a new quote prints
let colors = [
  {
      background: "#00adb5", 
      button: "#393e46"
  },
  {
      background: "#6639a6", 
      button: "#521262"
  },
  {
      background: "#3f72af", 
      button: "#112d4e"
  },
  {
      background: "#f95959", 
      button: "#455d7a"
  },
  {
      background: "#a3de83", 
      button: "#2eb872"
  },
  {
      background: "#118df0", 
      button: "#0e2f56"
  },
  {
      background: "#ff5722", 
      button: "#393e46"
  },
  {
      background: "#3fc1c9", 
      button: "#fc5185"
  }
];

// A lengthy timer function that refreshes the page every ten seconds
let timer;

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

function startTimer() {
  timer = setInterval(printQuote, 10000);
}


function clearTimer() {
  clearInterval(timer);
}

//This function prints out the source, citation, and year contained in the array
function printQuote() {

  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;

  if ("citation" in currentQuote) {
      html += "<span class='citation'> " + currentQuote.citation + "</span>";
  }

  if ("year" in currentQuote) {
      html += "<span class='year'> " + currentQuote.year + "</span>";
  }

  "</p>"

  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
 

 
  clearTimer();
  startTimer();
  //timer function end
}

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);
