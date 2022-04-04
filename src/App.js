// Components
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context
import { ErrorProvider } from "./context/error/ErrorContext";
import { CartProvider } from "./context/cart/CartContext";

const App = () => {
    return (
        <CartProvider>
            <ErrorProvider>
                <BrowserRouter>
                    <div className="grid h-screen grid-rows-auto">
                        <div className="px-20 row-start-1 row-span-1">
                            <Navbar />
                        </div>
                        <div className="row-start-2">
                            <main className="container mx-auto px-4 py-10">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/error" element={<Error />} />
                                    {/* if pathname is to anything other than the pages specified above, go to: */}
                                    <Route path="/*" element={<NotFound />} />
                                </Routes>
                            </main>
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </ErrorProvider>
        </CartProvider>
    );
};

export default App;
