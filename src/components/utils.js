import * as React from 'react';




function LocationLabel(Props){
    const [searchData,setSearchData]=React.useState("");

    async function handleSubmit(event)
    {
      
          const url=new URL('https://api.openweathermap.org/data/2.5/forecast?q='+searchData+'&&appid=56d039368f83dca093b8d9f12dafaa58')  
              
            const api= await fetch(url)
            const data=api.json();
            data.then(result=>{
                console.log("location result "+JSON.stringify(result))
            })
            Props.filterweatherData(data)
            event.preventDefault()

    
    }

    function handleChange(event)
    {
        console.log("Val: ", event.target.value)
    setSearchData(event.target.value)
    
    }

    return (
        <div className='flex-box' style={{display:'flex', justifyContent:'space-between',gap:'50%',marginTop:"5%"}}>
            <h1 style={{color:'#151437',fontSize:'25px'}}>{Props.cityName}</h1>
        
            <div id='search' style={{display:'flex'}}>
            <input type="text" value={searchData} className="form-control" id="text" onChange={handleChange} />
            <button type='submit' style={{marginLeft:"10px"}} onClick={handleSubmit}>
            <i className="bi bi-search"> search</i>
            </button>
            </div>
        
        
        </div>
    )
}

export default LocationLabel

