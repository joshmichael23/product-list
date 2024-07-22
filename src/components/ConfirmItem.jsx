import React from 'react'

function ConfirmItem({itemName, itemCount, price}) {

function getThumbnail(itemname){
    if(itemname=="Waffle with Berries")
        return "bg-waffle-thumb";
    else if(itemname=="Vanilla Bean Crème Brûlée")
        return "bg-cream-brulee-thumb";
    else if(itemname=="Mix of Five Macaron")
        return "bg-macaron-thumb";
    else if(itemname=="Classic Tiramisu")
        return "bg-tiramisu-thumb";
    else if(itemname=="Pistachio Baklava")
        return "bg-baklava-thumb";
    else if(itemname=="Lemon Meringue Pie")
        return "bg-meringue-thumb";
    else if(itemname=="Red Velvet Cake")
        return "bg-cake-thumb";
    else if(itemname=="Salted Caramel Brownie")
        return "bg-brownie-thumb";
    else if(itemname=="Vanilla Panna Cotta")
        return "bg-panna-cotta-thumb";
    }

  return (
    <div className={"border-b-gray-200  grid grid-cols-[1fr_2fr_1fr] gap-y-4 transition-all" + (itemCount>0 ? " py-4 border-b-[1px]" : " h-0 p-0 overflow-hidden")}>
                     
                        <div className={getThumbnail(itemName) + ' h-[50px] w-[50px] bg-no-repeat bg-contain'}>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>{itemName}</p>
                            <div className='flex gap-8'>
                                <p className='text-orange-700 font-bold'>{itemCount}x</p>
                                <p className='text-gray-400'><span className='mr-2'>@</span>{price}</p>
                                
                            </div>
                        </div>
                        <p className='text-gray-600 font-bold self-center justify-self-end'>${(price*itemCount).toFixed(2)}</p>
                     
                      
    </div>
  )
}

export default ConfirmItem