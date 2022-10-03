import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Button = styled.button`
background:red;`
const QuotesItems =()=> {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(""); 
  useEffect(() => {
    getQuote()
  }, []); 


  const getQuote = () => {
    let url = ``
    fetch(url)
      .then(res => res.json)
      .then(data => {
        let dataQuotes = data.Quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes["randomNum"]
        setQuote = (randomQuote.quote);
        setAuthor = (randomQuote.author);
      })
  }
const span=styled.span``
    
    let [thumbDown, setThumbDown] = useState(0);
    let [thumbUp, setThumbUp] = useState(0);
    let [favorite,setFavorite]=useState(0)
  const handleClick = () => {
    getQuote();
  }
  return (

    <div id="quote_box">
          <div id="text">
          <FormatQuoteIcon/>
              <p>Whatever the mind of a man can conceive and believe,it can  achieve.</p><FormatQuoteIcon/></div>
          
          <div id="author"><p>Napolean Hill</p></div>
     <div id="buttons">

              <button onclick={handleClick} id="new_quote">New Quote</button>
              <button id="new_quote" onClick={() => console.log(setThumbUp(thumbUp += 1))}>
                  <ThumbUpIcon />
                  <span>{thumbUp}</span></button>
              <button id="new_quote" onClick={() => console.log(setThumbDown(thumbUp += 1))}> <ThumbDownIcon />
                  <span>{thumbDown}</span>
              </button>
              <button id="new_quote" onClick={() => console.log(setFavorite(favorite += 1))}><FavoriteIcon />
                  <span>{ favorite}</span>
              </button>
             <input id="new_quote" type="date"/>
          
           
      </div>
  </div>

  
  );
};

export default QuotesItems;