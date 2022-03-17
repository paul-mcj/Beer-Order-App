// Components
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="grid h-screen grid-rows-6">
                    {/* grid-rows-auto */}
                    <div className="px-20 row-span-1">
                        <Navbar />
                    </div>
                    <div className="row-span-4">
                        <main className="container mx-auto px-4 py-10 grid-rows-auto">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/error" element={<Error />} />
                            </Routes>
                        </main>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
