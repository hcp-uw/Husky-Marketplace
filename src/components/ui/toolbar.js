import { useNavigate } from "react-router-dom";
import Button from "./button"; // Adjust if needed
import { Menu, MenuButton, MenuItem } from "./menu"; // Adjust if needed
import { User } from "lucide-react";
import logo from "./logo_white.png";

const Toolbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center px-6 bg-purple-600 text-white shadow-md h-16">
            {/* Logo - Navigate to Home */}
            <div className="cursor-pointer" onClick={() => navigate("/SearchMain")}>
                <img src={logo} alt="Husky Marketplace Logo" className="h-16 w-auto" />
            </div>

            {/* Right Section: Sell Button + Profile Menu */}
            <div className="flex space-x-6 items-center">
                {/* Sell Button with Box Outline */}
                <Button
                    variant="outline"
                    onClick={() => navigate("/sell")}
                    className="border-2 border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
                >
                    Sell
                </Button>

                {/* Profile Menu with Circular Icon */}
                <Menu>
                    <MenuButton className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
                            <User className="w-6 h-6" />
                        </div>
                    </MenuButton>
                    <div className="bg-white shadow-lg rounded-md">
                        <MenuItem onClick={() => navigate("/profile")} className="hover:bg-gray-200 px-4 py-2">
                            Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account")} className="hover:bg-gray-200 px-4 py-2">
                            Account
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/")} className="hover:bg-red-100 px-4 py-2 text-red-600">
                            Logout
                        </MenuItem>
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default Toolbar;

