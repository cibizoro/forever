import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category }) => {
    const { product } = useContext(ShopContext)
    const [Related, setRelated] = useState('');
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category)
            setRelated(productsCopy.slice(0, 5))

        }

    }, [products])
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'related'} text2={'products'} />

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    Array.isArray(Related) && Related.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default RelatedProducts