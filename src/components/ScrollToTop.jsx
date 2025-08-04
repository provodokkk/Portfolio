import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to top on route changes
 * This ensures users always see the top of the page when navigating
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes (override smooth scroll behavior)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;