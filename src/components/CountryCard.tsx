import { Link } from "react-router-dom";
import { CountryDataCompleteType, isDarkModeType } from "../App";
import { formatNumber } from "../utilities/NumberFormater";

type CountryCardProps = CountryDataCompleteType & isDarkModeType;

export default function CountryCard({
  flags,
  name,
  population,
  region,
  capital,
  id,
  isDarkMode,
}: CountryCardProps) {
  return (
    <Link to={`/${name.common}`}>
      <article
        className={`mx-auto w-full max-w-[270px] cursor-pointer rounded-md pb-6 drop-shadow-lg hover:brightness-110 ${
          isDarkMode ? "bg-DMElements text-white" : "bg-Elements text-LMText"
        }`}
      >
        <img
          src={flags.svg}
          alt={`flag of ${name.common}`}
          loading="lazy"
          className="rounded-t-md object-contain"
        />
        <div className="flex flex-col gap-1 p-4">
          <h1 className="my-2 text-lg font-semibold">{name.common}</h1>
          <p>
            <span className="font-semibold">Population: </span>
            {formatNumber(population)}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </article>
    </Link>
  );
}
