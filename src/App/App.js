import React, { useEffect } from 'react';
import { Meme } from '../Meme/Meme'
import styles from './styles.module.css'

export function App() {

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json().then(res=>{
      console.log(res);
    }))
  },[])

  return (
    <div>
     <Meme/> 
    </div>
  );
}

