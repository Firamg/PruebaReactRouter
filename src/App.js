
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
import {PizzasProvider} from './Context'





function App() {

 /*  //GET PIZZAS
  const [pizzas, setPizzas] = useState([])
  const pizzaData = '/pizzas.json';
  //GET CART DATA

  const [cart, setCart] = useState([])

  
  const sharedstate = { pizzas, setPizzas,cart, setCart, addCart, increment,decrement }

  

  const getPizza = async () => {

    const res = await fetch(pizzaData)
    const data = await res.json()

    setPizzas(data)




  }

  useEffect(() => {
    getPizza()

  }, [])

  //CART FUNCTION

  const addCart=({id, price, name,img})=>{
    const findProduct=cart.findIndex(({id:productId})=>productId===id);
    const product={id,price,name,img,count:1};
    if(findProduct>=0){
      cart[findProduct].count++;
      setCart([...cart]);

    }else{
      setCart([...cart,product])
    }


  }

  const increment=(i)=>{
    cart[i].count++;
    setCart([...cart]);
  }

  const decrement=(i)=>{
    const{count}=cart[i];
    if (count===1){
      cart.splice(i,1)
    }else{
      cart.count--;
    }
    setCart([...cart])
  } */



  

  return (
    <PizzasProvider>

      <BrowserRouter>
      
        
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>


      </BrowserRouter>


    </PizzasProvider>


  );
}

export default App;
