import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section></section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
