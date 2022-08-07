import React from 'react'
import styles from '../styles/Carrinho.module.css';
import FormatBrl from '../components/FormatBrl';

const Carrinho = ({ cartFruits, addToCart, removeToCart, totalPrice, cleanCart, removeFruitCart }) => {

  return (
    <div className={styles.container}>
      <div className={styles.carrinho}>
        {cartFruits.length === 0 &&
          <p>Carrinho Vazio!</p>
        }
        {cartFruits.map((fruit) => (
        <div key={fruit.id} className={styles.cartFruit}>
            <p className={styles.fruitName}>{fruit.name}</p>
            <div className={styles.cartBtns}>
              <button onClick={() => addToCart(fruit)} className={styles.add}>+</button>
              <span className={styles.qty}>{fruit.qty}</span>
              <button onClick={() => removeToCart(fruit)} className={styles.remove}>-</button>
            </div>
            <button onClick={() => removeFruitCart(fruit)} className={styles.remove} style={{backgroundColor: '#c93636'}}>x</button>
            <p>{FormatBrl((fruit.id * fruit.qty))}</p>
        </div>
      ))}

      {cartFruits.length > 0 && (
        <div className={styles.divBuy}>
          <button onClick={cleanCart} className={styles.btnCleanCart}>Limpar Carrinho</button>
        <button className={styles.btnBuy}>Finalizar Compra</button>
        <h3 className={styles.totalPrice}>Total: {FormatBrl(totalPrice)}</h3>
      </div>
      )}
      
      </div>
      
    </div>
  )
}

export default Carrinho