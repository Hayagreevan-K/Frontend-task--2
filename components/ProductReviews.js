const ProductReviews = ({ reviews }) => (
  <div className="reviews">
    <h3>Customer Reviews</h3>
    {reviews.map((review, index) => (
      <div key={index} className="review">
        <strong>{review.user}</strong> ({review.rating}/5): {review.comment}
      </div>
    ))}
  </div>
);

export default ProductReviews;
