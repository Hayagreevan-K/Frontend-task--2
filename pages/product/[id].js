import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductDetails from '../../components/ProductDetails';
import ProductImageCarousel from '../../components/ProductImageCarousel';
import ProductReviews from '../../components/ProductReviews';

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products`);
        const product = data.find((item) => item.id === productId);
        setProduct(product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <ProductImageCarousel images={product.images} />
      <ProductDetails product={product} />
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export async function getServerSideProps(context) {
  return { props: { productId: context.params.id } };
}

export default ProductPage;
