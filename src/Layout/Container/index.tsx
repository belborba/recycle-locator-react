import { LocalSearch } from "./LocalSearch";
import { SearchList } from "./SearchList";

export function Container() {
  return (
    <div className="flex justify-center sm:w-4/5">
      <SearchList />
      <LocalSearch />
    </div>
  );
}
