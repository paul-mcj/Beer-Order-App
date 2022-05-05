// components
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

// pages
import AnimatedRoutes from "./pages/AnimatedRoutes";

// react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// context
import { ErrorProvider } from "./context/error/ErrorContext";
import { CartProvider } from "./context/cart/CartContext";

const App = () => {
    return (
        <CartProvider>
            <ErrorProvider>
                <Router>
                    <div className="grid h-screen grid-rows-auto overflow-scroll">
                        <div className="px-20 row-start-1 row-span-1">
                            <Navbar />
                        </div>
                        <div className="row-start-2">
                            <main className="container mx-auto px-4 py-10">
                                <AnimatedRoutes />
                            </main>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </ErrorProvider>
        </CartProvider>
    );
};

export default App;
