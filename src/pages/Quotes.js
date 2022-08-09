import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../redux/quotesSlice';
import Error from '../component/Error';
import Loading from '../component/Loading';
import Item from './Item';
import "./style.css"

function Quotes() {
    const dispatch = useDispatch();
    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)
    //console.log(data);

    useEffect(()=>{
        if(status === "idle"){
        dispatch(fetchAllQuotes())}
    },[dispatch, status])

    if(error){
        return <Error message={error} />
    }

  return (
    <div className='quotes-item'>
        <h1>{
             status === "succeeded" && <div className='quotes_info'>Total Quotes({data.length}) </div>
        }</h1>
        {
            status === "loading" && <Loading />
        }
        {
            status === "succeeded" && data.map((item) => <Item key={item.quote_id} item={item}/>)
        }


        
    </div>
  )
}

export default Quotes