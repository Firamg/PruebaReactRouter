import { NavLink } from 'react-router-dom'

import { Navbar, Container } from "react-bootstrap";


import { useContext } from "react";

import Context from '../Context';
function NavBarLine() {

    const { cart } = useContext(Context);

    const total = cart.reduce(
        (valorAnterior, { count, price }) => valorAnterior + price * count,
        0
      );

    const setActive = ({ isActive }) => (isActive ? 'active' : 'noActive')
    return (
        <div style={{ height: '4em', backgroundColor:'yellow', alignContent:'center', alignItems:'center', textAlign:'center',
        paddingTop:'2em'}}>
            <Navbar bg="dark" variant="dark">
            <Container className="justify-content-start">
                
                    <Navbar.Brand>
                        <NavLink
                            className={setActive} 
                            end to='/home'
                            style={{ textAlign:'initial',
        paddingTop:'2em'}}
                        >

                           Pizzería Mamma Mia!

                        </NavLink>

                        {'   -   '}
                        <NavLink
                        className={setActive}
                        end to='/pizza'
                    >

                        Pizza

                    </NavLink>

                    {'   -   '}
                    <NavLink
                        className={setActive}
                        end to='/carrito'
                    >

🛒 BUY

                    </NavLink>



                    </Navbar.Brand>

                    </Container>




            </Navbar>



            <div style={{ textAlign: 'initial', display: 'block' }}>


            </div>




            <div style={{ textAlign: 'end', display: 'block' }}>




            </div>






        </div>
    )
}

export default NavBarLine
