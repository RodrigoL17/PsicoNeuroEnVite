import { useContext, useState, useEffect } from "react";
import { ViewportContext } from "../contexts/viewport-context";

import { Servicio } from "../types";

import { ServiceCard } from "./service-card";
import { SERVICIOS } from "../utils/const";
export const ServiceSection = () => {
  // const [slice, setSlice] = useState(SERVICIOS.length);
  // const { width } = useContext(ViewportContext);


  // const handleSeeMore = (slice: number, length: number) => {
  //   if (length - slice > 1) {
  //     console.log("mas", length - slice);
  //     setSlice(slice + 2);
  //   } else {
  //     setSlice(slice + 1);
  //   }
  // };

  // const handleSeeLess = (slice: number, length: number) => {
  //   if (length - slice > 1) {
  //     console.log("menos", length - slice);
      
  //     setSlice(slice - 2);
  //   } else {
  //     setSlice(slice - 1);
  //   }
  // };

  // useEffect(() => {
  //   if (width <= 640) {
  //     setSlice(3);
  //   }
  //   if (width > 640 && width < 1200) {
  //     setSlice(4);
  //   }
  //   if (width > 1200) {
  //     setSlice(SERVICIOS.length);
  //   }
  // }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fef7ff] to-[#e5fbf6] border-b solid border-black px-5 py-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-primary font-extrabold py-10">
        ¿Como podemos ayudarte?
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 w-full sm:place-items-center p-10 gap-10">
        {SERVICIOS.map((serv) => (
          <ServiceCard
            key={serv.title}
            title={serv.title}
            img_src={serv.img_src}
            description={serv.description}
            duration={serv.duration}
            mode={serv.mode}
            max_duration={serv.max_duration}
            url_path={serv.url_path}
          />
        ))}
        <div>
          {/* {width < 1200 && slice < SERVICIOS.length ? (
            <button onClick={() => handleSeeMore(slice, SERVICIOS.length)}>
              {SERVICIOS.length - slice}
              Ver mas
            </button>
          ) : null}
          {width < 1200 && slice <= SERVICIOS.length ? (
            <button onClick={() => handleSeeLess(slice, SERVICIOS.length)}>
              {SERVICIOS.length - slice}
              Ver menos
            </button>
          ) : null} */}
        </div>
      </div>
    </section>
  );
};
