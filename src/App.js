import './App.css';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
