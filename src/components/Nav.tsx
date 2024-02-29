import { Link } from "react-router-dom";
import { isDarkModeType } from "../App";

interface NavProps extends isDarkModeType {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isDarkMode, setIsDarkMode }: NavProps) {
  return (
    <nav
      className={`z-10 flex w-full items-center justify-between px-4 py-2 drop-shadow-lg ${
        isDarkMode ? "bg-DMElements text-white" : "bg-white text-LMText"
      }`}
    >
      <Link to={"/"}>
        <h1 className="cursor-pointer font-semibold hover:opacity-70">
          Where in the world?
        </h1>
      </Link>

      <div>
        <Link
          to={
            "https://www.frontendmentor.io/solutions/rest-countries-with-react-typescript-tailwind-uFgZmR1Tgp"
          }
          target="_blank"
        >
          {`Challenge`}
        </Link>
        {` by Frontend Mentor. `}
        <Link
          to={"https://github.com/seancyrill/rest-countries"}
        >{`Coded`}</Link>
        {` by `}
        <Link to={"/"}>{`Sean.`}</Link>
      </div>

      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="flex items-center gap-1 py-4 text-sm hover:opacity-70"
      >
        <svg
          className="h-3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={isDarkMode ? "fill-white" : "fill-LMText"}
            d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          />
        </svg>
        Dark mode
      </button>
    </nav>
  );
}
