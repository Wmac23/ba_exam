import styles from './page.module.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { getMovies } from '../../../lib/mongo/movies'

async function fetchMovies() {
  const { movies } = await getMovies()
  if (!movies) throw new Error ('Failed to fetch movies')
  
  return movies
}

export default async function Rejsekort() {
const movies = await fetchMovies()

  return (
    <main className={styles.main}>
      <Navbar />
      <h1> Rejsekort</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
      <Footer />
    </main>
  )
}