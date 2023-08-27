import { MainSection } from "../components/main-section.tsx";
import { ReviewsSection } from "../components/reviews-section.tsx";
import { ServiceSection } from "../components/services-section.tsx";

export const Home = () => {
  return (
    <>
      <MainSection />
      <section className="h-screen bg-gradient-to-b from-[#e5fbf6] to-[#fef7ff] border-b solid border-black">
        Profesionales
      </section>
      <ServiceSection />
      <ReviewsSection />
      <section className="h-screen bg-gradient-to-b from-[#fef7ff] to-[#e5fbf6] border-b solid border-black">
        precios
      </section>
      <section className="h-screen bg-gradient-to-b from-[#e5fbf6] to-[#fef7ff] border-b solid border-black">
        contacto
      </section>
    </>
  );
};
