import { useEffect, useState } from "react";
// import { getReviews } from "../utils/getReviews"
import { ReviewCard } from "./review-card";
import { Carousel, IconButton } from "@material-tailwind/react";

export const Reviews = () => {
  const InitialState = [
    {
      author_name: "Florencia Totera",
      author_url:
        "https://www.google.com/maps/contrib/105654401282199879119/reviews",
      language: "es",
      original_language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/AAcHTtepGcQXtI74tMbrl5TCSADVdc3_A1uxdjw7EDA4tXt1=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "Hace 7 meses",
      text: "Una de las mejores decisiones de mi 2022,  fue el abrirme nuevamente a un espacio terapéutico con todo lo que eso conlleva. Y desde el momento 1, resone y me sentí escuchada, motivada y después de MUCHO, tiempo pude dar pasos firmes que me llevan cada día a descubrir mi esencia y a sanar, no solo desde el enfoque psicológico, sino desde las herramientas que con muchísimo amor, hoy elijo y me brindo como prioridad.\nBelu, sos mágica y plantaste una semilla en mí que hizo ver con otros ojos y qué me alienta a ir tras mi sueño. Y esto último,  para mí historial no sabes cuánto significa...\nValoro tu escucha y tu disposición amorosa de siempre. Noto un montón los cambios en las pocas sesiones que llevamos y eso habla de que sin dudas estoy en el lugar correcto. 💚 Gracias infinitas",
      time: 1673920107,
      translated: false,
    },
    {
      author_name: "San",
      author_url:
        "https://www.google.com/maps/contrib/106871269229426378764/reviews",
      language: "es",
      original_language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/AAcHTtc01ljxRQmViU0ziSeT6cmQet8A02YMYoZTm247_Jt0=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "Hace 7 meses",
      text: "Me encantan las clases, son super lindas. La profe una genia es super responsable siempre atenta con todos los alumnos!!\n\nCon respecto a  Reiki y al psicoanalisis con Alejandro hace bastante tiempo que estoy concurriendo . Quiero destacar  la responsabilidad, la confianza, el compromiso en todo lo que hace.\nGracias a los dos por acompañrme en este camino de la vida🙌🌟🙌⭐🙌",
      time: 1673973702,
      translated: false,
    },
    {
      author_name: "Fernando Di Chiara",
      author_url:
        "https://www.google.com/maps/contrib/115741579867057906052/reviews",
      language: "es",
      original_language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMT4mfICEiLDeLTSHpNWQG4jNm8x0I0BqmeptD1Z_QV_Cw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "Hace 7 meses",
      text: "Alejandro logra en cada encuentro una armonia única y, fundamentalmente, disfrutar de la nueva energía con la que salgo de cada sesión. Quizá la única persona que logra en una misma terapia reencontrar los ejes espirituales, psicológico y energéticos que tanto desgastamos a diario!!! Gracias por estar siempre!",
      time: 1673918828,
      translated: false,
    },
    {
      author_name: "Camila Fabbri",
      author_url:
        "https://www.google.com/maps/contrib/113985463731992239448/reviews",
      language: "es",
      original_language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMQAZ9W8DwejxGg-Paiqmuk6e6jVGBhcSqmE8l_UbFervhI=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "Hace 7 meses",
      text: "Un hermoso lugar! Lleno de buena energía. Yo hago yoga y puedo afirmar que fue la mejor decisión que tomé. Cada día aprendo más sobre mí y mí cuerpo. Súper recomendado para escuchar a tu cuerpo y para relajar. Gracias!!",
      time: 1673914766,
      translated: false,
    },
    {
      author_name: "Griselda Lorena D'Innocenzo",
      author_url:
        "https://www.google.com/maps/contrib/108557815919611060638/reviews",
      language: "es",
      original_language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/AD_cMMTBRv40NMNz2mrJIXNRVNWlVVEbRDc5inG6gk3k5aAJ6QT_=s128-c0x00000000-cc-rp-mo",
      rating: 4,
      relative_time_description: "Hace 7 meses",
      text: "Hace poquito tiempo que comencé terapia y reiki con Alejandro. Me hace sentir muy cómoda en las sesiones y de a poco voy tomando mas confianza. Gracias por estar!!",
      time: 1674571710,
      translated: false,
    },
  ];
  const [reviews, setReviews] = useState(InitialState);

  useEffect(() => {
    //    getReviews().then(reviews => setReviews(reviews))
  }, []);

  return (
    <>
      <Carousel
        className="rounded-xl align-middle"
        navigation={() => ""}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.author_name} review={review} />
        ))}
      </Carousel>
    </>
  );
};
