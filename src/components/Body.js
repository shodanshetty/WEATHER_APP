    import React, { useEffect, useState, } from 'react'
    import Card from './Card'
    import  LocationLabel from './utils'
    // import DatePicker from "react-datepicker";
   

   
    export default function Body() {
        

        const [Result1,setResult1]=useState("")
        const [cityName, setcityName] = useState("")
       
        async function filterweatherData(data)
        {  var weatherdata=new Object();
            var cityName=""
            await  data.then(Result=>{
                // console.log(response); 
                 console.log("Result: ", Result)   
                
                 cityName = Result.city.name + ", " + Result.city.country
                 
                
                if(Result!=undefined)
                {
                  var list=Result.list;
                 
                  if( Result.city!==undefined)
                  {
                      var sunrise_time=(new Date( Result.city.sunrise*1000)).toString().slice(16,21)
                      var sunset_time=(new Date( Result.city.sunset*1000)).toString().slice(16,21)   
                
                  }
                 
                 
                  
                  for( var i in list)
                  {
                      var date=new Date(JSON.stringify((list[i].dt_txt)).slice(0,11)).toDateString();
                    //   console.log("for loop var i in lis: ", JSON.stringify((Result)))
                      
                      if (weatherdata[date]===undefined){  
                            //   console.log("If inside for")
                      var weather=(list[i].weather[0].main);
                      var high_temp=list[i].main.temp_max
                      var low_temp=list[i].main.temp_min
                      var humidity=list[i].main.humidity
                      weatherdata[date]={"weather":weather,"hight_temp":high_temp,"low_temp":low_temp,"humidity":humidity,"sunrise":sunrise_time,"sunset":sunset_time, "cityName": cityName}
                      }
                  }
            
              }
              setResult1(weatherdata);
              setcityName(cityName)
        
       
       
    })
        }

        const loadweatherData = async (lat=null,long=null,type=null)=>
        {
           
           
            const url=new URL('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+"&lon="+long+"&&appid=56d039368f83dca093b8d9f12dafaa58")          
            const api= await fetch(url)
            const data=api.json();
           
         
          
          await filterweatherData(data)
         // alert(JSON.stringify(weather))
         // setResult1(weather.watherdata);
          //setcityName(weather.cityName)
      
          
        }

        
       useEffect(()=>
       {
       

        
        async function gotlocation(position)
        {
            console.log(position.coords.latitude)
            //const locationresult=await getdata(position.coords.latitude,position.coords.longitude);
            //console.log(position.coords.latitude+" "+position.coords.longitude);
           // console.log(locationresult);
            // setlat(position.coords.latitude);
            // setlong(position.coords.longitude);
            loadweatherData(position.coords.latitude,position.coords.longitude);
            
        }

        function faillocation()
        {
            console.log("error")
        }

        const current_location=async function()
        {
            navigator.geolocation.getCurrentPosition(gotlocation,faillocation)
        }
    
        current_location()
        

       }, [])
       

    return (
        <div  className='container p-0'>

            
            <LocationLabel cityName={cityName} setcityName={setcityName}   filterweatherData={filterweatherData} />

        <div className='my-5 p-0' style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div  id='weatherContainer' className='flex' style={{display:'flex',gap:'2%', height:"100vh"}}>
        <div style={{width: '18%', height:'80%'}}>
        <div style={{    paddingTop: "130px"}}>
        
        <div className='my-5 p-0' />
                
                <p className="card-text">High Temperature</p>
                <p className="card-text">Low Temperature</p>
                <p className="card-text">Humidity</p>
                <p className="card-text">Sunrise Time</p>
                <p className="card-text">Sunset Time</p>
        </div>
        </div>

        {console.log("Printing result in body: ", typeof(Result1))}
        <Card Prop1={Result1}  />
       
        
       
      

    </div>
        </div>
    )
    }

