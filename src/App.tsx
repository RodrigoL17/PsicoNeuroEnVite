import Header from "./components/header.tsx";
import { MainSection } from "./components/main-section.tsx";
import { Reviews } from "./components/reviews.tsx";

function App() {
  return (
    <>
      <Header />
      <MainSection/>
      <section className="h-screen bg-red-500">Profesionales</section>
      <section className="h-screen bg-blue-500">Servicios</section>
      <section className="h-screen bg-green-500">reviews
      <Reviews/></section>
      <section className="h-screen bg-yellow-500">precios</section>
      <section className="h-screen bg-pink-500">contacto</section>
    </>
  );
}

export default App;
