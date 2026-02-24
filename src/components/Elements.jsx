import { useEffect, useRef } from "react"
import { motion, useAnimation } from "motion/react"
import { flowers } from "../assets/assets"
import assets from "../assets/assets"

const AnimatedElement = ({ children, index = 0, theme, className }) => {
  const controls = useAnimation()
  const lastTheme = useRef(null)

  useEffect(() => {
    if (lastTheme.current === null) {
      lastTheme.current = theme
      controls.set({ opacity: 1, y: 0 })
      return
    }

    if (lastTheme.current === theme) return
    lastTheme.current = theme

    controls.set({ opacity: 0, y: 5 })
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      },
    })
  }, [theme, controls, index])

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Elements = ({ theme }) => {
  return (
    <>
      <div className="absolute inset-0">
        <AnimatedElement theme={theme} className="relative w-65 left-115 top-30">
          <img
            src={theme === "dark" ? assets.lua : assets.sol}
            alt="Sol e lua"
            className="block w-full h-auto"
          />
        </AnimatedElement>
        <AnimatedElement theme={theme} className="relative w-338 left-54 -top-58.5">
          <img
            src={theme === "dark" ? assets.nuvensnoite : assets.nuvensdia}
            alt="Nuvens"
            className="block w-full h-auto"
          />
        </AnimatedElement>
      </div>
      <div className="absolute z-1 inset-0 mb-2 sm:mb-5 flex items-end justify-center">
        {flowers.map((flower, index) => (
          <AnimatedElement
            key={index}
            index={index}
            theme={theme}
            className="w-25 sm:w-70"
          >
            <img
              src={theme === "dark" ? flower.night : flower.day}
              alt={flower.alt}
              className="block w-full h-auto"
            />
          </AnimatedElement>
        ))}
      </div>
    </>
  )
}

export default Elements
