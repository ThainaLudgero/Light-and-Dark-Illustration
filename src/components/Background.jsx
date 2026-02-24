import { useEffect, useRef } from "react"
import { motion, useAnimation } from "motion/react"
import assets from '../assets/assets'
import Elements from './Elements'

const Background = ({ theme }) => {
  const controls = useAnimation()
  const lastTheme = useRef(null)

  useEffect(() => {
    if (lastTheme.current === null) {
      lastTheme.current = theme
      controls.set({ opacity: 1 })
      return
    }

    if (lastTheme.current === theme) return
    lastTheme.current = theme

    controls.set({ opacity: 0 })
    controls.start({
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    })
  }, [theme, controls])

  return (
    <div className="relative">
        <Elements theme={theme} />
        <motion.img 
            src={theme === 'dark' ? assets.fundonoite : assets.fundodia}
            className="border-10 sm:border-20 border-secondary max-h-200 justify-self-center " 
            alt="Illustration background" 
            initial={{ opacity: 1 }}
            animate={controls}
            /> 
    </div>
  )
}

export default Background
