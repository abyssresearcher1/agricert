import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Documents from "./components/Documents/Documents";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Partners from "./components/Partners/Partners";
import Preview from "./components/Preview/Preview";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-back-banner">
        <Preview />
      </div>
      <About />
      <Services />
      <Documents />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
