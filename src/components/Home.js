import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="home-container">
    <h1>GitFight: let's go...</h1>
     <Link className="button" to='/battle'>Fight</Link>
     
  </div>
)

export default Home