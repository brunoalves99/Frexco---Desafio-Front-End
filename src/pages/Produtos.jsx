import {useState, useEffect } from 'react'
import styles from '../styles/Produtos.module.css';
import FormatBrl from '../components/FormatBrl';

const Produtos = ({ addToCart, nutri, showNutri }) => {
  const [frutasData, setFrutasData] = useState([]);
  

  useEffect(() => {
    console.log(frutasData);
    fetch('https://www.fruityvice.com/api/fruit/all')
    .then(response => response.json())
    .then(json => setFrutasData(json))
  }, []);

  if(frutasData.length === 0) return <h2 className={styles.loading}>Carregando...</h2>
  return (
    <>
      <main>
        {frutasData.map((fruta) => (
          <div  key={fruta.id} className={styles.fruta}>
            <h3>{fruta.name}</h3>
            {
              nutri ? (
                <>
                  <p>Carboidratos: {fruta.nutritions.carbohydrates}%</p>
                  <p>Proteinas: {fruta.nutritions.protein}%</p>
                  <p>Gorduras: {fruta.nutritions.fat}%</p>
                  <p>Calorias: {fruta.nutritions.calories}%</p>
                  <p>Açúcares: {fruta.nutritions.sugar}%</p>
                </>
              ) 
                : 
              ( 
                <>
                  <p>{FormatBrl(fruta.id)}</p>
                  <button onClick={() => addToCart(fruta)} className={styles.btnAddCart}>Adicionar ao Carrinho</button>
                </>
              )
            }
          </div>
        ))}
        <div onClick={showNutri} className={styles.nutri}>Nutrientes</div>
    </main>
    </>
  )
}

export default Produtos