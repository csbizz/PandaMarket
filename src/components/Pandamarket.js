import '../css/import.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ItemsPage from '../pages/ItemsPage';
import LandingPage from '../pages/LandingPage';
import GlobalContextProvider from './GlobalContextProvider';

function Pandamarket() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="items" element={<ItemsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default Pandamarket;
