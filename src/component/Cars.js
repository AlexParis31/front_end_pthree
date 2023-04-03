const Car = (props) => {
    return(
     <div class="cars">
        <h3 class="year">{props.cars.year}</h3>
       <img class="image" src={props.cars.image}></img>
     
       <p class="make">Make:{props.cars.make} </p>
       <br/>
        <p class="model">Model: {props.cars.model}</p>
        <br/>
        <p class="class">Class: {props.cars.class}</p>
        <br/>
        <p class="price">Price: {props.cars.price}</p>

     </div>
    )
 }
 
 export default Car