import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Experiences from './components/Experiences';
import Packages from './components/Packages';
import PackageDetails from './components/PackageDetails';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Experiences />
      <Packages onExplore={setSelectedPackage} />
      <PackageDetails selectedPackage={selectedPackage} onBack={() =>setSelectedPackage(null)}/>  
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;