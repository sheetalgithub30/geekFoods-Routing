// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Grid from './Grid.jsx'
//  import Footer from './Footer.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Navbar />
//     <Hero />
//     <Card />
//     <Grid />
//     <Footer /> 

//   </React.StrictMode>,
// )

import React from 'react'

function Home() {
  return (
    <div>
     <Hero />
     <Card />
     <Grid />
    </div>
  )
}

export default Home
