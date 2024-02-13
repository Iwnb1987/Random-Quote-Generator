const quotes = [ {
  quote: "The only reason for time is so that everything doesn't happen at once.",
  source: 'Albert Einstein',
  citation: '@BrainyQuotes',
  year: '1912'
  },
    {
  quote: "A person who never made a mistake never tried anything new.",
  source: 'Albert Einstein ',
  citation: '@Reader\'s Digest',
  year: '1913'
  },
    {
  quote: "Work hard in silence, let your success be your noise.",
  source: 'Anonymous'
  },
    {
  quote: "Never memorize something that you can look up.",
  source: 'Albert Einstein',
  year: '1914'
  },
    {
  quote: "The greatest pleasure in life is doing what people say you can't do.",
  source: 'Walter Bagehot'
  },
    {
    quote: "Laughter has the power to heal wounds, both physical and emotional.",
    source: 'Takeshi Kitano',
    year: '2020'
    },
      {     
      quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
      source: 'Earl Nightingale'
    },
      {    
  quote: "A river cuts through rock, not because of its power, but because of its persistence.",
  source: 'Jim Watkins'
  },
    {  
  quote: "Success is achieved twice. Once in the mind and the second time in the real world.",
  source: 'Azim Premji',
  year: '2024'
  },
    {   //10
  quote: "Life is really simple, but we insist on making it complicated.",
  source: 'Confucius',
  Description: '- Philosopher'
  },
    {
  quote: "Preparation for tomorrow is hard work today.",
  source: 'Bruce Lee',
  Description: '- Movie Star'
    }
      ];

     

// A function loop that controls which random quote generates
function generateQuote(array) {
const quoteIndex = Math.floor(Math.random() * 12); //manipulates(line 2 const) & returns array index values 0-11
  for (let i = 0; i < array.length; i++) {
       return array[quoteIndex];
    }
    };

function printQuote () {
  let thisQuote = generateQuote();
  let html = newFunction(); 
  if ("citation" in thisQuote) {
          html += `<span class='citation'> ${thisQuote.citation}</span>`;
      }
    
      if ("year" in thisQuote) {
          html += `<span class='year'> ${thisQuote.year}</span>`;
      }

      if ("Description" in thisQuote) {
        html += `<span class='Description'> ${thisQuote.Description}</span>`
      }
    
      "</p>"
      document.getElementById("quote-box").innerHTML = html;
      document.body.style.background = (generateColor()).background;

  function newFunction() {
    let html = `<p class='quote'> ${thisQuote.quote}</p>`;
    html += `<p class='source'> ${thisQuote.source}`;
    return html;
    }
     };


     let colors = [
    {
      background: "#00FFFF" //aqua
     },
    {
    background: "#6A5ACD" //slate blue
    },
    {
    background: "#4169E1" //royal blue
    }, 
    {
    background: "#5F9EA0" //cadet blue
    },
    {
    background: "#DC143C" //crimson
    },
    {
    background: "#9932CC" //dark orchid
    },
    {
    background: "#FF00FF" //fuchsia
    }
  ];
  

let timer; //refreshes the page every ten seconds

function generateQuote() {
return quotes[(Math.floor(Math.random() * quotes.length))];
}

function generateColor() {
return colors[(Math.floor(Math.random() * colors.length))];
}

function startTimer() {
  timer = setInterval(printQuote, 10000);
}

function clearTimer() {
  clearInterval(timer);
}
 
  clearTimer();
  startTimer();
  //timer function end

 printQuote();                         //listens for a the 'show another quote' button click
  document.getElementById('load-quote').addEventListener("click", () => {
    //might add something here later.
  });
