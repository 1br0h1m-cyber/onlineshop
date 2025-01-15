import React, {useState} from 'react'
import Category from '../../components/ui/category'
import Card from '../../components/ui/card'
import Allproducts from '../../data/productData'

const Products = () => {

  const [filterData, setFilterData] = useState(Allproducts)

  const filterProducts = (category) => {

    if(category === 'all') {
      setFilterData(Allproducts)
    }
    else{
      const filteredData = Allproducts.filter(x => x.category === category)
      setFilterData(filteredData)
    }
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-[80px] xsm:h-[100px] mt-4  md:mt-6 mb-5 sm:mb-7 md:mb-10'>
        <h1 className='text-[35px] sm:text-[40px] md:text-[50px] text-blue-100 font-bold mb-1'>Our Last Outfits</h1>
        <hr className='w-2/3'/>
      </div>
      <div>
        <Category filterProducts={filterProducts}/>
        <Card data={filterData}/>
      </div>
    </div>
  )
}

export default Products