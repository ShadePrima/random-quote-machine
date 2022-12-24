import React from 'react';
import './App.css';

let quotes = [
  {
    quote:
      'It\u2019s not the years in your life that count. It\u2019s the life in your years.',
    name: 'Abraham Lincoln',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    name: 'Norman Vincent Peale',
  },
  {
    quote:
      'Either write something worth reading or do something worth writing.',
    name: 'Benjamin Franklin',
  },
  {
    quote:
      'Nothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d',
    name: '\u2013Audrey Hepburn',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    name: 'Steve Jobs',
  },
  {
    quote: 'If you can dream it, you can achieve it.',
    name: 'Zig Ziglar',
  },
  {
    quote:
      'What lies behind us and what lies before us are tiny matters compared to  what lies within us.',
    name: 'Ralph Waldo Emerson',
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    name: 'Eleanor Roosevelt',
  },
];

function App() {
  let initialState = {
    quote: '',
    name: '',
  };

  const [quote, setQuote] = React.useState(initialState);

  let generateQuote = () => {
    console.log(quotes.length);
    let random = Math.floor(Math.random() * (quotes.length - 0)) + 0;
    console.log('random', random);
    setQuote(quotes[random]);
  };

  React.useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className='container'>
      <h1>Random Quote Machine</h1>
      <div className='wrapper' id='quote-box'>
        <h2 id='text'>{quote.quote}</h2>
        <br />
        <div>
          <h3 id='author'>{quote.name}</h3>
        </div>
        <div>
          <a
            id='tweet-quote'
            target='_blank'
            rel='noreferrer'
            href='http://twitter.com/intent/tweet'
          >
            <button id='twiter'>
              <i className='fab fa-twitter'></i>
            </button>
          </a>
          <a href='https://www.tumblr.com' target='_blank' rel='noreferrer'>
            <button id='timblr'>
              <i className='fab fa-tumblr'></i>
            </button>
          </a>

          <button id='new-quote' onClick={generateQuote}>
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
