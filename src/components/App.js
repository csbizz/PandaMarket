import '../css/import.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemsPage from '../pages/ItemsPage.js';
import LandingPage from '../pages/LandingPage.js';
import GlobalContextProvider from './GlobalContextProvider.js';
import Pandamarket from './Pandamarket.js';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pandamarket />}>
            <Route index element={<LandingPage />} />
            <Route path="items" element={<ItemsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
