import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Car from './component/Cars'
import Add from './component/Add'
import Edit from './component/Edit'

const App = () => {

  const [cars, setCars] = useState([])

  const getCars = () => {
    axios.get('http://localhost:3000/cars')
    .then((response) => setCars(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/cars', data)
    .then((response) => {
       console.log(response)
       let newCars = [...cars, response.data]
       setCars(newCars)
    })
 }


 const handleDelete = (deletedCar) => {
  axios.delete('http://localhost:3000/cars/' + deletedCar._id)
  .then((response) => {
   let newCar = cars.filter((car) => {
      return car._id !== deletedCar._id
   })
     
   setCars(newCar)
  })
}



 
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/cars/' + data._id, data)
    .then((response) => {
      let newCars = cars.map((car) => {
        return car._id !== data._id ? car : data
      })
      setCars(newCars)
    })
  }

  useEffect(() => {
    getCars()
  }, [])
  



  return (
  <>
    <h1 class="title">Cars Website</h1>

    <div class="add"><Add handleCreate={handleCreate}/></div>

    <h1>Before 2016</h1>
    {cars.map((car) => {
      return (
        car.year <= 2016 ?
        <div class="container">
          <Car cars={car}/>
          <div class="edit"><Edit cars={car} handleEdit={handleEdit} /></div>
          <button class="delete" onClick={()=>{handleDelete(car)}}>DELETE</button>
        </div>
        :
        <></>
      )
    })}

    <h1>After 2016</h1>
    {cars.map((car) => {
      return (
        car.year >= 2016 ?
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
  )
}


export default App


