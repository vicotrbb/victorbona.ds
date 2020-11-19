import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      window.GA_INITIALIZED = true
    }
  }, [])

  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
