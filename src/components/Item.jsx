import React, { useState } from 'react'
import Shop from '../assets/icon-add-to-cart.svg'
import incrementIcon from '../assets/icon-increment-quantity.svg'
import decrementIcon from '../assets/icon-decrement-quantity.svg'

function Item({itemtype,itemname,itemprice, setItemCount, itemCount}) {
  function decrement(){
    if(itemCount>0)
      setItemCount(itemCount-1);
  }
  function increment(){
    setItemCount(itemCount+1);
  }
  function getBackgroundMobile(itemname){
    if(itemname=="Waffle with Berries")
      return "bg-waffle-mobile";
    else if(itemname=="Vanilla Bean Crème Brûlée")
      return "bg-cream-brulee-mobile";
    else if(itemname=="Mix of Five Macaron")
      return "bg-macaron-mobile";
    else if(itemname=="Classic Tiramisu")
      return "bg-tiramisu-mobile";
    else if(itemname=="Pistachio Baklava")
      return "bg-baklava-mobile";
    else if(itemname=="Lemon Meringue Pie")
      return "bg-meringue-mobile";
    else if(itemname=="Red Velvet Cake")
      return "bg-cake-mobile";
    else if(itemname=="Salted Caramel Brownie")
      return "bg-brownie-mobile";
    else if(itemname=="Vanilla Panna Cotta")
      return "bg-panna-cotta-mobile";
  }

  function getBackgroundDesktop(itemname){
    if(itemname=="Waffle with Berries")
      return "bg-waffle-desktop";
    else if(itemname=="Vanilla Bean Crème Brûlée")
      return "bg-cream-brulee-desktop";
    else if(itemname=="Mix of Five Macaron")
      return "bg-macaron-desktop";
    else if(itemname=="Classic Tiramisu")
      return "bg-tiramisu-desktop";
    else if(itemname=="Pistachio Baklava")
      return "bg-baklava-desktop";
    else if(itemname=="Lemon Meringue Pie")
      return "bg-meringue-desktop";
    else if(itemname=="Red Velvet Cake")
      return "bg-cake-desktop";
    else if(itemname=="Salted Caramel Brownie")
      return "bg-brownie-desktop";
    else if(itemname=="Vanilla Panna Cotta")
      return "bg-panna-cotta-desktop";
  }

  return (
    <div className='grid lg:w-[250px]'>
        
        <div className={
          itemCount>0?

                        getBackgroundMobile(itemname) 
                        + ' h-[212px] w-auto bg-cover bg-no-repeat rounded-lg overflow-hidden relative'
                        + ' border-2 border-[rgb(200,59,14)] transition-all'

                    :
                        getBackgroundMobile(itemname) 
                        + ' h-[212px] w-auto bg-cover bg-no-repeat rounded-lg overflow-hidden relative transition-all'
                       
        }>
                  
        </div>

        {
        itemCount==0? 
            <div className='rounded-full self-center justify-self-center mt-[-1.25rem] z-10 bg-white px-5 py-2 border-solid border-2 min-w-36 max-w-44'>
              <button className='flex justify-center items-center font-bold gap-2'
                      onClick={()=>increment()}
                      >
                        
                <img src={Shop}></img> Add To Cart
              </button>
            </div>

        :

            <div className='rounded-full self-center justify-self-center mt-[-1.25rem] z-10 bg-[rgb(200,59,14)] px-5 py-2 border-solid border-2 min-w-36 max-w-44 border-[rgb(200,59,14)] flex justify-between text-white'>
              <button className='flex justify-center items-center font-bold gap-2 rounded-full border-white border-[1px] px-[6px] py-[2px]'
                      onClick={()=>decrement()}
                      >
                        <img src={decrementIcon} alt="" />

              </button>

                      {itemCount}
              <button className='flex justify-center items-center font-bold gap-2 rounded-full border-white border-[1px] px-[6px] py-[2px]'
                      onClick={()=>increment()}
                      >
                        <img src={incrementIcon} alt="" />
              
              </button>
            </div>
        }
        <p>{itemtype}</p>
        <p className='font-bold'>{itemname}</p>
        <p className='font-bold text-amber-900'>${itemprice}</p>
    </div>
  )
}

export default Item