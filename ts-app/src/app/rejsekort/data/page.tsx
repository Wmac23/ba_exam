import styles from './page.module.css'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import RejsekortNav from '../../../../components/RejsekortNav'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Om data</h1>
      </div>
      <Footer/>
    </main>
  )
}