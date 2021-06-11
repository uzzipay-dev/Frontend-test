import React, { useState, useEffect, Component } from 'react';
import api from 'axios'; //Axios é um cliente HTTP baseado em Promises para fazer requisições amazenando propriedade na variavel -> api
import '../assets/css/App.css';
import Accordion from '../components/accordion/accordion';
import logoImg from '../assets/img/logo.png';

/*requisição da API através do axios */
function App() {
  const [name, setName] = useState("https://rickandmortyapi.com/api/character/?name=")
  const [status, setStatus] = useState("https://rickandmortyapi.com/api/character/?status=")
  const [species, setSpecies] = useState("https://rickandmortyapi.com/api/character/?species=")
  const [getInfo, setGetInfo] = useState({})
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")



  /* Axios - api para get para filtrar por nome */
  useEffect(() => {
    api.get(`${name}${search}`)
      .then((result) => {

        setGetInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])

  /* Axios - api para get para filtrar por specie */
  useEffect(() => {
    api.get(`${species}${search}`)
      .then((result) => {

        setGetInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])


  /* Axios - api para get para filtrar por status */
  useEffect(() => {
    api.get(`${status}${search}`)
      .then((result) => {

        setGetInfo(result.data.nfo)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])



  useEffect(() => {
  }, [getInfo, search, species, name, status, results])


  return (
    <>
      {/*Appbar caixa input de pesquisa, logo Rick and Morty */}
      <header className="h-container">
        <div className="container-img">
          <div className="logo">
            <img src={logoImg} alt="logo" />
            <div className="busca">
              <input placeholder="filtre por nome, especie, status ou raça" onChange={(sear) => {
                setSearch(sear.target.value)
              }}
                value={search} type="text" />
            </div>
          </div>
        </div>
      </header>
        {/*Corpo -> card com informações de personagem no /components/accordion*/}
        <div className="characters">
          {results.map((result, index) => (

            <Accordion key={index} result={result} />

          ))}
        </div>

        
        </>
  );
}

export default App;




