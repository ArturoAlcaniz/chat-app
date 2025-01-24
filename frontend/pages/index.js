import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenido al Chat App</h1>
      <p>Por favor, inicia sesión o regístrate para continuar.</p>
      <div className={styles.buttons}>
        <Link href="/login">
          <button className={styles.button}>Iniciar Sesión</button>
        </Link>
        <Link href="/register">
          <button className={styles.button}>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}