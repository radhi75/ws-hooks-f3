import { Rating } from '@mui/material';
import React from 'react'

const Navigation = ({setSearch,setRate,rate}) => {
  return (
    <div><input type='text'  onChange={(e)=>setSearch(e.target.value)}/>
    <Rating onChange={(e)=>setRate(Number(e.target.value))}
    name="simple-controlled"
    value={rate}
  /></div>
  )
}

export default Navigation