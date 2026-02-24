import { motion } from "motion/react"
import { useEffect } from "react"
import assets from '../assets/assets'

const ToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    /* CONTAINER FIXO NO TOPO */
    <div className="absolute z-2 top-0 sm:top-10 left-1/2 -translate-x-1/3 w-28 h-14 cursor-pointer select-none">
      {/* BOTÃO (ESCALADO) */}
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="relative w-20 h-10 scale-125 max-md:scale-100 max-sm:scale-60 cursor-pointer select-none"
      >
        {/* FUNDO */}
        <motion.img
          src={theme === "dark" ? assets.fundotogglenoite : assets.fundotoggledia}
          alt="Toggle background"
          className="absolute inset-0 w-full h-full rounded-full"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        />

        {/* BOLINHA */}
        <motion.img
          src={theme === "dark" ? assets.botaonoite : assets.botaodia}
          alt="Toggle knob"
          className="absolute top-1 left-1 w-8 h-8"
          initial={false}
          animate={{ x: theme === "dark" ? 40 : 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        />
      </div>
    </div>
  )
}

export default ToggleBtn
