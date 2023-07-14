import './App.css';
import map from './img/Map.jpg';
import headerImg from './img/Header_Image.png';
import knowMore1 from './img/Know_more_Image_1.jpg';
import knowMore2 from './img/Know_more_Image_2.jpg';
import profileImg from './img/profileImg.png';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import FoodCard from './components/FoodCard/FoodCard';
import BlogCard from './components/BlogCard/BlogCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div class='wrapper'>
          <Header />
          <main>
            <Routes>
              <Route path='/HomePage' element={<HomePage />} />
              <Route path='/AboutUs' element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
