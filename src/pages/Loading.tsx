import { isDarkModeType } from "../App";

export default function Loading({ isDarkMode }: isDarkModeType) {
  return (
    <div className="grid h-full place-content-center">
      <img src="/loading.gif" className={isDarkMode ? "invert" : ""} />
      Loading...
    </div>
  );
}
