import './Slider.scss';
import { pageData } from '../../pageData';
import SliderCard from './SliderCard';

function Slider() {
  const items = pageData.sliderData;          // исходный массив карточек
  const slides = [...items, ...items];  
  console.log(slides)     // дублируем его для бесконечного скролла
  return (
    <div className="slider">
      <div className="slider-track">
        {slides.map((item, idx) =>
          <SliderCard key={idx} item={item} />
        )}
      </div>
    </div>
  );
}
export default Slider;
