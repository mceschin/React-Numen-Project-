import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import "../stylesheets/Basket.css"






function Basket(props) {
    
    const {cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.precio * c.qty, 0);
    console.log (itemsPrice)
    // const taxPrice = itemsPrice * 0.21;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice;


    return ( 
    <aside className='block col-1'> 
    <h2 className='tus-compras'> Tus Productos </h2>
        <div>

        {cartItems.length === 0 && <div className='cart-empty'>Aquí vas a ver el detalle</div>}</div>
        {cartItems.map((item) => ( 
            <div key={item.id} className="row"> 
            <div className='col-2'>{item.combo}</div>
            <div className='col-2'>
                <button onClick={()=>onAdd(item)} className="add">
                    +
                </button>
                <button onClick={()=>onRemove(item)} className="remove">
                    -
                </button>
            </div>
            <div className='col-2 text-right'>
                {item.qty} x ${item.precio}
            </div>
        </div>
    
    ))}
    {cartItems.length !== 0 && (
        <>
            <hr></hr>
            <div className='row'>
                <div className='col-2'>Total de productos</div>
                <div className='col-2 text-right'> ${itemsPrice.toFixed(2)} </div>
            </div>
            {/* <div className='row'>
                <div className='col-2'>Tax Price</div>
                <div className='col-1 text-right'> ${taxPrice.toFixed(2)} </div>
            </div> */}


            <div className='row'>
                <div className='col-2'>Envío</div>
                <div className='col-2 text-right'> ${shippingPrice.toFixed(2)} </div>
            </div>


            <div className='row'>
                <div className='col-2'> <strong> Total </strong></div>
                <div className='col-2 text-right'> <strong> ${totalPrice.toFixed(2)} </strong> </div>
            </div> 

            <Button className='finalizar-compra'>Finalizar compra</Button>


        </>
    )}
    </aside>
    )}

export default Basket;
