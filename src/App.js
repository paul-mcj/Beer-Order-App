// Components
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Cart from "./components/layout/Cart";

// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="grid h-screen grid-rows-4">
                    <Navbar />
                    <main className="container mx-auto px-4 pb-10 row-span-2"></main>
                    <Routes>
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
