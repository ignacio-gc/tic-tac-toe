import Game from '../components/game'
import styles from './index.module.css'
import About from '../components/about'

const Index = () => {

  return (
    <>
      <div className={styles.encabezado}>
        <h1>TA-TE-TI: Solución con Minimax</h1>
        <h2>Rust 🦀 + Wasm 🕸️ + Next.js</h2>
      </div>
      <div className={styles.game}>
        <Game />
      </div>
      <About />
    </>
  )
}

export default Index  