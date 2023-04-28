import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data,search,rate}) => {
    
  return (
    <div>{data.filter((el)=>el.name.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate).map((el)=><MovieCard key={el.id} el={el}/>)}</div>
  )
}

export default MovieList