import styles from './page.module.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function Jernbaner() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
      <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>Påstigere</h4></button>
      <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>Ikke-statslige jernbaner</h4></button>
      <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>Stationskatalog</h4></button>
      <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>OD for statsbanen, kort</h4></button>
      <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>OD for statsbanen, tabel</h4></button>
      </div>
      <Footer/>
    </main>
  )
}