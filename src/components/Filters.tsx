import { isDarkModeType } from "../App";

interface FiltersType extends isDarkModeType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({
  isDarkMode,
  search,
  setSearch,
}: FiltersType) {
  return (
    <form className="animate-pageLoad">
      <fieldset
        className={`m-4 flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1 text-sm drop-shadow-md ${
          isDarkMode ? "bg-DMElements text-white" : "bg-Elements text-LMText"
        }`}
      >
        <svg
          className={`mx-4 h-4 ${isDarkMode ? "fill-white" : "fill-LMText"}`}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490.4 490.4"
        >
          <g>
            <path
              d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
            />
          </g>
        </svg>
        <input
          type="text"
          placeholder="name, capital, region, languages or currecy"
          className="w-full bg-transparent p-2 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </fieldset>
    </form>
  );
}
