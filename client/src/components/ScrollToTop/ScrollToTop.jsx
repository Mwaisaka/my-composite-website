// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";	

// function ScrollToTop() {
//     const location = useLocation();
    
//     useEffect(() => {
//         console.log('Pathname changed:', location.pathname);
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     return null;
// }

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        console.log('Pathname changed:', location.pathname);
        // Delay scrolling to top by a slight amount to ensure the DOM is fully loaded
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [location]);

    return null;
}

export default ScrollToTop;
