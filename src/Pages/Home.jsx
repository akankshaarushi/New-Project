import React from 'react'
import CircularBar from '../Components/CircularBar'
import Footer from '../Components/Footer'
import Graph from '../Components/Graph'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div>
              <Header/>
              <Sidebar/>
              <CircularBar/>
              <Graph/>
              <Footer/>
    </div>
  )
}

export default Home