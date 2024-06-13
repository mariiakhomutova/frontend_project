'use client';

import { useState, useEffect } from 'react';
import styles from "./Registration.module.css";

export default function AuthorizationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      window.location.href = 'http://localhost:3000/';
    }
  }, [success]);

  const handleAuth = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.status !== 201) {
        throw new Error(data.message);
      }
      setSuccess(true);
      setErrorMessage('Успешно');
    } catch (error: any) {
      console.error('Регистрация не выполнена:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={[styles.elements].join(" ")}>
      <div className={styles.registration}>
        <div className={styles.parent}>
          <div className={styles.div1}>Зарегистрироваться</div>
          <div className={styles.leftColumnParent}>
            <div className={styles.leftColumn}>
              <div className={styles.wrapper}>
                <div className={styles.eMail}>Фамилия</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.eMail}>Имя</div>
              </div>
              <div className={styles.wrapper}>
                <input className={styles.emaillog} placeholder="E-mail" type="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className={styles.wrapper}>
                <div className={styles.eMail}>Номер телефона</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.eMail}>Логин</div>
              </div>
              <div className={styles.wrapper}>
                <input className={styles.emaillog} placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className={styles.wrapper}>
                <div className={styles.eMail}>Подтверждение пароля</div>
              </div>
            </div>
            <div className={styles.rightColumnParent}>
              <div className={styles.rightColumn}>
                <div className={styles.wrapper}>
                  <div className={styles.eMail}>Населённый пункт</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.eMail}>Улица</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.wrapper5}>
                    <div className={styles.eMail}>Дом</div>
                  </div>
                  <div className={styles.wrapper5}>
                    <div className={styles.eMail}>Квартира</div>
                  </div>
                  <div className={styles.wrapper5}>
                    <div className={styles.eMail}>Индекс</div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.eMail}>Регион</div>
                </div>
                <div className={styles.subscrParent}>
                  <div className={styles.subscr}>
                    <div className={styles.subscrChild} />
                    <div
                      className={styles.div14}
                    >{`Получать новостную рассылку `}</div>
                  </div>
                  <div className={styles.agreement}>
                    <div className={styles.subscrChild} />
                    <div
                      className={styles.div15}
                    >{`Я прочитал и соглашаюсь с условиями конфиденциальности и защиты информации `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.agreement}>
                <div className={styles.wrapper9}>
                  <div className={styles.div16}>Номер дисконтной карты</div>
                </div>
                <button className={styles.button2} onClick={handleAuth}>
                  <b className={styles.b1}>запомнить</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
