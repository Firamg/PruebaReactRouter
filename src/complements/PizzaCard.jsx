//REACT BOOSTSTRAP

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//CONTEXT

import { useContext } from 'react'
import Context from '../Context'


//IMPORTAR  PARAGRAM

import { useParams } from "react-router-dom";

//NAVIGATE

import { useNavigate, Outlet, Navigate } from 'react-router-dom'


//Gallery - STYLE

import './style.css'


function PizzaCard() {

    const { pizzas, addCart } = useContext(Context)


    const { id } = useParams();

    const Navigate = useNavigate()


    //Encontrar el producto
    const pizzaDetail = pizzas.find((pizza) => pizza.id === id);

    return (

        <>
            <Card className="card-horizontal">
                <div style={{ display: 'inline-block' }}
                >
                    <div className="row gallery">
                        <div md={5} lg={5}  >

                            <Card.Img variant="top" src={pizzaDetail.img} style={{ height: '80%', width: '80%', margin: '2em' }} />
                        </div>
                        <div>
                            <Card.Body>
                                <Card.Title><h1 style={{ textTransform: 'capitalize' }}> {pizzaDetail.name}</h1>
                                </Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <div>
                                        <div>
                                            <p>{pizzaDetail.desc}</p>

                                        </div>
                                        <div>
                                            <h4>Ingredientes:</h4>

                                            {pizzaDetail.ingredients.map((item, i) => (


                                                <div>

                                                    <ul className='text-capitalize'>


                                                        <li style={{ textTransform: 'capitalize', textDecoration: 'null' }} key={i}>
                                                            🍕 {item}

                                                        </li>





                                                    </ul>






                                                </div>






                                            ))}


                                        </div>


                                    </div>
                                    <div>


                                    </div>
                                </Card.Text>


                                <div className='gallery'>
                                    <h3 style={{ textAlign: 'center' }}>Precio: ${pizzaDetail.price}</h3>


                                    <button
                                        style={{ margin: '1em', height: '60%' }}
                                        onClick={() => addCart(pizzaDetail)}
                                    >Añadir 🛒</button>



                                </div>






                            </Card.Body>
                        </div>
                    </div>


                </div>

            </Card>

        </>

    )
}

export default PizzaCard