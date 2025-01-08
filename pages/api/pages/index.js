import Link from "next/link";

export default function Home() {
  const products = [
    { id: "1", name: "Wireless Headphones", price: 120.99 },
  ];

  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
