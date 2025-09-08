import { HomeIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

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
  const listRef = useRef<HTMLDivElement>(null);

  function openMap(item: Location) {
    const query = `${item.localName}, ${item.address}, ${item.city}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;
    window.open(url, "_blank");
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [data]);

  return (
    <div className=" sm:w-1/2 sm:h-[520px] py-4 px-2 sm:px-2 sm:py-4 sm:border sm:rounded-2xl sm:border-neutral-300">
      <div
        ref={listRef}
        className="h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-transparent px-2"
      >
        {data.length === 0 ? (
          <p className="text-center text-neutral-500">
            Nenhuma cidade encontrada.
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {data.map((item) => (
              <li
                key={item.id}
                className="flex relative flex-col gap-2 bg-white border border-neutral-300 rounded-2xl p-4 sm:p-6 shadow-xl"
              >
                <div className=" flex justify-between items-center gap-2">
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
                <button
                  className="absolute bottom-4 right-4 text-[13px] cursor-pointer mt-2 px-4 py-2 bg-redpaw hover:animate-pulse text-white rounded-full"
                  onClick={() => openMap(item)}
                >
                  Ver no mapa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
