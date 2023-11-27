import styles from './page.module.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function Jernbaner() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Footer/>
    </main>
  )
}