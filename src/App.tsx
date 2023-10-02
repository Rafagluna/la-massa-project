import Header from './componentes/Header';
import Banner from './componentes/Banner';
import About from './componentes/About';
import Service from './componentes/Services';
import RestaurantUnit from './componentes/RestaurantUnits';
import Chefs from './componentes/Chefs';
import Depositions from './componentes/Depositions';
import PhotoContainer from './componentes/PhotosContainer';
import Form from './componentes/Form';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Service />
      <RestaurantUnit />
      <Chefs />
      <Depositions />
      <PhotoContainer />
      <Form />
      <Footer />
    </>
  );
}

export default App;
