import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="home-container">
    <h1>GitFight: The fight of good...</h1>
     <Link className="button" to='/battle'>Fight</Link>
  </div>
)

export default Home