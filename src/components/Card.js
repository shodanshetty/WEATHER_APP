import * as React from 'react';

function Card(Props){
    const CardData = Props.Prop1;
    // console.log("Card component", CardData)

    Object.entries(CardData).map(data =>{
        
    })
    
const weatherclass={"Rain":"bi bi-cloud-rain-heavy-fill","Thunderstrom":"bi bi-cloud-lightning-fill","Drizzle":"bi bi-cloud-drizzle-fill","Snow":"bi bi-cloud-snow-fill","Clear":"bi bi-brightness-high-fill","Clouds":"bi bi-clouds-fill"}
    
 return(
    Object.entries(CardData).map(data=>{
        let weather =  ("bi bi-"+data[1].weather).toLowerCase();
        return(
            <div  style={{width: '18%', height:'50%'}}>
            <p>{data[0]}</p>
    <div className="card">
            <div className="card-body">

                <h5 className="card-title"><i className={weatherclass[data[1].weather]}></i>  {data[1].weather}</h5>
            <div className='my-5 p-0' style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                <p className="card-text">{(data[1].hight_temp-273.15).toFixed(2) }&#176;C/{((data[1].hight_temp-273.15)*(9/5)+32).toFixed(2)}&#176;F</p>
                <p className="card-text">{(data[1].low_temp-273.15).toFixed(2) }&#176;C/{((data[1].low_temp-273.15)*(9/5)+32).toFixed(2)}&#176;F</p>
                <p className="card-text">{data[1].humidity}%</p>
                <p className="card-text">{data[1].sunrise}</p>
                <p className="card-text">{data[1].sunset}</p>
            </div>
            </div>
        </div>
        )
    })
    
    )

}

export default Card;