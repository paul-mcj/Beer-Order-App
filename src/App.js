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
                    <Navbar />
                    <div className="grid h-screen grid-rows-auto overflow-scroll">
                        <div className="justify-self-center w-2/3">
                            <h1 className="rounded text-center font-bold text-2xl xsm:text-3xl bg-base-300 py-2 xsm:py-4 mt-2">
                                Beer Order App
                            </h1>
                        </div>
                        <main className="container mx-auto pb-10 h-full">
                            <AnimatedRoutes />
                        </main>
                        <Footer />
                    </div>
                </Router>
            </ErrorProvider>
        </CartProvider>
    );
};

export default App;
