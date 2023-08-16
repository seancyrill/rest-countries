import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { useEffect, useRef, useState } from "react";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";
import { CountryDataType } from "./types/CountryDataType";
import axios from "axios";

export interface isDarkModeType {
  isDarkMode: boolean;
}

export interface CountryDataCompleteType extends CountryDataType {
  id: number;
  tags: string;
}

function App() {
  const countryData = useRef<CountryDataCompleteType[]>([]);
  const [searchResults, setSearchResults] = useState<CountryDataCompleteType[]>(
    []
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        countryData.current = response.data;

        //add tags for search function
        if (!countryData.current) return;
        const withTags = countryData.current.map((country, i) => {
          //get currency from unknown object map
          const getCurrencyNames = () => {
            if (!country.currencies) return;
            return Object.keys(country.currencies)
              .map(
                (key) =>
                  country.currencies![key as keyof typeof country.currencies]!
                    .name
              )
              .join(" ");
          };

          //get languages from unknown object map
          const getLanguage = () => {
            if (!country.languages) return;
            return Object.keys(country.languages)
              .map(
                (key) =>
                  country.languages![key as keyof typeof country.languages]
              )
              .join(" ");
          };

          const tagsToAdd = `${country.name.common} ${country.name.official} ${
            country.region
          } ${country.subregion} ${country.capital?.[0]} ${country.cca3} ${
            country.cioc
          } ${getCurrencyNames()} ${getLanguage()}`;
          return {
            ...country,
            id: i,
            tags: tagsToAdd,
          };
        });
        countryData.current = withTags;
      } catch (error) {
        console.log(error);
      }
    };

    //make sure api loads before setting search value
    let letApiLoad = setTimeout(() => {
      setSearch("");
      setIsLoading(false);
    }, 2000);

    return () => {
      //setup dark mode
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true);
      }

      //setup data
      fetchData();

      //cleanup
      clearTimeout(letApiLoad);
    };
  }, []);

  //filter by tags
  useEffect(() => {
    if (!countryData.current) return;
    const filteredResults = countryData.current.filter((country) =>
      country.tags.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [search]);

  return (
    <>
      <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isDarkMode={isDarkMode}
              countryData={searchResults}
              search={search}
              setSearch={setSearch}
              isLoading={isLoading}
            />
          }
        ></Route>
        <Route
          path="/:id"
          element={
            <CountryPage
              isDarkMode={isDarkMode}
              countryData={countryData.current}
            />
          }
        ></Route>
        <Route
          path="/*"
          element={<NotFound /* isDarkMode={isDarkMode} */ />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
