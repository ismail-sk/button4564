import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text, type }) => {
  
  switch(type) {

    case "primary":
      return <button className={styles.primary}>{text}</button>
    
    case "dashed":
      return <button className={styles.dashed}>{text}</button>

    case "text":
      return <button className={styles.text}>{text}</button>
    
    case "link":
      return <button className={styles.link}>{text}</button>

    default:
      return <button className={styles.default}>{text}</button>
  
  }
}
