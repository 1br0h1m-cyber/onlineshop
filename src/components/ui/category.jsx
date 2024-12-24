import React, { useState } from 'react'
import Button from "./button"
import { GiClothes } from 'react-icons/gi'

const Category = () => {
    const [active,setActive] = useState('all')

    const changeCategory = (category) =>{
        setActive(category)
    }
  return (
    <div className='mt-6 flex flex-wrap md:flex-nowrap gap-2 justify-center px-10'>
      <Button text={<div className='flex items-center gap-1'><GiClothes/> All</div>} active={active === "all"} onClick={()=>changeCategory('all')}/>
      <Button text={"Men outfits"} active={active === "men's clothing"} onClick={()=>changeCategory("men's clothing")}/>
      <Button text={"Women outfits"} active={active === "women's clothing"} onClick={()=>changeCategory("women's clothing")}/>
      <Button text={"Jewellery"} active={active === "jewellery"} onClick={()=>changeCategory('jewellery')}/>
      <Button text={"Electronics"} active={active === "electronics"} onClick={()=>changeCategory('electronics')}/>
    </div>
  )
}

export default Category