import { useState, useEffect } from 'react';
import Slider from './Slider';
import Header from './Header';
import RivalsComponent from "./RivalsComponent";
import BackgroundCircles from './BackgroundCircles';
import './App.scss';

function App() {
  const [activeEvent, setActiveEvent] = useState(2);
  const [events, setEvents] = useState();
  useEffect(() => {
    fetch(`https://cnikita.github.io/data/events.json`)
      .then(response => response.json())
      .then(data => setEvents(data))
  }, []);
  return (
    <>
      <Header />
      {events ? <Slider events={events} setActiveEvent={setActiveEvent} /> : "Loader"}
      {events ? <RivalsComponent activeEvent={events[activeEvent]} /> : ""}
      <BackgroundCircles />
    </>
  );
}

export default App;
