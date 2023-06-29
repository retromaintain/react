import { motion } from "framer-motion";

const transition = (OgComponent ) => {
    return () => (
        <>
            <OgComponent />
            <motion.div 
                className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.8}}

            
            />
            <motion.div 
                className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.8}}
                
            
            />
        </>
    )
}

export default transition;