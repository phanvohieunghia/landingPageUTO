import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const sliderData = [{
    image: 1
  },
  {
    image: 2
  },
  {
    image: 3
  }
]

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  
  return (
    <div className="slider">
      <FaArrowLeft className="slider__left-arrow" onClick={prevSlide} />
      <FaArrowRight className="slider__right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slider__slide slider__active' : 'slider__slide'} key={index}>
          { current === index && (
            <img key={index} src={require('../assets/img/banner' + slide.image + '.jpg')} alt="banner" className="slider__image" />
          )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider