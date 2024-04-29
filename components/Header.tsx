import AppleIcon from "./icons/AppleIcon";
import BagIcon from "./icons/BagIcon";
import SearchIcon from "./icons/SearchIcon";
import { headerData } from "@/constants/Header";

const Header = () => {
  return (
    <header className="h-12 bg-gray-100 px-4 w-screen fixed">
      <div className="flex justify-center items-center lg:w-auto">
        <div className="flex justify-between items-center w-full lg:w-auto lg:space-x-12">
          <AppleIcon />
          <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8">
            {headerData.map((item, index) => (
              <a
                key={index}
                className="text-xs text-gray-700 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-8">
            <SearchIcon />
            <BagIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
