import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import Checkbox from "./components/ui/checkbox";
import Toolbar from "./components/ui/toolbar";
import { Search } from "lucide-react"; // For the search icon
import noResultsImg from "./components/ui/no-results-found.png"; // Placeholder image for no results
import logo from './logo1.png';
import { Menu, MenuItem, MenuButton } from "./components/ui/menu";
import { User } from "lucide-react";

const categories = ["Tickets", "Clothing", "Home & Kitchen", "Subleasing", "Misc."];
const priceRanges = ["Under $25", "$25 - $50", "$50 - $100", "$100 - $500", "Over $500"];

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filterProducts = () => {
            let filtered = products;
            if (selectedCategories.length > 0) {
                filtered = filtered.filter(product => selectedCategories.includes(product.category));
            }
            if (selectedPriceRanges.length > 0) {
                filtered = filtered.filter(product => {
                    const price = product.price;
                    return selectedPriceRanges.some(range => {
                        if (range === "Under $25") return price < 25;
                        if (range === "$25 - $50") return price >= 25 && price < 50;
                        if (range === "$50 - $100") return price >= 50 && price < 100;
                        if (range === "$100 - $500") return price >= 100 && price < 500;
                        if (range === "Over $500") return price >= 500;
                        return false;
                    });
                });
            }
            setFilteredProducts(filtered);
        };
        filterProducts();
    }, [products, selectedCategories, selectedPriceRanges]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Toolbar />

            {/* Search Section */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center mt-6">
                <div className="relative w-1/2">
                    <Input
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border rounded-lg text-lg"
                    />
                    <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <Search size={18} /> Search
                    </Button>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex mt-10 px-10">
                {/* Filters Sidebar */}
                <div className="w-1/4 p-6 bg-purple-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Filters</h2>
                    <h3 className="font-semibold mt-4">Category</h3>
                    {categories.map((category) => (
                        <div key={category} className="flex items-center mt-2">
                            <Checkbox checked={selectedCategories.includes(category)} onChange={() => setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category])}>
                                {category}
                            </Checkbox>
                        </div>
                    ))}
                    <h3 className="font-semibold mt-6">Price Range</h3>
                    {priceRanges.map((range) => (
                        <div key={range} className="flex items-center mt-2">
                            <Checkbox checked={selectedPriceRanges.includes(range)} onChange={() => setSelectedPriceRanges(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range])}>
                                {range}
                            </Checkbox>
                        </div>
                    ))}
                </div>

                {/* Search Results Section */}
                <div className="w-3/4 flex flex-col items-center">
                    {/* Animated Title */}
                    <motion.h2
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-extrabold mb-6 text-purple-700"
                    >
                        Search Results
                    </motion.h2>

                    {/* Search Results */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {filteredProducts.map((product) => (
                                <Card key={product.id} className="p-4 shadow-lg hover:shadow-xl transition rounded-xl">
                                    <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                                    <CardContent className="text-center">
                                        <h3 className="text-lg font-bold">{product.name}</h3>
                                        <p className="text-gray-600">${product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center mt-10">
                            <img src={noResultsImg} alt="No results found" className="w-64 h-64 opacity-70" />
                            <h3 className="text-2xl font-semibold text-gray-600 mt-4">No results found.</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
