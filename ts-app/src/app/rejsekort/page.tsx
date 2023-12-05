import styles from './page.module.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'




export default async function Rejsekort() {

  return (
    <main className={styles.main}>
      <Navbar />
      <h1> Rejsekort</h1>
      <Footer />
    </main>
  )
}