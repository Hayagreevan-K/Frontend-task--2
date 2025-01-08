export default function handler(req, res) {
  const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: 120.99,
      available: true,
      variants: ["Black", "White"],
      images: [
        "/images/headphone1.jpg",
        "/images/headphone2.jpg",
      ],
      reviews: [
        { user: "Alice", rating: 5, comment: "Amazing product!" },
        { user: "Bob", rating: 4, comment: "Good value for money." },
      ],
    },
  ];
  res.status(200).json(products);
}
