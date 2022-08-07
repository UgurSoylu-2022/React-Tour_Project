import React from 'react';
import "./Card.scss"

const Card = ({data}) => {
    console.log(data);
  return (
    <div className="card_container">
        {data.map((item)=>{
          return  (
            <div className="card" key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.image}/>
                <p>{item.desc}</p>
            </div>)


        })}
    </div>
  )
}

export default Card