import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import './styles/App.css';
import './styles/var.scss';
import { BookingProvider } from './context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <BookingProvider>
          <AppRouter />
        </BookingProvider>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
