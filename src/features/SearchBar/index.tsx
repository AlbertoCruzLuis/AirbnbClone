import { useRouter } from "next/router";

import { SearchBarSection } from "./content/SearchBarSection";
import { SearchBarSmallSection } from "./content/SearchBarSmallSection";
import { SearchProvider } from "./providers/SearchProvider";

export const SearchBar = () => {
  const { pathname } = useRouter();

  const isSearchPage = pathname.includes("/s/");
  const isHomePage = pathname === "/";
  return (
    <SearchProvider>
      {isSearchPage && <SearchBarSmallSection />}
      {isHomePage && <SearchBarSection />}
    </SearchProvider>
  );
};
