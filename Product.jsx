import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productid } = useParams();
  const { products, currency, addtToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState('false')
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productid) {
        setProductData(item)
        setImage(item.image[0])

        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();

  }, [productid])
  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in-duration-500 opacity-100'>
      {/* product data*/}
      <div className='flex gap-12 flex-col sm:flex-row'>
        {/* product images*/}
        <div className='flex-1 flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              Array.isArray(productData?.image) && productData.image.map((item, index) => (
                <img onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  alt=""
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className='pl-5'>122</p>

          </div>
          <p className='mt-3 text-2xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>select size</p>
            <div className='flex gap-2'>
              {
                Array.isArray(productData?.sizes) && productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                    key={index}
                  >
                    {item}
                  </button>

                ))
              }

            </div>

          </div>
          <button
            onClick={() => addtToCart(productData?._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>cash on delivery available</p>
            <p> easy return and exchange policy is available in seven days</p>

          </div>


        </div>

      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>DESCRIPTION</b>
          <p className='border px-5 py-3 text-sm'>REVIEWS(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id ex accusamus optio eaque, error, rem nemo, reiciendis suscipit corrupti quo! Animi esse cumque laudantium harum, provident ut fuga eos?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore provident soluta ipsum consequuntur sunt, vero dolores laboriosam in necessitatibus quos a quis est nulla porro error eligendi possimus hic eos.</p>

        </div>

      </div>
      <RelatedProducts category={productData.category} />




    </div>
  ) : <div className='opacity-0'></div>
}

export default Product