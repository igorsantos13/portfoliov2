import Main from '@/components/Main-Info'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <Main />

      <Footer />
    </main>
  )
}
