import React from 'react'
import './StylesExComp.css'
import styles from './StylesExComp.module.css'
import ChildComp from '../ChildComp/ChildComp'

const StylesExComp = () => {
  return (
    <div>
        <h1 className='success'>StylesExComp</h1>
        <h1 className={styles.error}>Styles with module</h1>
        <ChildComp/>
    </div>
  )
}

export default StylesExComp