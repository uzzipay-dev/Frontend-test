import React, { useState } from 'react'

const Accordion = (props) => {
  const [displayToggle, setDisplayToggle] = useState(false)

  return (
    <div className="card">
      <button className="invisible"
        onClick={(event) => {
          event.preventDefault()
          setDisplayToggle(!displayToggle)
        }}
      >
            <div className="card">
              <div className="card-name">
                <p>
                  {props.result.name}
              <p>{props.result.status}</p>
                </p>
              </div>
              <div className="thumb-img">
                <img src={props.result.image} alt="Image ilustrativa Rick and Morty" />
              </div>
            </div>
      </button>
      {displayToggle && 
      (
      <>
        <div className="card-block">
          <h4 className="card-title">
            Localização: <h5>{props.result.location.name}</h5>
          </h4>
          <h4 className="card-title">
            Gênero: <h5>{props.result.gender}</h5>
          </h4>
          <h4 className="card-title">
            Data de criação: <h5>{props.result.created}</h5>
          </h4>
        </div>
      </>
      )
      }
      


    </div>
  )
}

export default Accordion