import "./style.scss"
import { useSwiper } from 'swiper/react';

export default function Hexagon({ event }) {
  const { id, place, day, month, time } = event
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideTo(id)} className="hexagon">
      <div className="place">{place}</div>
      <div className="date">
        <div className="date__day">{day}</div>
        <div className="date__month">{month}</div>
      </div>
      <div className="time">{time}</div>
      <div className="button-buy">Купить билет</div>
    </div>
  )
}