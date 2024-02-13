const Navbar = () => {
  return (
    <div className="pd-5 bg-[#e3e1e1ce] min-w-1024px max-w-[100%] mx-auto sticky top-0 z-20 backdrop-filter backdrop-blur-sm">
      <ul className="flex justify-between max-w-[980px] mx-auto items-center">
        <li>
          <a href="#">
            <Image
              style={{ width: "135px", height: "44px" }}
              src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg"
            ></Image>
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#sidcover">Discover</a>
        </li>
        <li>
          <a href="#design">Design</a>
        </li>
        <li>
          <a href="#develop">Develop</a>
        </li>
        <li>
          <a href="#support">Suppot</a>
        </li>
        <li>
          <a href="#account">Account</a>
        </li>
        <li>
          <a href="#search">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='44' viewBox='0 0 16 44'%3E%3Cpath d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z' fill='%23666666'/%3E%3C/svg%3E"
              alt="seach Icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
