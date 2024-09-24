import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import PageContainer from '@/layouts/PageContainer';
import './App.css';

function App() {
  return (
    <>
      <Navbar title={"Matias's Portfolio"} routes={['Home', 'Contact']} />
      <PageContainer />
      <Footer />
    </>
  );
}

export default App;
