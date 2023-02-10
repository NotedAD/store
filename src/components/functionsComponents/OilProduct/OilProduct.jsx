import React from 'react'
import classes from './OilProduct.module.scss'

const OilProduct = ({ image, name, number, volume, art }) => {
  return (
    <>
      <div className={classes.oilProduct}>
        <div className={classes.image}>
          <img src={image} alt="image" />
        </div>

        <div className={classes.productInfo}>
          <div className={classes.name}>
            <p>{name}</p>
          </div>

          <div className={classes.numberSale}>
            <p className={classes.fullPrice}>8800р</p>
            <p className={classes.saleprice}>6700р</p>
            <p className={classes.sale}>15% скидка</p>
            <div className={classes.number}><button>+</button> {number} шт. <button>-</button></div>
          </div>

          <div className={classes.productVolume}>
            <p><span>Кол-во</span> {number}</p>
            <p><span>Объем</span> {volume}</p>
            <p><span>Арт.</span> {art}</p>
          </div>

          <div className={classes.productButtons}>
            <div className={classes.volumeButtons}>
              <button className={classes.buttonVolume + ' ' + classes.active}>
                4л
              </button>
              <button className={classes.buttonVolume}>
                57л
              </button>
              <button className={classes.buttonVolume}>
                209л
              </button>
            </div>
            <div className={classes.inCart}>
              <button>В корзину</button>
            </div>
          </div>
        </div>

      </div>
      <hr />
    </>
  )
}

export default OilProduct