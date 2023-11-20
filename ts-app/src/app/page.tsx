import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Velkommen til Passagertal.dk</h1>
        <p>Hvor mange busrejser foretages? Hvor flyver vi hen? Og på hvilke tidspunkter er der flest, der tjekker ind med Rejsekortet?</p>
      <div>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Luftfart </button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Jernbaner</button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Busser</button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Rejsekort</button>
      </div>
    </main>
  )
}
