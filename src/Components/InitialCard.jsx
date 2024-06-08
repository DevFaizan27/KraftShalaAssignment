import React, { useEffect } from 'react'
import Searching from '../assets/Searching.png'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../Redux/Slice/WeatherSlice';
import toast from 'react-hot-toast';
import Loader from './Loader';



const InitialCard = () => {
  const {  isLoading,isSuccess, isError, message } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
    }

    if (isError) {
      toast.error(message)
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch]);


  if(isLoading){
   return <Loader/>
  }

  return (
    <div className='min-w-[20vw] min-h-[20vw] flex flex-col justify-around'>
        <h1 className=' self-center font-serif font-bold'>Enter Location to search for Weather.......</h1>
        <img className='min-w-[20vw] h-96' src={Searching} alt="" />
    </div>
  )
}

export default InitialCard