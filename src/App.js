import React, { useEffect, useState } from 'react';
import SearchInput from './searchInput';
import './styles.css';


export default function App(){
 
  const [info,setInfo] = useState({});
  const [text, setText] = useState('');
  
  useEffect(() => {
    if(text){
      setInfo({});
      fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      })
    }
  }, [text])
  
  return(
    <div className="App">
      <div className="logo">
      <img  
      src="https://i.dlpng.com/static/png/6975728_preview.png"
      alt="logo"
      />
      </div>
     
      <SearchInput  
      value={text}
       onchange={(search) => setText(search)}
       />
       {text && !info.results && (
         <span>Carregando ...</span>
       )}
       {info.results && (
         <div className="personagens-list">
           {info.results.map((results) => (
             <li  key={results.id}>
               <img src={results.image} alt={results.image}/>
               <h3>{results.name}</h3>
               <p>{results.species}</p>
               <span> {results.status}</span> 
             </li>
           ))}
         </div>
       )}
    </div>
  )
}