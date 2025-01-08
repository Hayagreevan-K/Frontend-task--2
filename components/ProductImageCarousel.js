import { useState } from 'react';

const ProductImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="image-carousel">
      <img src={images[currentImage]} alt="Product" />
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setCurrentImage(index)}
            style={{
              border: index === currentImage ? "2px solid blue" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
