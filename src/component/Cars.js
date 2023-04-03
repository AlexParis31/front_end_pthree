const Car = (props) => {
    return(
     <div class="cars">

        <h1 class="make">{props.cars.make} </h1>
        <div class="header">
          <h3 class="model">{props.cars.model}</h3>
          <h3 class="model">Class-{props.cars.class} </h3>
        </div>
        <img class="image" src={props.cars.image}></img>
        <p class="year">Year: {props.cars.year} </p>
        <p class="price">${props.cars.price} </p>


     </div>
    )
 }
 
 export default Car