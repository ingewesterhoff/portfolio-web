export function CarouselStyles() {
  return (
    <style>{`
      /* Slick Carousel Base Styles */
      .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        touch-action: pan-y;
      }
      .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
      .slick-list:focus {
        outline: none;
      }
      .slick-list.dragging {
        cursor: pointer;
      }
      .slick-slider .slick-track,
      .slick-slider .slick-list {
        transform: translate3d(0, 0, 0);
      }
      .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .slick-track:before,
      .slick-track:after {
        display: table;
        content: '';
      }
      .slick-track:after {
        clear: both;
      }
      .slick-loading .slick-track {
        visibility: hidden;
      }
      .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
      }
      .slick-slide img {
        display: block;
      }
      .slick-slide.slick-loading img {
        display: none;
      }
      .slick-slide.dragging img {
        pointer-events: none;
      }
      .slick-initialized .slick-slide {
        display: block;
      }
      .slick-loading .slick-slide {
        visibility: hidden;
      }
      .slick-slide > div {
        padding: 0;
      }
      
      /* Dots - Responsive */
      .slick-dots {
        position: absolute;
        bottom: -32px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
      }
      @media (min-width: 640px) {
        .slick-dots {
          bottom: -40px;
        }
      }
      .slick-dots li {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 4px;
        padding: 0;
        cursor: pointer;
      }
      @media (min-width: 640px) {
        .slick-dots li {
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
      }
      .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 16px;
        height: 16px;
        padding: 4px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
      }
      @media (min-width: 640px) {
        .slick-dots li button {
          width: 20px;
          height: 20px;
          padding: 5px;
        }
      }
      .slick-dots li button:before {
        font-size: 8px;
        line-height: 16px;
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        content: '•';
        text-align: center;
        color: #c4a9ff;
        opacity: 0.5;
      }
      @media (min-width: 640px) {
        .slick-dots li button:before {
          font-size: 10px;
          line-height: 20px;
          width: 20px;
          height: 20px;
        }
      }
      .slick-dots li.slick-active button:before {
        color: #c4a9ff;
        opacity: 1;
      }
      
      /* Arrows - Fully Responsive */
      .slick-prev,
      .slick-next {
        z-index: 10;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        border: none;
        outline: none;
        background: rgba(196, 169, 255, 0.2);
        border-radius: 50%;
        display: flex !important;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      @media (min-width: 640px) {
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
        }
      }
      @media (min-width: 768px) {
        .slick-prev,
        .slick-next {
          width: 48px;
          height: 48px;
        }
      }
      @media (min-width: 1024px) {
        .slick-prev,
        .slick-next {
          width: 56px;
          height: 56px;
        }
      }
      .slick-prev {
        left: 12px;
      }
      @media (min-width: 640px) {
        .slick-prev {
          left: 16px;
        }
      }
      @media (min-width: 1024px) {
        .slick-prev {
          left: 20px;
        }
      }
      .slick-next {
        right: 12px;
      }
      @media (min-width: 640px) {
        .slick-next {
          right: 16px;
        }
      }
      @media (min-width: 1024px) {
        .slick-next {
          right: 20px;
        }
      }
      .slick-prev:before,
      .slick-next:before {
        display: none;
      }
      .slick-prev:hover,
      .slick-next:hover {
        background: rgba(196, 169, 255, 0.4);
      }
      .slick-prev svg,
      .slick-next svg {
        color: #c4a9ff;
        width: 20px;
        height: 20px;
      }
      @media (min-width: 640px) {
        .slick-prev svg,
        .slick-next svg {
          width: 24px;
          height: 24px;
        }
      }
      @media (min-width: 768px) {
        .slick-prev svg,
        .slick-next svg {
          width: 28px;
          height: 28px;
        }
      }
      @media (min-width: 1024px) {
        .slick-prev svg,
        .slick-next svg {
          width: 32px;
          height: 32px;
        }
      }
      .slick-disabled {
        opacity: 0.5;
        cursor: default;
      }
      .slick-disabled:hover {
        background: rgba(196, 169, 255, 0.2);
      }
    `}</style>
  );
}