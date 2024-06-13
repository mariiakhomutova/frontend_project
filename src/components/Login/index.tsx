'use client';

import { useState, useEffect } from 'react';
import styles from "./Login.module.css";

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
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
        console.error('Произошла ошибка:', error.message);
        setErrorMessage(error.message);
      }
    };
  

    return (
        <div className={[styles.elements].join(" ")}>
            <div className={styles.enter}>
                <div className={styles.div}>Войти</div>  
                <div className={styles.frameParent}>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                    <div className={styles.frameGroup}>
                        <input className={styles.frameChild} placeholder="E-mail" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input className={styles.frameChild} placeholder="Пароль" value={password}  onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className={styles.button}>Восстановить пароль</button>
                    <button className={styles.button1}>
                        <b className={styles.b}onClick={handleAuth}>Войти в личный кабинет</b>
                    </button>
                </div>
            </div> 
        </div>
    );
};