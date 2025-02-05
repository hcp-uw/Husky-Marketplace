import { useState } from "react";
import { Button } from "./components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import TopBar from "./components/ui/TopBar";

// Sample product data
const product = {
  title: "Star Wars T-Shirt: A New Hope Vintage",
  size: "Women's Medium",
  condition: "New",
  color: "Black",
  washable: "Yes",
  use: "2 years",
  info: "Size runs small",
  price: "$25",
  seller: {
    name: "Anakin Skywalker",
    role: "Jedi Knight, Senior @ UW",
    rating: 4,
  },
  images: [
    "/starwars-tshirt.png", // Replace with actual images
    "/starwars-tshirt-back.png",
    "/starwars-tshirt-closeup.png",
  ],
};

export default function ProductDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  {/* Use the TopBar Component */}

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col md:flex-row">
      <TopBar />

      {/* Title Section */}
      <div className="absolute top-20 left-0 w-full bg-purple-300 bg-opacity-50 p-4 flex items-center">
        <h2 className="text-xl font-bold italic">
          <span className="italic">Star Wars</span> T-Shirt:{" "}
          <span className="italic">A New Hope</span> Vintage
        </h2>
      </div>

      {/* Product Image Carousel */}
      <div className="relative w-full md:w-3/4 flex flex-col items-center justify-center p-6 mt-24">
        {/* Image Display */}
        <img
          src={product.images[currentIndex]}
          alt={`${product.title} - Image ${currentIndex + 1}`}
          className="w-3/4 md:w-1/2 rounded"
        />

        {/* Navigation Buttons Below the Image */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="absolute top-20 right-0 h-full bg-purple-300 bg-opacity-50 w-1/3 p-6 flex flex-col justify-center">
        <p className="text-lg font-semibold">Size - {product.size}</p>
        <p className="font-bold">Condition: {product.condition}</p>
        <p className="mt-2">Color - {product.color}</p>
        <p>Washable - {product.washable}</p>
        <p>Use - {product.use}</p>
        <p>Other info - {product.info}</p>
        <p className="text-2xl font-bold mt-4">{product.price}</p>

        {/* Seller Info */}
        <div className="mt-4 flex items-center">
          <div className="mr-3">
            <p className="font-semibold">{product.seller.name}</p>
            <p className="text-gray-500 text-sm">{product.seller.role}</p>
            <div className="flex">
              {[...Array(product.seller.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <Button className="mt-4 w-full bg-purple-600 text-white">
          Send a Message
        </Button>
      </div>
    </div>
  );
}
