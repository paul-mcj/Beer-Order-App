// pages
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import NotFound from "../pages/NotFound";

// react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";

// framer-motion
import { AnimatePresence } from "framer-motion";
// framer-motion/dist/framer-motion

const AnimatedRoutes = () => {
    // framer motion dependent
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/error" element={<Error />} />
                {/* default pathname if none of the above are accessible: */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
