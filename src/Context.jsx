import { createContext, useState, useEffect } from "react";

const Context = createContext()

const PizzasProvider = ({ children }) => {
    
    const pizzaData = '/pizzas.json';
    //GET PIZZAS

    /*  */
    const [pizzas, setPizzas] = useState([])
    
    //GET CART DATA

    const [cart, setCart] = useState([])






    const getPizza = async () => {

        const res = await fetch(pizzaData)
        const data = await res.json()

        setPizzas(data)




    };

    useEffect(() => {
        getPizza();

    }, [])

    //CART FUNCTION

    const addCart = ({ id, price, name, img }) => {
        const findProduct = cart.findIndex(({ id: productId }) => productId === id);
        const product = { id, price, name, img, count: 1 };
        if (findProduct >= 0) {
            cart[findProduct].count++;
            setCart([...cart]);

        } else {
            setCart([...cart, product])
        }


    }

    const increment = (i) => {
        cart[i].count++;
        setCart([...cart]);
    }

    const decrement = (i) => {
        const { count } = cart[i];
        if (count === 1) {
            cart.splice(i, 1)
        } else {
            cart.count--;
        }
        setCart([...cart])
    };
    return (
        <Context.Provider
            value={{ pizzas, cart, setCart, addCart, increment, decrement }}
        >
            {children}
        </Context.Provider>);
}

//PROVIDER EXPORT

export { PizzasProvider }

export default Context