import { Outlet } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import { useError } from '../contexts/ErrorContext.js';
import Modal from './Modal.js';
import { useIsLoading } from '../contexts/PendingContext.js';

function Pandamarket() {
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

export default Pandamarket;
