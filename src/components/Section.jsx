import { icons } from '../assets/assets.js'


const Section = () => {
  return (
    <section className="flex justify-evenly gap-8 py-20 bg-linear-65 from-secondary to-tertiary">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="h-60 p-6 bg-secondary shadow-md rounded-full"
        />
      ))}
    </section>
  )
}

export default Section
