
//Componenets
import NavBar from "./complements/NavBar";

//IMP VIEWS
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from "./views/Carrito";


// IMP STYLES
import './styles.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

//GET PIZZAS

import { useState, useEffect } from 'react'

//Context
import Context from './Context'





function App() {

  //GET PIZZAS
  const [pizzas, setPizzas] = useState([])
  const pizzaData = '/pizzas.json';
  const sharedstate = { pizzas, setPizzas }

  const getPizza = async () => {

    const res = await fetch(pizzaData)
    const data = await res.json()

    setPizzas(data)




  }

  useEffect(() => {
    getPizza()

  }, [])

  

  return (
    <Context.Provider value={sharedstate}>

      <BrowserRouter>
      
        
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>


      </BrowserRouter>


    </Context.Provider>


  );
}

export default App;
