import React from 'react'
import Remove from '../assets/icon-remove-item.svg'

function CartItem({itemCount, setItemCount, price, itemName}) {
  return (
    <div className={'' + itemCount>0 ?" h-auto py-4 border-b-gray-200 border-b-[1px] grid grid-cols-[3fr_1fr]  flex-col gap-y-4 transition-all overflow-hidden": " overflow-hidden h-0 transition-all"}>
                      <div className='flex flex-col gap-y-2'>
                        <p className='font-bold'>{itemName}</p>
                        <div className='flex gap-8'>
                            <p className='text-orange-700 font-bold'>{itemCount}x</p>
                            <p className='text-gray-400'><span className='mr-2'>@</span>{price}</p>
                            <p className='text-gray-600 font-bold'>${(price*itemCount).toFixed(2)}</p>
                        </div>
                      </div>
                      <button className='rounded-xl border-2 p-1 self-center justify-self-end'
                              onClick={()=>setItemCount(0)}>
                        <img src={Remove} alt="" className='fill-gray-600'/>
                      </button>
    </div>
  )
}

export default CartItem