import React, { useEffect,useState } from 'react';
import { Meme } from '../Meme/Meme'
import styles from './styles.module.css'

export function App() {

const [memes, setMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json()
        .then(res => {
          const memes = res.data.memes;
          setMemes(memes);
        }))
  }, []);



  return (
    memes.length ? <img src={memes[0].url}/> : <></>
  );
}

