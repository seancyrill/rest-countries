import { CountryDataCompleteType, isDarkModeType } from "../App";
import CountryCard from "../components/CountryCard";
import Filters from "../components/Filters";
import Loading from "./Loading";

interface HomeProps extends isDarkModeType {
  countryData: CountryDataCompleteType[] | undefined;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

export default function Home({
  isDarkMode,
  countryData,
  search,
  setSearch,
  isLoading,
}: HomeProps) {
  return (
    <main
      className={`flex-grow overflow-auto ${
        isDarkMode
          ? "bg-DMBackground text-white"
          : "bg-LMBackground text-LMText"
      }`}
    >
      {isLoading && <Loading isDarkMode={isDarkMode} />}
      {!isLoading && (
        <>
          <Filters
            isDarkMode={isDarkMode}
            search={search}
            setSearch={setSearch}
          />
          <section className="mx-auto grid animate-pageLoad items-center justify-center gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
            {countryData?.map((country, i) => (
              <CountryCard key={i} {...country} isDarkMode={isDarkMode} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}
