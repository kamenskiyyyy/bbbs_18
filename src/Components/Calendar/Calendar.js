/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

function Calendar(props) {
  return (

    <section>
      <section className="grid-calendar content">
        <h1 className="heading">Календарь</h1>
        <div className="grid-calendar__buttons">
          <button className="button button_color_black" type="button">Декабрь</button>
          <button className="button button_color_black" type="button">Январь</button>
          <button className="button button_color_black" type="button">Февраль</button>
        </div>
        <div className="grid-calendar__grid">
          <div className="calendar calendar_onclick">
            <div className="calendar__about">
              <p className="calendar__participants">Волонтёры + дети</p>
              <p className="calendar__date">декабрь / понедельник</p>
              <h2 className="calendar__event">Субботний meet up: учимся проходить интевью</h2>
              <p className="calendar__day">05</p>
            </div>
            <ul className="calendar__contacts">
              <li className="calendar__contacts-item">
                <p className="calendar__time">12:00–14:00</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__phone">Александра, +7 926 356-78-90</p>
              </li>
            </ul>
            <div className="calendar__sign-up">
              <div className="calendar__sign-up_flex">
                <button
                  className="button button_color_blue button_color_blue_onclick button_color_blue-open"
                  type="button">
                  Отменить запись
                </button>
                <p className="calendar__sign-up__type_text">Осталось 5 мест</p>
              </div>
              <button
                className="button_color_blue button_color_blue-round button_color_blue-open"
                type="button">
                <svg
                  className="calendar__btn"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                  <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                  <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                  <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
                </svg>
              </button>
            </div>
          </div>

          <div className="calendar">
            <div className="calendar__about">
              <p className="calendar__participants">Волонтёры</p>
              <p className="calendar__date">декабрь / понедельник</p>
              <h2 className="calendar__event">Ресурсная группа «Вовлечение в волонтёрство»</h2>
              <p className="calendar__day">16</p>
            </div>
            <ul className="calendar__contacts">
              <li className="calendar__contacts-item">
                <p className="calendar__time">12:00–14:00</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__phone">Александра, +7 926 356-78-90</p>
              </li>
            </ul>
            <div className="calendar__sign-up">
              <div className="calendar__sign-up_flex">
                <button
                  className="button button_color_blue button_color_blue-nonactive"
                  type="button"
                  disabled="disabled">
                  Записаться
                </button>
                <p className="calendar__sign-up__type_text">Запись закрыта</p>
              </div>
              <button
                className="button_color_blue button_color_blue-round button_color_blue-open"
                type="button">
                <svg
                  className="calendar__btn"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                  <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                  <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                  <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
                </svg>
              </button>
            </div>
          </div>

          <div className="calendar">
            <div className="calendar__about">
              <p className="calendar__participants">Волонтёры + дети</p>
              <p className="calendar__date">декабрь / понедельник</p>
              <h2 className="calendar__event">Занятие с выпускниками: как составить резюме</h2>
              <p className="calendar__day">20</p>
            </div>
            <ul className="calendar__contacts">
              <li className="calendar__contacts-item">
                <p className="calendar__time">12:00–14:00</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__phone">Александра, +7 926 356-78-90</p>
              </li>
            </ul>
            <div className="calendar__sign-up">
              <div className="calendar__sign-up_flex">
                <button
                  className="button button_color_blue button_color_blue-open"
                  type="button">
                  Записаться
                </button>
                <p className="calendar__sign-up__type_text">Осталось 5 мест</p>
              </div>
              <button
                className="button_color_blue button_color_blue-round button_color_blue-open"
                type="button">
                <svg
                  className="calendar__btn"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                  <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                  <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                  <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
                </svg>
              </button>
            </div>
          </div>

          <div className="calendar">
            <div className="calendar__about">
              <p className="calendar__participants">Волонтёры + дети</p>
              <p className="calendar__date">декабрь / понедельник</p>
              <h2 className="calendar__event">Субботний meet up: учимся проходить интевью</h2>
              <p className="calendar__day">23</p>
            </div>
            <ul className="calendar__contacts">
              <li className="calendar__contacts-item">
                <p className="calendar__time">12:00–14:00</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__phone">Александра, +7 926 356-78-90</p>
              </li>
            </ul>
            <div className="calendar__sign-up">
              <div className="calendar__sign-up_flex">
                <button
                  className="button button_color_blue button_color_blue-open"
                  type="button">
                  Записаться
                </button>
                <p className="calendar__sign-up__type_text">Осталось 5 мест</p>
              </div>
              <button
                className="button_color_blue button_color_blue-round button_color_blue-open"
                type="button">
                <svg
                  className="calendar__btn"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                  <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                  <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                  <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
                </svg>
              </button>
            </div>
          </div>

          <div className="calendar">
            <div className="calendar__about">
              <p className="calendar__participants">Волонтёры + дети</p>
              <p className="calendar__date">декабрь / понедельник</p>
              <h2 className="calendar__event">Субботний meet up: учимся проходить интевью</h2>
              <p className="calendar__day">28</p>
            </div>
            <ul className="calendar__contacts">
              <li className="calendar__contacts-item">
                <p className="calendar__time">12:00–14:00</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
              </li>
              <li className="calendar__contacts-item">
                <p className="calendar__phone">Александра, +7 926 356-78-90</p>
              </li>
            </ul>
            <div className="calendar__sign-up">
              <div className="calendar__sign-up_flex">
                <button
                  className="button button_color_blue button_color_blue-open"
                  type="button">
                  Записаться
                </button>
                <p className="calendar__sign-up__type_text">Осталось 5 мест</p>
              </div>
              <button
                className="button_color_blue button_color_blue-round button_pcolor_blue-open"
                type="button">
                <svg
                  className="calendar__btn"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                  <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                  <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                  <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="popup popup__meet">
        <div className="calendar calendar__popup">
          <button className="button-close popup__button-close" type="button" />
          <div className="calendar__about_popup">
            <p className="calendar__participants">Волонтёры + дети</p>
            <p className="calendar__date">декабрь / понедельник</p>
          </div>
          <div className="calendar__about_popup">
            <h2 className="calendar__event">Субботний meet up: учимся проходить интевью</h2>
            <p className="calendar__day">28</p>
          </div>
          <ul className="calendar__contacts">
            <li className="calendar__contacts-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__contacts-item">
              <p className="calendar__adress">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)</p>
            </li>
            <li className="calendar__contacts-item">
              <p className="calendar__phone">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <p className="calendar__text_popup">
            Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса
            сейчас не так много,
            а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего
            ресурсного клуба
            "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса
            для
            общения и взаимодействия с
            нашими подопечными.
          </p>
          <div className="calendar__sign-up">
            <div className="calendar__sign-up_flex">
              <button
                className="button button_color_blue button_color_blue-open"
                type="button">
                Записаться
              </button>
              <p className="calendar__sign-up__type_text">Осталось 5 мест</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="popup popup__proof">
        <div className="proof">
          <button type="button" className="button-close popup__button-close" />
          <h2 className="proof__title">Подтвердить запись на мероприятие</h2>
          <p className="proof__subtitle">«Субботний meet up: учимся проходить интервью» 5 декабря с&nbsp;12:00–14:00</p>
          <div className="proof__buttons">
            <button type="button" className="proof__sbm-btn button button_color_blue">Подтвердить запись</button>
            <button type="button" className="proof__cancel-btn button button_color_black">Отменить</button>
          </div>
        </div>
      </section> */}

      {/* <section className="popup popup_type_success">
        <div className="success">
          <button type="button" className="button-close popup__button-close" />
          <img className="success__image" src="../images/success-popup.svg" alt="#" />
          <h2 className="success__title">Вы записаны на мероприятие</h2>
          <p className="success__subtitle">«Субботний meet up: учимся проходить интервью» 5 декабря с&nbsp;12:00–14:00</p>
          <h2 className="success__title">
            {' '}
            Если у вас не получится прийти — отмените,
            пожалуйста, запись.
          </h2>
          <button type="button" className="button button_color_black success__button">Вернуться к календарю</button>
        </div>
      </section> */}

      <template id="template-calendar">
        <div className="calendar">
          <div className="calendar__about">
            <p className="calendar__participants" />
            <p className="calendar__date" />
            <h2 className="calendar__event" />
            <p className="calendar__day" />
          </div>
          <ul className="calendar__contacts">
            <li className="calendar__contacts-item">
              <p className="calendar__time" />
            </li>
            <li className="calendar__contacts-item">
              <p className="calendar__adress" />
            </li>
            <li className="calendar__contacts-item">
              <p className="calendar__phone" />
            </li>
          </ul>
          <div className="calendar__sign-up">
            <div className="calendar__sign-up_flex">
              <button className="button color_blue" type="button" />
              <p className="calendar__sign-up__type_text" />
            </div>
            <button className="button_color_blue button_color_blue-round" type="button">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
                <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
                <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
                <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
              </svg>
            </button>
          </div>
        </div>
      </template>
    </section>
  );
}

export default Calendar;
