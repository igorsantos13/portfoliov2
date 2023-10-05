import styles from './page.module.css'
import Main from '@/components/MePage/Main-Info'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// testes
// import Form from '@/components/Talk/Form'

// import Me from '@/components/MePage'
// import Experience from '@/components/Experience'

//react-router=-dom

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Main />
      <Footer />  


    </main>
  )
}
