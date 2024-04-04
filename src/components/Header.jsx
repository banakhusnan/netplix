import { useEffect, useState } from "react";

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 50; // Ubah 50 ke nilai yang sesuai dengan kebutuhan Anda
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="header"
      className={`${isScrolled ? "bg-black" : ""} fixed w-full`}
    >
      <div className="px-14 mx-auto py-5 flex justify-between items-center">
        {children}
      </div>
    </section>
  );
};

const Brand = ({ children }) => (
  <h1 className="text-4xl font-semibold text-red-700">{children}</h1>
);

const SearchBar = ({ children }) => {
  return <div className="flex justify-end gap-2 w-96">{children}</div>;
};

Header.Brand = Brand;
Header.SearchBar = SearchBar;

export default Header;
