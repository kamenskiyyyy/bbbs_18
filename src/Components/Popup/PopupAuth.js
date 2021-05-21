import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function PopupAuth({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className="popup popup_type_login"
      contentLabel="Example Modal"
    >
      <div className="login">
        <button type="button" aria-label="закрыть" className="popup__button-close popup__button-close_place_login" />
        <h3 className="login__title">Вход</h3>
        <div className="login__texts">
          <p className="login__text">Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».</p>
          <p className="login__text">
            Пожалуйста, введите логин и пароль из&nbsp;письма. Если вам не приходило письмо, свяжитесь с&nbsp;вашим куратором.
          </p>
        </div>
        <form className="popup__form popup__form_type_login" name="login" action="#" method="POST" noValidate>
          <input
            type="text"
            name="login"
            placeholder="Логин"
            className="popup__input popup__input_type_login"
            required
            minLength="2"
          />
          <span className="popup__error popup__error_type_login" />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="popup__input popup__input_type_password"
            required
            minLength="2"
          />
          <span className="popup__error popup__error_type_password" />
          <Link className="login__link" to="#">
            Забыли пароль?
          </Link>
          <button type="submit" className="button button_color_darkgray popup__submit-btn popup__submit-btn_type_login">
            Войти
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default PopupAuth;
