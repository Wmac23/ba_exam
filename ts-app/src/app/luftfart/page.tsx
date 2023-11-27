import styles from './page.module.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Footer/>
    </main>
  )
}