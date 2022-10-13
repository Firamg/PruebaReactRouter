import {useContext} from 'react'
import PizzaList from '../complements/PizzaList'
import Context from '../Context'

//Gallery

import './style.css'


function Home() {

    const {pizzas,setPizzas} = useContext(Context)
  return (

    <>
    
    {/* <div className="row gallery">
          {
            pizzas.map((item, i) => (
              <div className="product" key={i} style={{ margin: '1em' }}>
                <img src={item.img} />

                <h1>{item.name}</h1>
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

                </div>
                <div>
                  <h3 style={{ textAlign: 'center' }}>$ {item.price}</h3>

                </div>
                <div style={{ display: 'inline', alignItems: 'center' }}>
                  <button
                    style={{ margin: '1em' }}
                  >Ver Más 👀</button>
                  <button>Añadir 🛒</button>
                </div>




              </div>
            ))
          }

        </div> */}



    <div>
        <PizzaList/>
    </div>
    
    
    </>
    

  )
}

export default Home