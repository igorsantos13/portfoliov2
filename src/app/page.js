import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Experience from '@/components/Experience'

// testes
// import Form from '@/components/Talk/Form'

import Main from '@/components/MePage/Main-Info'
// import Experience from '@/components/Experience'

//react-router=-dom

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
    </main>
  )
}
