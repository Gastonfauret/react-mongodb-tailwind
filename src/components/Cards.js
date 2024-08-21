import React, { useEffect, useState } from 'react'

export default function Cards() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/product');

                if (!response) {
                    throw new Error('Failed to fetch data.');
                }

                const dataProducts = await response.json()
                setProducts(dataProducts.products)
                console.log(dataProducts.products)

            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchProducts();
    }, [])

    return (
        <div className=' flex flex-wrap bg-gray-200 gap-10 justify-center '>
            {products.map((product, index) => (

                <div key={index} className=' flex flex-col justify-around place-items-center m-5 w-80 min-h-72 gap-2 p-4 align-middle rounded-md border-4 border-gray-400'>
                    <img className=' h-44 ' src={product.imageURL} />

                    <div className=' flex flex-col w-full border-4 border-gray-300 h-40 justify-around p-2'>
                        <h2 className=' text-xl font-semibold font-sans'>{product.name}</h2>
                        <p className=' font-sans text-base '>{product.description}</p>
                        <p className=' font-bold text-2xl font-sans '>Price: {product.price}</p>
                    </div>

                    <div className=' w-full bg-slate-600 h-10 flex justify-around'>
                        <button className=' bg-gray-300 hover:bg-gray-400 text-gray-500 font-bold w-1/2'>Edit</button>
                        <button className=' bg-gray-300 hover:bg-gray-400 text-gray-500 font-bold w-1/2'>Delete</button>
                    </div>
                </div>
            ))}            
        </div>
    )
}


