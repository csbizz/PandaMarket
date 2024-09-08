import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useError } from '../contexts/ErrorContext';
import Modal from './Modal';
import { useIsLoading } from '../contexts/PendingContext';

function App() {
  const isLoading = useIsLoading();
  const err = useError();

  return (
    <>
      <Header />
      <Outlet />
      {isLoading && <Modal message="로딩 중입니다." noButton />}
      {err && <Modal message={err.message} />}
      <Footer />
    </>
  );
}

export default App;
