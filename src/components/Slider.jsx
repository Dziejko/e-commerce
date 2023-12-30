import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Price } from "./Pricee";

export function Slider({ images }) {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((item) => (
          <div key={item.id}>
            <div className="div-slide-container">
              <div className="slide-content-container">
                <p className="item-name">{item.name}</p>
                <p className="description">{item.description.slice(0, 150)}</p>
                <Price item={item} />
              </div>
              <img className="slider-img" src={item.image} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
