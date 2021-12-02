import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Send.money
        </h1>

        <p className={styles.description}>
          Send any ETH + ANY ERC20 to any address. 
        </p>

        <div className={styles.grid}>
            <h2>Examples &rarr;</h2>
            <p>Random Text here</p>
        </div>
      </main>

      <footer className={styles.footer}>
    
          Powered by Bophades=
      </footer>
    </div>
  )
}
