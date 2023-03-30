const Car = (props) => {
    return(
     <div class="cars">

       <h3 class="name">{props.cars.name}</h3>
       <p class="conference">{props.cars.conference} Conference</p>
       <img class="image" src={props.cars.logo}></img>
       <p class="rank">Seed: {props.cars.rank}</p>

     </div>
    )
 }
 
 export default Car