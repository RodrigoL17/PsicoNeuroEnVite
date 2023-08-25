import { ServiceCard } from "./service-card";
import { SERVICIOS } from "../utils/const";
export const ServiceSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fef7ff] to-[#e5fbf6] border-b solid border-black px-5 py-8 flex flex-col justify-center items-center">
      <h2 className="text-7xl font-primary font-extrabold py-10">
        ¿Como podemos ayudarte?
      </h2>
      <div className="grid grid-cols-3 grid-row w-full place-items-center p-10 gap-10">
        {SERVICIOS.map((serv) => (
          <ServiceCard
            key={serv.title}
            title={serv.title}
            img_src={serv.img_src}
            description={serv.description}
            duration={serv.duration}
            mode={serv.mode}
            max_duration={serv.max_duration}
          />
        ))}
      </div>
    </section>
  );
};
