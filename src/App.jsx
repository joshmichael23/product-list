import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from './components/Item'
import CartItem from './components/CartItem'
import ConfirmItem from './components/ConfirmItem'
import Check from './assets/icon-order-confirmed.svg'
import Tree from './assets/icon-carbon-neutral.svg'
import EmptyCart from './assets/illustration-empty-cart.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [bgMobile, setBgMobile] = useState("");

  const [waffleCount, setWaffleCount] = useState(0);
  const [creamBruleeCount, setCreamBruleeCount] = useState(0);
  const [macaronCount, setMacaronCount] = useState(0);
  const [tiramisuCount, setTiramisuCount] = useState(0);
  const [pieCount, setPieCount] = useState(0);
  const [cakeCount, setCakeCount] = useState(0);
  const [brownieCount, setBrownieCount] = useState(0);
  const [baklavaCount, setBaklavaCount] = useState(0);
  const [pannaCount, setPannaCount] = useState(0);
  
  const [confirmed, setConfirmed] = useState(false);

  function reset(){
      setWaffleCount(0);
      setCreamBruleeCount(0);
      setMacaronCount(0);
      setTiramisuCount(0);
      setPieCount(0);
      setCakeCount(0);
      setBrownieCount(0);
      setBaklavaCount(0);
      setPannaCount(0);
  }
  function totalcount(){
      var count2=0;
      count2 = waffleCount + creamBruleeCount + macaronCount + tiramisuCount + pieCount + cakeCount + brownieCount + baklavaCount + pannaCount;
     
      return count2;
  }


  function totalprice(){
      var pricetotal = 0;
      waffleCount>0? pricetotal = waffleCount*6.50 : pricetotal += 0;
      creamBruleeCount>0? pricetotal = creamBruleeCount*7.00 : pricetotal += 0;
      macaronCount>0? pricetotal = macaronCount*8.00 : pricetotal += 0;
      tiramisuCount>0? pricetotal = tiramisuCount*5.50 : pricetotal += 0;
      pieCount>0? pricetotal = pieCount*5.00 : pricetotal += 0;
      cakeCount>0? pricetotal = cakeCount*4.50 : pricetotal += 0;
      brownieCount>0? pricetotal = brownieCount*4.50 : pricetotal += 0;
      baklavaCount>0? pricetotal = baklavaCount*6.50 : pricetotal += 0;
      pannaCount>0? pricetotal = pannaCount*6.50 : pricetotal += 0;
      return pricetotal.toFixed(2);
  }
  return (
    <>
      <main className={'font-redhat relative transition-all min-h-svh bg-[rgb(252,248,245)]'}>
        <div className={confirmed ? 'sm:h-0 sm:overflow-hidden transition-all grid lg:h-auto z-10 lg:grid-cols-3 lg:px-4 md:px-4' : 'transition-all grid sm:grid-cols-1 lg:grid-cols-3  text-black lg:px-4'}>
          <div className='p-4 grid sm:grid-cols-1 lg:grid-cols-3 lg:col-span-2 gap-y-8 lg:py-8 lg:px-8 lg:gap-x-6'>
            <h1 className='text-5xl font-extrabold lg:col-span-3'>Desserts</h1>
              <Item itemtype='Waffle' 
                    itemname='Waffle with Berries' 
                    itemprice='6.50'
                    setItemCount={setWaffleCount}
                    itemCount={waffleCount}
                    />
              <Item itemtype='Crème Brûlée' 
                    itemname='Vanilla Bean Crème Brûlée' 
                    itemprice='7.00'
                    setItemCount={setCreamBruleeCount}
                    itemCount={creamBruleeCount}
                    />
              <Item itemtype='Macaron' 
                    itemname='Mix of Five Macaron' 
                    itemprice='8.00'
                    setItemCount={setMacaronCount}
                    itemCount={macaronCount}
                    />
              <Item itemtype='Tiramisu' 
                    itemname='Classic Tiramisu' 
                    itemprice='5.50'
                    setItemCount={setTiramisuCount}
                    itemCount={tiramisuCount}
                    />
              <Item itemtype='Baklava' 
                    itemname='Pistachio Baklava' 
                    itemprice='4.00'
                    setItemCount={setBaklavaCount}
                    itemCount={baklavaCount}
                    />
              <Item itemtype='Pie' 
                    itemname='Lemon Meringue Pie' 
                    itemprice='5.00'
                    setItemCount={setPieCount}
                    itemCount={pieCount}
                    />
              <Item itemtype='Cake' 
                    itemname='Red Velvet Cake' 
                    itemprice='4.50'
                    setItemCount={setCakeCount}
                    itemCount={cakeCount}
                    />
              <Item itemtype='Brownie' 
                    itemname='Salted Caramel Brownie' 
                    itemprice='4.50'
                    setItemCount={setBrownieCount}
                    itemCount={brownieCount}
                    />
              <Item itemtype='Panna Cotta' 
                    itemname='Vanilla Panna Cotta' 
                    itemprice='6.50'
                    setItemCount={setPannaCount}
                    itemCount={pannaCount}
                    />
  
  
          </div>
          <div className='p-4 lg:p-16'>
              <div className='bg-white rounded-lg p-8'>
                  <h2 className='text-2xl font-bold text-orange-700'>Your cart ({totalcount()})</h2>
                  
                  <CartItem itemCount={waffleCount} setItemCount={setWaffleCount} price="6.50" itemName="Waffle with Berries"/>
                  <CartItem itemCount={creamBruleeCount} setItemCount={setCreamBruleeCount} price="7.00" itemName="Vanilla Bean Crème Brûlée"/>
                  <CartItem itemCount={macaronCount} setItemCount={setMacaronCount} price="8.00" itemName="Mix of Five Macaron"/>
                  <CartItem itemCount={tiramisuCount} setItemCount={setTiramisuCount} price="5.50" itemName="Classic Tiramisu"/>
                  <CartItem itemCount={baklavaCount} setItemCount={setBaklavaCount} price="4.50" itemName="Pistachio Baklava"/>
                  <CartItem itemCount={pieCount} setItemCount={setPieCount} price="4.00" itemName="Lemon Meringue Pie"/>
                  <CartItem itemCount={cakeCount} setItemCount={setCakeCount} price="5.00" itemName="Red Velvet Cake"/>
                  <CartItem itemCount={brownieCount} setItemCount={setBrownieCount} price="4.50" itemName="Salted Caramel Brownie"/>
                  <CartItem itemCount={pannaCount} setItemCount={setPannaCount} price="6.50" itemName="Vanilla Panna Cotta"/>


                  <div className={totalprice()>0? "transition-all h-auto" : "transition-all h-0 p-0 overflow-hidden"}>
                        <div className='flex justify-between py-6 items-center'>
                              <p>Order Total</p>
                              <p className='font-bold text-3xl'>${totalprice()}</p>
                        </div>

                        <div className='bg-[rgb(252,248,245)] rounded-md p-4 flex justify-center gap-x-2'>
                        <img src={Tree} alt="" />
                        <p>This is a <span className="font-bold">carbon-neutral</span> delivery</p>
                        </div>

                        <button className='rounded-full bg-[rgb(203,58,11)] my-8 text-white p-4 w-full'
                                onClick={()=>setConfirmed(!confirmed)}>
                        Confirm Order
                        </button>
                  </div>
                  
                  <div className={totalcount() == 0 ? "transition-all h-auto flex flex-col justify-center items-center" : "h-0 transition-all p-0 overflow-hidden "}>
                        
                        <img src={EmptyCart} alt="" />
                        <p className='font-bold text-amber-950'>Your items will appear here</p>
                  </div>
                 

              </div>
          </div>
        </div>

        <div className={confirmed? 'bg-gray-500 bg-opacity-75 absolute z-20 w-full h-full top-0 left-0' : "hidden"}>

        </div>



        <div className={confirmed ? 'transition-all bg-white p-6 absolute bottom-0 w-full rounded-2xl grid auto-rows-min gap-y-8 z-40 lg:w-[600px] h-min lg:top-1/2 lg:left-1/2 lg:translate-y-[-50%] lg:translate-x-[-50%] lg:p-12' : 'transition-all h-0  overflow-hidden'}>
            <img src={Check} alt="" />
            <h1 className='text-5xl text-wrap font-bold'>Order Confirmed</h1>
            <p className='text-gray-500'>We hope you enjoy your food!</p>
            <div className='bg-[rgb(252,248,245)] p-4 rounded-2xl'>
                  <ConfirmItem itemName="Waffle with Berries" itemCount={waffleCount} price="6.50"/>
                  <ConfirmItem itemName="Vanilla Bean Crème Brûlée" itemCount={creamBruleeCount} price="7.00"/>
                  <ConfirmItem itemCount={macaronCount} price="8.00" itemName="Mix of Five Macaron"/>
                  <ConfirmItem itemCount={tiramisuCount} price="5.50" itemName="Classic Tiramisu"/>
                  <ConfirmItem itemCount={baklavaCount} price="4.50" itemName="Pistachio Baklava"/>
                  <ConfirmItem itemCount={pieCount} price="4.00" itemName="Lemon Meringue Pie"/>
                  <ConfirmItem itemCount={cakeCount} price="5.00" itemName="Red Velvet Cake"/>
                  <ConfirmItem itemCount={brownieCount} price="4.50" itemName="Salted Caramel Brownie"/>
                  <ConfirmItem itemCount={pannaCount} price="6.50" itemName="Vanilla Panna Cotta"/>

                  <div className='flex justify-between items-center pt-4'>
                        <p>Order Total</p>
                        <p className='font-bold text-2xl'>${totalprice()}</p>
                  </div>
            </div>
            <button onClick={()=>{setConfirmed(!confirmed), reset()}} className='bg-[rgb(203,58,11)] text-white p-4 font-bold rounded-full w-full self-center'>Start New Order</button>
        </div>
      </main>
    </>
  )
}

export default App
