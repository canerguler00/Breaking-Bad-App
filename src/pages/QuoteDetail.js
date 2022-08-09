import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { quotesSelector } from '../redux/quotesSlice';
import { useSelector } from 'react-redux'


function QuoteDetail() {
  const { quote_id } = useParams()
  //console.log(quote_id);
  const items = useSelector(quotesSelector);
  const quote = items.find((item)=> item.quote_id === Number(quote_id));

  if(!quote){
    return <Navigate to="/quotes" />
  }

  return (
    <div>
      <h1>QuoteDetail</h1>
      {/*<pre>{JSON.stringify(quote, null, 2)}</pre>*/}
      <q>{quote.quote}</q><br></br>
      <strong>- {quote.author}</strong>
      
    </div>
  )
}

export default QuoteDetail