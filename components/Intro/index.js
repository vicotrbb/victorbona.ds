import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hello, I'm Victor,</p>
        <p className={styles.myTitle}>
          a Software engineer <br />
          and Data Scientist.
        </p>
        <a target="_blank" rel="noopener noreferrer" href="mailto:victor.bona@hotmail.com">
          <button className={styles.helloButton}>Mail me</button>
        </a>
      </div>
      <div className={styles.longOne}>
        <p>
        I am a <strong>Experienced Back-end Developer</strong> and <strong>Machine learning enthusiast</strong> 🧠 
        aiming to work with <strong>ML engineering</strong> and contribute to the development and 
        growing of <strong>Artificial intelligence</strong> field, professional and academically.
        </p>
        <p>📋 I am actually working at Mout's as a <strong>Experienced Software Developer</strong>.</p>
        <p>💻 I am graduating in <strong>Computer Sciences</strong>.</p>
        <p>🔬 My main study focus is <strong>Artificial Intelligence</strong>.</p>
      </div>
    </div>
    <div className={styles.br}></div>
  </>
)

export default Intro
