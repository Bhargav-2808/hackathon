
var str ;


const change =()=>
{
	var postal_code = document.getElementById("pdata").value;
	//document.getElementById("test").innerHTML = postal_code;
	
const api = `https://api.weatherbit.io/v2.0/forecast/airquality?
postal_code=${postal_code}&key=2a7f171c37a743ab850a6a0708d049d8`;

fetch(api)
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) 
    {
      
      return response.json();
    } 
    else 
    {
      throw Error(response.statusText);
    }
  })
  .then((result) => {
  	
  	 
	result.data.map( (item,key) =>{
   
    if ( (item.aqi  <=50) &&  (item.aqi >0) )
    {
        str="good";
    }
    
    if( (item.aqi  <=100) &&  (item.aqi >50) )
    {
        str="Moderate";
    }
    
    if( (item.aqi  <=150) &&  (item.aqi >100) )
    {
        str="Unhealthy for sensetive groups";
    }
    
    if( (item.aqi  <= 200) &&  (item.aqi >150) )
    {
        str="Unhealthy";
    }
    


		//console.log(item.aqi);
    let tab = `<div class="container" style=" display: flex;
    width: 1040px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    ">
  
    <div class="card" style=" margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
    ">
    
    <div class="card-header" style="">
      <img src="./images/card_image.jpg" alt="rover"  style="
      width: 100%;
      height: 200px;
      object-fit: cover;

      "/>
    </div>
    
    <div class="card-body" style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 20px;
      min-height: 250px;

    ">
      <span class="tag tag-teal" style="  
        background: #2b4151;
        border-radius: 50px;
        font-size: 12px;
        margin: 0;
        color: #fff;
        padding: 2px 10px;
        text-transform: uppercase;
        cursor: pointer;
      
      ">
      ${str}
      </span>
      
      
      <h4>${result.city_name}</h4>
      <p> <b>O<sub>3</sub></b> ${parseInt(item.o3) }ppb</p>
      <p> <b>NO<sub>2</sub></b> ${parseInt(item.no2) }ppb</p>
      <p> <b>SO<sub>2</sub></b> ${parseInt(item.so2) }ppb</p>
      <p> <b>CO</b> ${parseInt(item.co) }ppb</p>
    </div>
  </div>`
 ;
    document.getElementById("data_").innerHTML = tab;
	})
  

})
}
















