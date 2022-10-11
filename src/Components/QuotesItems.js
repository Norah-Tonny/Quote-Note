import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const QuoteContainer = styled.div``;
const Container = styled.div`
margin:0 auto;
`;

const Buttons = styled.div`
display:flex;
justify-content: center;
`;
const QuoteBox = styled.div`
  border: 2px solid #5d8bf4;
  border-radius: 8px;
  display: inline-block;
  background: #2D31FA;
  padding: 3em;
  margin: 2em;
`;

const QuoteText = styled.textarea`
  border-radius: 6px;
  padding: 2em 4em;
  font-weight:bold;
  font-size:1.3rem;
  `;
  const QuoteAuthor = styled.input`
  padding: 1em 3em;
  border-radius: 6px;
  margin: 1em;
  font-weight:bold;
  font-size:1.3rem;
  `;
  const TextAuthor = styled.div`
  text-align: center;
  color: blue;
  `;
  
  const QuoteButton = styled.button`
  background:#5D8BF4;
  color: #2D31FA;
  padding: 1em 3em;
  border-radius: 6px;
  border: none;
  font-weight:bold;
  font-size:1.3rem;
  
  `;
  const IconsBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  `;
const QouteInput = styled.div`
  display: flex;
  gap: 1em;
  text-align: center;
  padding-top: 2rem;
`;
const ParaMessage = styled.p`
  color: blue;
`;
const placeholder = styled.div`
  color: blue;
`;
// const span = styled.span``;

const QuoteItems = () => {
  let [thumbDown, setThumbDown] = useState(0);
  let [thumbUp, setThumbUp] = useState(0);
  let [favorite, setFavorite] = useState(0);
  const [Quoteinfo, setQuoteinfo] = useState({
    Quote: "",
    Author: "",
    Posted: "",
    Date: new Date(),
  });

  const [error, setError] = useState({
    Quote: "",
    Author: "",
    Posted: "",
  });
  const QuoteHandlers = async () => {
    try {
      if (Quoteinfo.Quote === "") {
        setError({ ...error, Quote: "Enter a Quote !!" });
      }
      if (Quoteinfo.Author === "") {
        setError({ ...error, Author: "Insert author's name !!" });
      }
      if (Quoteinfo.Posted === "") {
        setError({ ...error, Posted: "please write who posted it!!" });
      } else {
        await addDoc(collection(db, "quotes"), Quoteinfo);
        console.log("Quote added successfully");
        console.log(Quoteinfo);
      }
      setQuoteinfo({
        Quote: "",
        Author: "",
        Posted: "",
        Date: new Date(),
      });
    } catch (error) {
      console.log("Try again", error);
    }
  };
  return (
    <Container>
      {/* <QuoteContainer> */}
        <QuoteBox>
          <TextAuthor>
            <ParaMessage>{error.Quote}</ParaMessage>
            <QuoteText
              value={Quoteinfo.Quote}
              type="Text"
              placeholder="Enter Quote"
              rows="5"
              cols="55"
              onChange={(e) =>
                setQuoteinfo({
                  ...Quoteinfo,
                  Quote: e.target.value,
                })
              }
            />
            <QouteInput>
              <ParaMessage>{error.Author}</ParaMessage>
              <QuoteAuthor
                value={Quoteinfo.Author}
                type="Text"
                placeholder="Author's Name"
                onChange={(e) =>
                  setQuoteinfo({
                    ...Quoteinfo,
                    Author: e.target.value,
                  })
                }
              />
              <ParaMessage>{error.Posted}</ParaMessage>
              <QuoteAuthor
                value={Quoteinfo.Posted}
                type="Text"
                placeholder="Posted By:"
                onChange={(e) =>
                  setQuoteinfo({
                    ...Quoteinfo,
                    Posted: e.target.value,
                  })
                }
              />
            </QouteInput>
          </TextAuthor>
          <Buttons>
            <QuoteButton onClick={QuoteHandlers} style={{ cursor: "pointer" }}>
              Add Quote
            </QuoteButton>
          </Buttons>
        </QuoteBox>
      {/* </QuoteContainer> */}
    </Container>
  );
};
export default QuoteItems;
