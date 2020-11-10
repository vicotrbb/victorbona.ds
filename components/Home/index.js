import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './Home.module.css'

const Home = () => (
  <div className={styles.home}>
    <SEO
      title="Victor Bona | Portfolio"
      description="Victor Bona portfolio, Software Engineer and Data Scientist"
    />
    <WorkList />
  </div>
)

export default Home
