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
      <div className="sm:w-1/2 h-4/5 sm:h-[520px] pt-4 px-2 sm:pt-4 sm:border sm:rounded-2xl sm:border-neutral-300">
        <div className="h-full overflow-y-auto overflow-x-hidden px-2 sm:px-4">
          {data.length === 0 ? (
            <p>Nenhuma cidade encontrada.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 bg-white rounded-2xl p-4 sm:p-6 shadow-xl"
                >
                  <div className="flex justify-between items-center gap-2">
                    <h3>{item.localName}</h3>
                    <p>{item.city}</p>
                  </div>
                  <hr className="border border-neutral-200 mb-2" />
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
