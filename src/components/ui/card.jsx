import React, { useState } from 'react'
import Allproducts from '../../data/productData';

// rating
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Card = () => {
    const [rating, setRating] = useState(0)
    console.log(rating);
    

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
    

  return (

    <div className='px-9 py-5 flex flex-col-2'>

        <div className="px-5 sm:px-9 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-6">
        
        {Allproducts.length !== 0 ? Allproducts.map((value,index)=>(

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='m-5 flex justify-center items-center w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[400px] bg-white'>
                <img className='max-h-[250px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[400px]' src={Allproducts[index].image} alt="product-image" />
            </div>
            <div class="px-5 pb-5">
                <a href="!#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse ">
                        {/* <Rating initialValue={value.rating.rate} readonly={true} onClick={handleRating}/> */}
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={value.rating.rate} precision={0.1} onClick={handleRating} readOnly/>
                        </Stack>
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{value.rating.rate}</span>
                </div>
                <div class="flex items-center justify-between space-x-1">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${value.rating.count}</span>
                    <a href="!#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

            )) : 'No data'
        }

        </div>
    
    </div>


    // <div class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
    // <section
    //     class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
    //         {data.length !== 0 ? data.map((value,index)=>(
    //     <section class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
    //         <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt="" />
    //         <div class="flex justify-center">
    //             <Rating initialValue={value.rating.rate} readonly={true}   onClick={handleRating} />
    //         </div>
    //         <h1 class="text-3xl my-5 line-clamp-3">{value.title}</h1>
    //         <p class="mb-5 line-clamp-3">{value.description}</p>
    //         <h2 class="font-semibold mb-5">${value.price}</h2>
    //         <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
    //     </section>
    //         )) : "No Data"
    //     }
    // </section>
    // </div>
  )
}

export default Card