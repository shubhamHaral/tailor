
import './App.css';
import Advantage from './Component/Advantages/Advantage';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Text from './Component/Text/text';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Testimoni from './Component/TestiMoni/Testimoni';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Text />
      <Advantage/>
      <Services/>
      <Footer/>
      <Testimoni/>

    </div>
  );
}

export default App;
