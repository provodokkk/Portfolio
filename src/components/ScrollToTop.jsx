import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to top on route changes
 * This ensures users always see the top of the page when navigating
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (like #contact) or sessionStorage flag, don't scroll to top
    // Let the Navbar component handle the scroll
    if (hash || sessionStorage.getItem("scrollToContact") === "true") {
      return;
    }
    
    // Scroll to top smoothly when route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;