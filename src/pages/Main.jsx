import React, { useEffect } from 'react'
import Container from '../components/Container'
import RestaurantCard from '../components/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { getRestaurants } from '../redux/actions/restaurantAction'
import Loader from '../components/Loader'
import Error from '../components/Error'

const Main = () => {
 const {isLoading,error,restaurants}= useSelector(store=>store.restaurants);
 console.log(restaurants)
const dispatch=useDispatch();
const getData=()=>{
  dispatch(getRestaurants())
}
useEffect(()=>{
 getData();
},[]);
  return (
    <Container>
      <h1 className='text-3xl'>Tüm Restorantlar</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
        {
          isLoading ? (
          <Loader/>
        ):error ? (
        <Error/>
      ):(
        restaurants.length > 0 && 
        restaurants.map((item)=><RestaurantCard key={item.id} data={item}/>)
      )}
      </div>
      
      </Container>
  )
}

export default Main