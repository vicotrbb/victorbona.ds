import React from 'react'
import styles from './Line.module.css'
import circle from './circle.svg'

const Line = () => (
  <div className={styles.line}>
    <svg height="10" width="10" className={styles.topCircle}>
      <circle cx="5" cy="5" r="5" fill="#A7B4CF" />
    </svg>

    <svg height="10" width="10" className={styles.bottomCircle}>
      <circle cx="5" cy="5" r="5" fill="#A7B4CF" />
    </svg>

  </div>
)


export default Line