import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Car from './component/Cars'
import Add from './component/Add'
import Edit from './component/Edit'

const App = () => {

  const [carClass, setCarClass] = useState(true)
  const [cars, setCars] = useState([])
  
  

  const getCars = () => {
    axios.get('https://peaceful-brushlands-81120.herokuapp.com/cars')
    .then((response) => setCars(response.data), (err) => console.log(err))
  }

 

  const handleCreate = (data) => {
    axios.post('https://peaceful-brushlands-81120.herokuapp.com/cars/', data)
    .then((response) => {
       console.log(response)
       let newCars = [...cars, response.data]
       setCars(newCars)
    })
 }


 const handleDelete = (deletedCar) => {
  axios.delete('https://peaceful-brushlands-81120.herokuapp.com/cars/' + deletedCar._id)
  .then((response) => {
   let newCars = cars.filter((car) => {
      return car._id !== deletedCar._id
   })
     
   setCars(newCars)
  })
}



 
  const handleEdit = (data) => {
    axios.put('https://peaceful-brushlands-81120.herokuapp.com/cars/' + data._id, data)
    .then((response) => {
      let newCars = cars.map((car) => {
        return car._id !== data._id ? car : data
      })
      setCars(newCars)
    })
  }


  const standardOn = () => {
    setCarClass(true)
  }

  const standardOff = () => {
    setCarClass(false)
  }


  

  useEffect(() => {
    getCars();
  }, [])
  
  return (
  <>

    <h1 class="title">Cars Catalogue</h1>

    <div class="add"><Add handleCreate={handleCreate}/></div>

    <div class="buttons">
      <button class="standardBtn" onClick={standardOn}>Standard Cars</button>
      <button class="standardBtn" onClick={standardOff}>Luxury Cars</button>
    </div>
   

   

    <div class="flexy">
    {carClass ?
    <>
      {cars.map((car) => {
        return (
          car.class === "Standard" ?
          <div class="container">
            <Car cars={car}/>
            <div class="edit"><Edit cars={car} handleEdit={handleEdit} /></div>
            <button class="delete" onClick={()=>{handleDelete(car)}}>DELETE</button>
          </div>
          :
          <></>
    
        )
      })} 
    </>
    :
    <>
      {cars.map((car) => {
        return (
          car.class === "Luxury" ?
          <div class="container">
            <Car cars={car}/>
            <div class="edit"><Edit cars={car} handleEdit={handleEdit} /></div>
            <button class="delete" onClick={()=>{handleDelete(car)}}>DELETE</button>
          </div>
          :
          <></>
        )
      })} 
    </> 
    }
    </div>
  </>
  
  )
  
}


export default App


