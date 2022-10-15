//CONTEXT
import { useContext, useState } from 'react'

import Context from '../Context'

//IMPORT CARD FROM REACT -BOOTSTRAP

import Card from 'react-bootstrap/Card';

//Gallery - STYLE

import './style.css'

//NAVIGATE

import {useNavigate, Outlet, Navigate} from 'react-router-dom'




function PizzaList() {

    const { pizzas, setPizzas,addCart } = useContext(Context)

    const Navigate=useNavigate()

    

    





    return (
        <div className="row gallery">
            {
                pizzas.map((item, i) => (


                    <div className="col-3 mb-4" key={i} style={{ margin: '1em' }}
                    value={item.id}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title><h1 style={{ textTransform: 'capitalize' }}> {item.name}</h1>
                                </Card.Title>
                                <Card.Text>
                                    <div>
                                        <h3>Ingredientes:</h3>
                                        <ul>

                                            <li style={{ textTransform: 'capitalize' }}>
                                                🍕 {item.ingredients[0]}
                                            </li>
                                            <li style={{ textTransform: 'capitalize' }}>
                                                🍕 {item.ingredients[1]}
                                            </li>
                                            <li style={{ textTransform: 'capitalize' }}>
                                                🍕 {item.ingredients[2]}
                                            </li>
                                            <li style={{ textTransform: 'capitalize' }}>
                                                🍕 {item.ingredients[3]}
                                            </li>

                                        </ul>

                                    </div>
                                    <div>
                                        <h3 style={{ textAlign: 'center' }}>$ {item.price}</h3>

                                    </div>
                                </Card.Text>
                            <div className='card gallery'>

                            <button
                                     style={{ margin: '1em', height:'60%' }}
                                    onClick={()=>Navigate(`/pizza/${item.id}`)}
                                
                                >Ver Más 👀</button>
                                <button
                                 style={{ margin: '1em', height:'60%' }}
                                 onClick={() => addCart(item)}
                                >Añadir 🛒</button>



                            </div>

                                


                            </Card.Body>
                        </Card>








                        {/* <img src={item.img} /> */}

                        {/*  <h1>{item.name}</h1>
                <div>
                  <h3>Ingredientes:</h3>
                  <ul>

                    <li >
                      🍕 {item.ingredients[0]}
                    </li>
                    <li >
                      🍕 {item.ingredients[1]}
                    </li>
                    <li >
                      🍕 {item.ingredients[2]}
                    </li>
                    <li >
                      🍕 {item.ingredients[3]}
                    </li>

                  </ul>

                </div> */}
                        {/* <div>
                  <h3 style={{ textAlign: 'center' }}>$ {item.price}</h3>

                </div> */}
                        {/* <div style={{ display: 'inline', alignItems: 'center' }}>
                  <button
                    style={{ margin: '1em' }}
                  >Ver Más 👀</button>
                  <button>Añadir 🛒</button>
                </div> */}




                    </div>
                ))
            }

        </div>
    )
}

export default PizzaList