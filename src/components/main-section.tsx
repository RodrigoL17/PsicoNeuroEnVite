import { MainCover } from "./main-cover"

export const MainSection = () => {
    return(
        <section className="h-screen bg-white/20 flex flex-col justify-center md:items-center md:justify-normal md:flex-row">
        <MainCover />
        <div className="z-10 flex flex-col justify-center items-center p-5 sm:items-start md:px-10 text-white gap-3">
          <h1 className="text-6xl w-full md:text-6xl lg:text-[5.5rem] font-bold font-primary text-center sm:text-left">Psico Neuro Espiritual</h1>
          <p className="text-secondary text-sm px-10 text-center sm:text-left sm:px-0 sm:text-base md:text-lg italic sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%]  whitespace-pre-line">Tu bienestar integral es nuestra prioridad. Conectando <strong>psicología</strong>, <strong>espiritualidad</strong>, <strong>yoga</strong> y <strong>neurociencias</strong>, te acompañamos hacia tu máximo potencial. En un entorno cálido y acogedor, nuestro <strong>equipo de profesionales</strong> trabaja para nutrir tu bienestar general. <strong>Únete</strong> y forma parte de nuestra visión de promover <strong>la armonía y el equilibrio en todos los ámbitos de la vida</strong>.</p>
        </div>
      </section>
    )
}