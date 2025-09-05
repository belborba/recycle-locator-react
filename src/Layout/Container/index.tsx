import { SearchResult } from "./SearchResult";
import { SearchInput } from "./SearchInput";
import { useState } from "react";
import locations from "@/data/location";

export function SearchContainer() {
  const [search, setSearch] = useState("");

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredData = locations.filter((local) =>
    removeAccents(local.city.toLowerCase()).includes(
      removeAccents(search.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col sm:flex-row sm:w-3/4">
      <SearchInput value={search} onChange={setSearch} />
      <SearchResult data={filteredData} />
    </div>
  );
}
