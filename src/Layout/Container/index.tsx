import { SearchResult } from "./SearchResult";
import { SearchInput } from "./SearchInput";
import { useState } from "react";
import locations from "@/data/location";

export function SearchContainer() {
  const [search, setSearch] = useState("");

  const filteredData = locations.filter((local) =>
    local.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col p-2 sm:flex-row justify-center sm:w-4/5">
      <SearchInput value={search} onChange={setSearch} />
      <SearchResult data={filteredData} />
    </div>
  );
}
