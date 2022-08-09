import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import "./style.css"
import Loading from '../component/Loading';

function Detail() {
    const [char, setChar] =useState(null)
    const [loading, setLoading] = useState(true)
    const {char_id} =useParams();
    //console.log(char_id);

    useEffect(()=>{
        axios(`https://www.breakingbadapi.com/api/characters/${char_id}`).then(
            (res)=> res.data)
            .then(data => setChar(data[0]))
            .finally(()=>setLoading(false))
            
    },[char_id])

  return (
    <div>
        {loading && <Loading />}
        {
            char && (
                <div>
                    <h1>{char.name}</h1>
                    <img src={char.img} className="detail-img"/>
                </div>
            )
        }
        {char && (<pre>{JSON.stringify(char, null, 2)}</pre>)}
    </div>
  )
}

export default Detail