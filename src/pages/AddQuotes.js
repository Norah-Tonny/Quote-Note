import QuotesItems from "../Components/QuotesItems";
import styled from "styled-components";
import Nav from "../Components/Nav";

const QuoteContainer = styled.div`
background:#5d8BF4;
height:100vh;

`

const AddQuotes = () => {
    
    return (
        <QuoteContainer>
            <Nav/>
            < QuotesItems />
            </QuoteContainer>
    )
}

export default AddQuotes;