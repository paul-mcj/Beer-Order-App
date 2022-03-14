// Components
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";

// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="grid h-screen grid-rows-6">
                    <div className="px-20 row-span-1">
                        <Navbar />
                    </div>
                    <main className="container mx-auto px-4 py-10 row-span-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
