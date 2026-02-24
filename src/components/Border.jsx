import Background from "./Background"
import assets from '../assets/assets'

const Border = ({ theme }) => {
  return (
    // Border externa
    <div
    className="
      relative p-5 sm:p-14
      bg-[linear-gradient(to_bottom,var(--color-primary)_8%,var(--color-secondary)_79%,var(--color-tertiary)_100%)]
    "
    >
      {/* Decoração */}
      <div className="absolute inset-0 z-1 flex justify-around items-start gap-192.5 top-10">
        <img className="relative w-40" src={theme === 'dark' ? assets.flornoiteesquerda : assets.flordiaesquerda}  alt="" />
        <img className="relative w-40" src={theme === 'dark' ? assets.flornoitedireita : assets.flordiadireita}  alt="" />
      </div>
      <div className="absolute inset-0 z-2 flex justify-around items-end gap-192.5 top-10">
        <img className="relative w-60" src={theme === 'dark' ? assets.florbottomnoiteesquerda : assets.florbottomdiaesquerda}  alt="" />
        <img className="relative w-60" src={theme === 'dark' ? assets.florbottomnoitedireita : assets.florbottomdiadireita}  alt="" />
      </div>
      {/* Inner shadow */}
      <div
        className="
        absolute z-2
        inset-0 
        shadow-[inset_0_12px_40px_#65656580]"
      />
      {/* Semicirculo */}
      <div
        className="
          absolute z-1
          top-0 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-25 h-25 sm:w-64 sm:h-64
        bg-primary
          rounded-full
        "
      />
      {/* Conteudo */}
      <Background theme={theme} />  
    </div>
  )
}

export default Border
