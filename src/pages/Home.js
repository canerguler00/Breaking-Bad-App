import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchCharacters } from '../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import "./style.css"
import Loading from '../component/Loading';
import Error from '../component/Error';
import { Link } from "react-router-dom";

function Home() {
    const characters = useSelector((state)=>state.characters.items);
    const status = useSelector((state)=>state.characters.status);
    const nextPage = useSelector((state)=>state.characters.page);
    const hasNextPage = useSelector((state)=>state.characters.hasNextPage);
    const error = useSelector((state)=>state.characters.error);

    const dispatch = useDispatch();

    useEffect(()=>{
      if(status === "idle"){
      dispatch(fetchCharacters())
    }      
    }, [dispatch, status]);


    if(status === "failed"){
      return(<Error />)
    }
    
   

  return (
    <div>
      <Masonry
       breakpointCols={4}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column">
       {/* array of JSX items */}
      

      {
        characters.map(character => ( 
          <div key={character.char_id} className="card">
             <Link to={`/char/${character.char_id}`}>
                <img alt={character.name} src={character.img} className="character"/>
                <div className='char_name'>{character.name}</div>
            </Link>
          </div>
        ))
      }
      </Masonry>
      <div className='btn-load'>
        {status === "loading" && <Loading />}
        {hasNextPage && !status !=="loading" &&(
          <button onClick={()=>dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>
        )}    
        {
          !hasNextPage && <div> There is nothing to be show.</div>
        }     
      </div>
    </div>
  )
}

export default Home