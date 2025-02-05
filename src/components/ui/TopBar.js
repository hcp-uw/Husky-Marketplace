import { Search, Home, Clock, Heart } from "lucide-react";

export default function TopBar({ title }) {
  return (
    <div className="fixed top-0 left-0 w-full bg-purple-500 bg-opacity-50 p-2 h-20 flex justify-between items-center shadow-md">

      {/* Left Icons */}
      <div className="flex items-center space-x-4 px-4">
        <Search className="w-6 h-6 text-black cursor-pointer" />
        <Home className="w-6 h-6 text-black cursor-pointer" />
      </div>

      {/* Center (Empty for balance) */}
      <div className="flex-grow"></div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 px-4">
        {/* Account Button */}
        <button className="flex items-center space-x-2 border border-black rounded-lg px-3 py-1 bg-white">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black font-semibold">My Account</span>
        </button>

        {/* Additional Icons */}
        <Clock className="w-6 h-6 text-purple-700 cursor-pointer" />

        {/* Wishlist with Notification Badge */}
        <div className="relative">
          <Heart className="w-6 h-6 text-purple-700 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">5</span>
        </div>
      </div>
    </div>
  );
}

