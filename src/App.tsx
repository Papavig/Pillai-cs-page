import Aim from "./Aim";
import Curriculum from "./Curriculum";
import Footer from "./Footer";
import Overview from "./Overview";
import PillaiCollegeHeader from "./Header";
import TestimonialsComponent from "./Testimonials";
import OverlayButtons from "./Overlay";

function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <PillaiCollegeHeader />
        <main className="grow">
          <Overview />
          <Aim />
          {/* <Social /> */}
          <Curriculum />
          <TestimonialsComponent />
          <OverlayButtons />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
