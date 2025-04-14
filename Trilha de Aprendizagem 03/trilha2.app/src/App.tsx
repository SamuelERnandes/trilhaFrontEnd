import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Animal from './pages/Animal';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import BookingSuccess from './pages/BookingSuccess';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </>
  );
}

export default App;
