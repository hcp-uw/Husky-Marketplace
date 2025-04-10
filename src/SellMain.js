import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";

const categories = ["Tickets", "Clothing", "Home & Kitchen", "Subleasing", "Misc."];
const locations = ["Seattle", "Bellevue", "Redmond", "Tacoma", "Lynnwood"];

export default function SellPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [location, setLocation] = useState("");
    const [specialInfo, setSpecialInfo] = useState("");
    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);
    };

    const handlePreview = () => {
        setPreview({ title, description, price, selectedCategory, location, specialInfo, images });
    };

    const handleSubmit = () => {
        const newItem = { title, description, price, category: selectedCategory, location, specialInfo, images };
        console.log("Item Listed:", newItem);
        navigate("/SearchMain");
    };

    return (
        <div className="min-h-screen bg-purple-100 flex justify-center py-10">
            <Card className="w-2/3 p-10 bg-white shadow-xl rounded-lg border-4 border-purple-600">
                <CardContent>
                    <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Sell an Item</h2>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Title</label>
                        <Input placeholder="Item Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-4 border rounded-lg text-lg" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Description</label>
                        <textarea placeholder="Describe your item..." value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 border rounded-lg h-32 text-lg" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Price ($)</label>
                        <Input type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-4 border rounded-lg text-lg" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Category</label>
                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-4 border rounded-lg text-lg">
                            <option value="" disabled>Select a category</option>
                            {categories.map(category => <option key={category} value={category}>{category}</option>)}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Location</label>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-4 border rounded-lg text-lg">
                            <option value="" disabled>Select a location</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Special Information</label>
                        <textarea placeholder="Any additional details..." value={specialInfo} onChange={(e) => setSpecialInfo(e.target.value)} className="w-full p-4 border rounded-lg h-20 text-lg" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-2xl font-semibold mb-2">Upload Images (Optional)</label>
                        <input type="file" multiple onChange={handleImageUpload} className="w-full border p-4 rounded-lg" />
                        <div className="mt-4 flex space-x-4">
                            {images.map((image, index) => (
                                <img key={index} src={URL.createObjectURL(image)} alt="Uploaded" className="h-24 w-24 object-cover rounded border-2 border-purple-500" />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6 mt-8">
                        <Button onClick={handlePreview} className="bg-purple-500 text-white py-4 px-8 text-2xl font-semibold rounded-lg shadow-lg">Preview</Button>
                        <Button onClick={handleSubmit} className="bg-purple-700 text-white py-4 px-8 text-2xl font-semibold rounded-lg shadow-lg">List Item</Button>
                    </div>

                    {preview && (
                        <div className="mt-10 p-6 bg-purple-200 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-purple-800">Preview</h3>
                            <p className="text-lg mt-2"><strong>Title:</strong> {preview.title}</p>
                            <p className="text-lg"><strong>Description:</strong> {preview.description}</p>
                            <p className="text-lg"><strong>Price:</strong> ${preview.price}</p>
                            <p className="text-lg"><strong>Category:</strong> {preview.selectedCategory}</p>
                            <p className="text-lg"><strong>Location:</strong> {preview.location}</p>
                            <p className="text-lg"><strong>Special Information:</strong> {preview.specialInfo}</p>
                            <div className="mt-4 flex space-x-4">
                                {preview.images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt="Preview" className="h-24 w-24 object-cover rounded border-2 border-purple-500" />
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}