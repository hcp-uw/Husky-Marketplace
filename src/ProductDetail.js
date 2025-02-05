import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Tag,
  CheckCircle,
  Palette,
  Droplet,
  Clock,
  Info,
  DollarSign
} from "lucide-react";
import TopBar from "./components/ui/TopBar";
import logo from './logo1.png';


// Sample product data
const product = {
  title: "Star Wars T-Shirt: A New Hope Vintage",
  size: "Women's Medium",
  condition: "New",
  color: "Black",
  washable: "Yes",
  use: "2 years",
  info: "Size runs small",
  price: "25",
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
      <div className="absolute top-20 left-0 w-full bg-purple-300 bg-opacity-50 p-4 flex items-center h-40 justify-between">
        <h2 className="text-3xl font-bold italic">
          <span className="italic">Star Wars</span> T-Shirt:{" "}
          <span className="italic">A New Hope</span> Vintage
        </h2>
        <img
            src={logo}
            alt="Logo"
            className="h-40  top-0 right-0 z-50"
          />
      </div>

      {/* Product Image Carousel */}
      <div className="relative w-full md:w-3/4 flex flex-col items-center justify-center p-6 mt-24">
        <img
          src={product.images[currentIndex]}
          alt={`${product.title} - Image ${currentIndex + 1}`}
          className="w-3/4 md:w-1/2 rounded"
        />

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
        {/* Category Labels with Icons */}
        {[
          { label: "Size", value: product.size, Icon: Tag },
          { label: "Condition", value: product.condition, Icon: CheckCircle },
          { label: "Color", value: product.color, Icon: Palette },
          { label: "Washable", value: product.washable, Icon: Droplet },
          { label: "Use", value: product.use, Icon: Clock },
          { label: "Other info", value: product.info, Icon: Info },
        ].map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <item.Icon className="h-6 w-6 text-purple-700 mr-2" />
            <p className="text-lg font-semibold">{item.label} - {item.value}</p>
          </div>
        ))}

        {/* Price Section */}
        <div className="flex items-center mt-4">
          <DollarSign className="h-6 w-6 text-purple-700 mr-2" />
          <p className="text-2xl font-bold">{product.price}</p>
        </div>

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
