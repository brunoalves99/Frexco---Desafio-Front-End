import React from 'react';
import styles from '../styles/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ fruitsInCart }) => {
  return (
    <header>
        <div>
            <h1>Fruityvice</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink className={styles.btnPage} to="/" end>Produtos</NavLink>
                </li>
                <li>
                    <NavLink className={styles.btnPage} to="carrinho">Carrinho</NavLink>
                    {fruitsInCart > 0 ? (
                        <span className={styles.fruitsInCart}>{fruitsInCart}</span>
                    ) : ''}
                    
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;