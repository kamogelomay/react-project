import React from "react";
import Product from "./Product";


const Home = () => {
    const products = [{
       name: 'Computer',
       image:'c:\Users\HP\Downloads\hospital-1802679_1280.jpg',
       description:'This is a sample product for computer.',
       price: 29.99,
       quantity:10,

    },{
    
        name: 'LGTV',
        image:'c:\Users\HP\Downloads\hospital-1802679_1280.jpg',
        description:'This is a sample product for LGTV.',
        price: 49.99,
        quantity:5,
 
     },
     {
        name: 'Printer',
        image:'c:\Users\HP\Downloads\hospital-1802679_1280.jpg',
        description:'This is a sample product for printer.',
        price: 19.99,
        quantity:20,
 
     },
     
    ]
    return(
        <div>
            <h1>Home Component</h1>
            {products.map((product, index) => (
                <Product 
                key={index}
                name={product.image}
                image={product.image}
                description={product.description}
                quantity={product.quantity}
                />
                
            ))}
        </div>
    );
};
export default Home;