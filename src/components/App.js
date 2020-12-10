// react 
import React, {useEffect} from 'react';
// layout component
import Navbar from './layouts/Navbar';
import HomeBody from './pages/HomeBody';
import Footer from './layouts/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <React.Fragment>
        <main className="container">
          <Navbar />
            <HomeBody />
        </main>
          <Footer />
      
    </React.Fragment>
  )
}


export default Home;