// src/hooks/useScrollTo.js
const useScrollTo = () => {
  const scrollTo = (e, path) => {
    if (path && path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return scrollTo;
};

export default useScrollTo;