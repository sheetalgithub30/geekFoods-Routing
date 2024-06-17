
import './QuoteCard.css'
import quotes from "./Quotes";

function QuoteCard() {
  return(
  <div id="quotecard" data-aos="fade-down">
  {quotes.map((obj,index)=>{
    return( 
   <div id="quote-single-card">
    <h2 key={index}>{obj.quote}</h2>
    <h4>{obj.author}</h4>
  </div>

    );
  })}
  </div>);
}

export default QuoteCard;
