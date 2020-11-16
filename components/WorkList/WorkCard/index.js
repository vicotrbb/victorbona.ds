import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../Icon'
import styles from './WorkCard.module.css'

const bgColors = ['#4146B5', '#4A2BAF', '#0F61C0', '#9E2B79']
const gifs = ["https://giphy.com/embed/7NS9RAepPQ0HJ85qJz"]

const WorkCard = props => {
  const {
    index,
    slug,
    document: {
      data: { title, date, services, tech, featuredImg }
    }
  } = props

  return (
    <Link href="/work/[wid]" as={`/work/${slug}`}>
      <a className={styles.card} style={{ background: bgColors[index % 4] }}>
        <div className={styles.images}>
          <iframe src={ gifs[index % 4] } width="100%" height="100%" frameBorder="0"></iframe>
        </div>
        <div className={styles.info}>
          <p className={styles.date}>{new Date(date).getFullYear()}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.services}>
            {services.split(', ').map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </div>
          <div className={styles.tech}>
            {tech.split(', ').map(t => (
              <div key={t} className={styles.techIcon}>
                <Icon white>{t}</Icon>
              </div>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

WorkCard.propTypes = {
  index: PropTypes.number,
  slug: PropTypes.string,
  document: PropTypes.shape({
    data: {
      title: PropTypes.string,
      year: PropTypes.string,
      services: PropTypes.string,
      tech: PropTypes.string,
      images: PropTypes.string
    }
  })
}

export default WorkCard
