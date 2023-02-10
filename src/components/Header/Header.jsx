import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <img src="/icon.png" alt="icon" />
        </div>

        <div className={classes.contentInfo}>
          <div className={classes.headerMenu}>
            <div className={classes.headerMenuContent}>
              <button className={classes.catalog}>
                <p><i className="fa-solid fa-bars fa-xl" />Каталог<i className="fa-sharp fa-solid fa-chevron-down fa-xl" /></p>
              </button>

              <div className={classes.search}>
                <i className="fa-solid fa-magnifying-glass fa-sm" style={{ 'color': '#fff' }} />
                <input type="text" placeholder='Найти товар' />
              </div>

              <div className={classes.buying}>
                <i className="fa-solid fa-cart-shopping fa-xl" />
                <div className={classes.circle}>
                  {2}
                </div>
              </div>
              <p className={classes.contactsInfoMail}><i className="fa-solid fa-paper-plane fa-lg" />qualityoil@mail.ru</p>
              <p className={classes.contactsInfoPhone}><i className="fa-solid fa-phone-volume fa-lg" />+78002345634</p>
            </div>
          </div>
          <div className={classes.menu}>
            <nav className={classes.nav}>
              <ul className={classes.ul}>
                <li>Главное</li>
                <li>О компании</li>
                <li>Производители <i className="fa-sharp fa-solid fa-chevron-down fa-lg" /></li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li>Новости</li>
              </ul>
            </nav>
            <div className={classes.buttonDiv}>
              <button className={classes.button}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header