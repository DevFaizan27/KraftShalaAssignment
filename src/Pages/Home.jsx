import React from 'react'
import Card from '../Components/Card';
import InitialCard from '../Components/InitialCard';
import { useSelector } from 'react-redux';

const Home = () => {
    const { weather,isLoading} = useSelector((state) => state.weather);
  return (
    <div>
        {weather!=null?<Card/>:<InitialCard/>}
        {/* <Card/> */}
    </div>
  )
}

export default Home