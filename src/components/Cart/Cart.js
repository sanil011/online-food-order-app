import { useContext } from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

import CartContext from '../../Store/CartContext';


const Cart = ( props) =>{

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   
    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item,amount:1});
    };

    const hasItems = cartCtx.items.length>0;
    const cartItem = <ul className={classes['cart-items']}>{cartCtx.items.map((item) =>(
    <CartItem 
     key={item.key}
     name={item.name}
     price={item.price}
     amount={item.amount}
     onRemove={cartItemRemoveHandler.bind(null,item.id)}
     onAdd={cartItemAddHandler.bind(null,item)}
    />

    ))}
    </ul>
    return(
        <Modal onClose={props.onClose} >
            {cartItem}
            <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Open</button>}
            </div>
        </Modal>

    );
};

export default Cart;