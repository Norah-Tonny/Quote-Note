import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 


const PostedQuotesContainer = styled.div`
text-align:center;
gap:2em;
height:100vh;
background:blue;
`


const PostedQuotesBackground = styled.div`

`

const PostedQuotesParagraph = styled.p` 
margin-left:3em;
margin-top:3em;
`
const Paragraph = styled.p`
text-align:center;`

const ThumbsIcon = styled.div`

padding:1em;
color:blue;`



const PostedQuotesHeading = styled.h1`
 margin:2em;`




const Button = styled.button`
 color:blue;
 gap:2em;
 border:2px solid white;
 borde-radius:10px;
 margin-right:1rem;
 `

const QuoteIcons = styled.div` 
color:blue;
width:50vw;
height:50vh;
align-items:center;
background:white;
border-radius:10px;
margin:0 auto;`
const ButtonQuote = styled.button`
padding:1em 2em;
color:bule;
border-radius:10px;
border:2px solid blue;
`

const QuoteContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
//  margin-top:1em;`

const QuoteNote = styled.div`
display:flex;`


const PostedQuotes = () => {
    let [thumbDown, setThumbDown] = useState(0);
    let [thumbUp, setThumbUp] = useState(0);
    let [favorite, setFavorite] = useState(0)
    const [data, setData] = useState([]);
       const [opinion, setOpinion] = useState({
         likes: false,
        dislike: false,
       });
  
       useEffect(() => {
     const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "quotes"));
       querySnapshot.forEach((doc) => {
    
         console.log(doc.data())
        return setData(prev=>([...prev, doc.data()]));
        });
      }
      fetchData();
      
       }, []);
  
  const Unique = [];
  const UniqueQuote = data.filter((element) => {
    const isDuplicates = Unique.includes(element.Quotes)
    if (!isDuplicates) {
      Unique.push(element.Quote)
      return true;
    }
    return false;
  })
    console.log(UniqueQuote)
  const handleClick = () => {
       console.log(data)
     }  
       
  return (
      
        <PostedQuotesContainer>
            <PostedQuotesBackground>
        <PostedQuotesHeading>Posted Quotes</PostedQuotesHeading>
        <QuoteIcons> 
          <QuoteContainer>
            {UniqueQuote.map((item,index) => {
              return (
                <div id="QuoteNote" key={index}>
                  <p>{item.author}</p>
                  <Paragraph>"</Paragraph>
                  <PostedQuotesParagraph>{item.Quote}</PostedQuotesParagraph>
                  <Paragraph>"</Paragraph>
                  <PostedQuotesParagraph>{item.Author}</PostedQuotesParagraph>
                  <PostedQuotesParagraph>{item.Postedby}</PostedQuotesParagraph>
                  <ThumbsIcon>
                    <Button
                      onClick={(e) =>
                        setOpinion((prev) => ({ ...prev, likes: !prev.likes }))
                      }
                    >
                      <ThumbUpIcon />
                      {opinion.likes ? 1 : ""}{" "}
                    </Button>
                    <Button
                      onClick={(e) =>
                        setOpinion((prev) => ({
                          ...prev,
                          dislike: !prev.dislike,
                        }))
                      }
                    >
                      {" "}
                      <ThumbDownIcon/> {opinion.dislike ? 1 : ""}
                    </Button>
                    <Button
                      onClick={(e) =>
                        setOpinion((prev) => ({ ...prev, likes: !prev.likes }))
                      }
                    >
                      <FavoriteIcon/>
                      {opinion.likes ? 1 : ""}{" "}
                    </Button>
                  </ThumbsIcon>
                  
              
                    </div>
              );
            })}
          </QuoteContainer>
          </QuoteIcons>
        
            </PostedQuotesBackground>
    
    </PostedQuotesContainer>
    );
  };
export default PostedQuotes;