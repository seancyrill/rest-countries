import { Link, useParams } from "react-router-dom";
import { CountryDataCompleteType, isDarkModeType } from "../App";
import { formatNumber } from "../utilities/NumberFormater";

interface CountryPageProps extends isDarkModeType {
  countryData: CountryDataCompleteType[];
}

export default function CountryPage({
  isDarkMode,
  countryData,
}: CountryPageProps) {
  const { id } = useParams();
  const country = countryData.find((country) => {
    if (!id) return;
    return country.id.toString() === id;
  })!;

  //get currency from unknown object map
  const getCurrencyNames = () => {
    if (!country.currencies) return;
    return Object.keys(country.currencies)
      .map(
        (key) =>
          country.currencies![key as keyof typeof country.currencies]!.name
      )
      .join(", ");
  };

  //get languages from unknown object map
  const getLanguage = () => {
    if (!country.languages) return;
    return Object.keys(country.languages)
      .map((key) => country.languages![key as keyof typeof country.languages])
      .join(", ");
  };

  const details1 = [
    {
      label: "Population",
      value: formatNumber(country.population),
    },
    {
      label: "Region",
      value: country.region,
    },
    {
      label: "Sub Region",
      value: country.subregion,
    },
    {
      label: "Capital",
      value: country.capital,
    },
  ];
  const details2 = [
    {
      label: "Top Level Domain",
      value: country.tld ? country.tld[0] : "not available",
    },
    {
      label: "Currencies",
      value: getCurrencyNames(),
    },
    {
      label: "Languages",
      value: getLanguage(),
    },
  ];

  return (
    <main
      className={`flex flex-grow overflow-y-auto p-6 portrait:flex-col landscape:flex-row landscape:gap-8 landscape:lg:items-center ${
        isDarkMode
          ? "bg-DMBackground text-white"
          : "bg-LMBackground text-LMText"
      }`}
    >
      <img
        src={country.flags.svg}
        alt="country flag"
        className="animate-pageLoad object-contain portrait:max-h-[40vh] landscape:max-w-[40%] landscape:2xl:max-w-[55%]"
      />
      <section className="flex animate-pageLoad flex-col gap-8 portrait:my-6">
        <h1 className="text-xl font-bold portrait:md:text-center portrait:md:text-4xl">
          {country.name.common}
        </h1>
        <div className="flex gap-12 portrait:flex-col portrait:md:flex-row portrait:md:justify-around landscape:flex-row ">
          <div className="flex flex-col gap-2">
            {details1.map((detail, i) => (
              <span
                key={i}
                className="flex gap-2 portrait:flex-row landscape:flex-col landscape:md:flex-row"
              >
                <p className="font-bold">{`${detail.label}: `}</p>
                <p className="font-normal">{detail.value}</p>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {details2.map((detail, i) => (
              <span
                key={i}
                className="flex gap-2 portrait:flex-row landscape:flex-col landscape:md:flex-row"
              >
                <p className="font-bold">{`${detail.label}: `}</p>
                <p className="font-normal">{detail.value}</p>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Border Countries: </h3>
          <div className="grid-col grid grid-cols-2 place-content-center gap-4">
            {country.borders?.map((neighbor, i) => {
              const borderCountry = countryData.find(
                (country) => country.cca3 === neighbor
              );
              return (
                <Link
                  className={`inline-block p-3 text-center drop-shadow-lg ${
                    isDarkMode ? "bg-DMElements" : "bg-Elements"
                  }`}
                  key={i}
                  to={`/${borderCountry?.id}`}
                >
                  {borderCountry?.name.common}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
