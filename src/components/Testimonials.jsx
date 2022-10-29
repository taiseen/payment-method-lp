import { feedback } from '../constants'
import { FeedbackCard } from '.';
import styles from '../styles'

const Testimonials = () => (

  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* gradient effect */}
    <div className="absolute -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient"/>


    <div className="w-full flex justify-between items-center flex-col md:flex-row relative z-[1]">

      <h1 className={styles.heading2}>
        What people are
        <br className="hidden sm:block" />
        saying about us
      </h1>

      <div className="w-full mt-6 md:mt-0">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

    </div>


    <div
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
    >
      {
        feedback.map(card =>
          <FeedbackCard
            key={card.id}
            {...card}
          />)
      }
    </div>

  </section>
)

export default Testimonials