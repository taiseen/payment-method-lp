import { Navbar, Testimonials, Hero, CardDeal, Business, Billing, Clients, Footer, Stats, CTA } from './components';
import styles from './styles'


const App = () => {

  return (
    <main className='bg-primary w-full overflow-hidden text-white'>

      <Navbar />

      <Hero />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <Stats />
          
          <Business />
          
          <Billing />
          
          <CardDeal />
          
          <Testimonials />
          
          <Clients />
          
          <CTA />
          
          <Footer />

        </div>
      </div>

    </main>
  )
}

export default App