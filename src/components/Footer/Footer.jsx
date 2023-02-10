import footer from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={footer.contacts}>
        <p>Контакты</p>
        <div className={footer.contactsInfo}>
          <div className={footer.defaultContactsInfo}>
            <p className={footer.contactsInfoMail}><span className={footer.indent}>Почта:</span> <i className="fa-solid fa-paper-plane" /><span className={footer.contactsInfoSpan}>qualityoil@mail.ru</span></p>
            <p className={footer.contactsInfoPhone}><span className={footer.indent}>Телефон:</span><i className="fa-solid fa-phone-volume" /><span className={footer.contactsInfoSpan}>+78002345634</span></p>
            <p className={footer.contactsInfoPhoneLink}><a href='#'>Заказать звонок</a></p>
          </div>
          <div className={footer.moreContactsInfo}>
            <p>Юридическая информация</p>
            <p>ОГРНИП..........</p>
            <p>..........</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p><a href='#' className={footer.card}>Скачать карточку предприятия</a></p>
          </div>
        </div>
        <hr />
        <div className={footer.formRequest}>
          <div className={footer.formRequestText}>
            <p>Есть вопросы?<br /> Оставьте заявку.</p>
            <p>Мы бесплатно проконсультируем<br /> Вас по любому вопросу.</p>
          </div>
          <div className={footer.form}>
            <form className={footer.formElement}>
              <p>Имя <br /><input type='text' className={footer.formInput} /></p>
              <p>Телефон <br /><input type='tel' className={footer.formInput} /></p>
              <p>Почта <br /><input type='email' className={footer.formInput} /></p>
              <p>Комментарий <br /><textarea rows={10} cols={50} className={footer.formInputArea}></textarea></p>
              <p><input type='checkbox' className={footer.formInputCheckBox} />Нажимая на кнопку отправить Вы <br /> соглашаетесь на обработку <br /> персональных данных</p>
              <div className={footer.formDivButton}><button type='submit' className={footer.formButton}>Отправить</button></div>
            </form>
          </div>
        </div>
        <div className={footer.infoCompany}>
          <p>© 2023 Все права защищены. <br /><br />Все материалы сайта принадлежат <br />Noted & frexxx-7</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer