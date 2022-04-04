import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Section1 from '../components/Section1'
import Section2 from '../components/section2'
import Resume from '../components/Resume'
import Footer from '../components/Footer'
import Forms from '../components/Forms'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Williams Portfolio</title>
        <meta name="description" content="Created by a young and talented programmer" />
      </Head>
      <Navbar />
        <Section1 />
      <Section2 />
      <Resume />
      <Forms />
      <Footer />
    </div>
  )
}
