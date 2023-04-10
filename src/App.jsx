import { Hero, Navbar, Upload } from "./components";

function App() {
  return (
    <div className="relative z-0 bg-[#D7FCD4]">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <div className="relative z-0">
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default App;
