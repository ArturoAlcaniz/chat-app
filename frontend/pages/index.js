import React, { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className={styles.container}>
            <h1>Chat Online</h1>
            {isRegistering ? (
                <form id="registerForm" className={styles.form}>
                    <h2>Registro</h2>
                    <input
                        type="text"
                        id="regUsername"
                        placeholder="Usuario"
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        id="regPassword"
                        placeholder="Contraseña"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Registrarse
                    </button>
                    <p>
                        ¿Ya tienes una cuenta?{' '}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(false)}
                            style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                        >
                            Iniciar Sesión
                        </button>
                    </p>
                </form>
            ) : (
                <form id="loginForm" className={styles.form}>
                    <h2>Iniciar Sesión</h2>
                    <input
                        type="text"
                        id="loginUsername"
                        placeholder="Usuario"
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        id="loginPassword"
                        placeholder="Contraseña"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Iniciar Sesión
                    </button>
                    <p>
                        ¿No tienes una cuenta?{' '}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(true)}
                            style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                        >
                            Regístrate
                        </button>
                    </p>
                </form>
            )}
            <p id="message" className={styles.message}></p>
        </div>
    );
}