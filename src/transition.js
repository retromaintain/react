import { motion } from "framer-motion";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
                style={{ transformOrigin: "top right" }}
            />
        </>
    );
};

export default transition;
