import { useContext, useState, useEffect } from "react";
import { ViewportContext } from "../contexts/viewport-context";

import { ServiceCard } from "./service-card";
import { SERVICIOS } from "../utils/const";
export const ServiceSection = () => {
  const [slice, setSlice] = useState<number>(0);
  const { width } = useContext(ViewportContext);

  console.log("slice", slice);
  useEffect(() => {
    if (width <= 640) {
      setSlice(3);
    }
    if (width > 640 && width < 1200) {
      setSlice(4);
    }
    if (width >= 1200) {
      setSlice(SERVICIOS.length);
    }
  }, []);

  const handleSeeMore = (slice: number, length: number) => {
    if (length - slice >= 2) {
      console.log("+2");
      setSlice(slice + 2);
      return;
    }
    if (length - slice >= 1) {
      console.log("+1");
      setSlice(slice + 1);
      return;
    }
  };

  const handleSeeLess = (width: number, slice: number) => {
    if (width <= 640) {
      slice > 4 && setSlice(slice - 2);
      slice === 4 && setSlice(slice - 1);
    }
    if (width < 1200 && width > 640) {
      slice > 5 && setSlice(slice - 2);
      slice === 5 && setSlice(slice - 1);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fef7ff] to-[#e5fbf6] border-b solid border-black px-5 py-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-primary font-extrabold py-10">
        ¿Como podemos ayudarte?
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 w-full sm:place-items-center p-10 gap-10">
        {SERVICIOS.slice(0, slice).map((serv) => (
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
          {width < 1200 && slice < SERVICIOS.length ? (
            <button
              onClick={() => {
                handleSeeMore(slice, SERVICIOS.length);
              }}
            >
              Ver mas
            </button>
          ) : null}
          {width <= 640 && slice > 3 ? (
            <button onClick={() => handleSeeLess(width, slice)}>
              Ver menos
            </button>
          ) : null}
          {width > 640 && width < 1200 && slice > 4 ? (
            <button onClick={() => handleSeeLess(width, slice)}>
              Ver menos
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};
