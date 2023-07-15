import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import MenuPage from './components/MenuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div class='wrapper'>
          <Header />
          <main>
            <Routes>
              <Route path='/HomePage' element={<HomePage />} />
              <Route path='/MenuPage' element={<MenuPage />} />
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
