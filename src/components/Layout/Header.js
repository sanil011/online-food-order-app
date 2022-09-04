import { Fragment } from "react";
import classes from './Header.module.css';
import Meals from '../../assest/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
return(
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
       <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
       <img src={Meals} alt="pic"/>
      </div>
    </Fragment>
);
}

export default Header;