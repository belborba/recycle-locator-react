import { HomeIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";

interface Location {
  id: number;
  localName: string;
  address: string;
  city: string;
  residentsOnly: boolean;
}

interface SearchResultProps {
  data: Location[];
}

export function SearchResult({ data }: SearchResultProps) {
  return (
    <>
      <div className="sm:w-1/2 sm:h-[400px] py-2 sm:py-4 border rounded-2xl border-neutral-300">
        <div className="h-full overflow-y-auto overflow-x-hidden px-2 sm:px-4">
          {data.length === 0 ? (
            <p>Nenhuma cidade encontrada.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex justify-between items-center gap-2">
                    <h3>{item.localName}</h3>
                    <p>{item.city}</p>
                  </div>
                  <hr className="border border-neutral-200" />
                  <div className="flex gap-2">
                    <MapPinIcon className="w-6 h-6 text-redpaw" />
                    <p>{item.address}</p>
                  </div>
                  {item.residentsOnly ? (
                    <div className="flex gap-2">
                      <HomeIcon className="w-6 h-6 text-redpaw" />
                      <p>Apenas Moradores</p>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <UsersIcon className="w-6 h-6 text-redpaw" />
                      <p>Aberto ao Público</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
