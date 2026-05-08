import { useState, useEffect } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;