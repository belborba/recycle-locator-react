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
    <div className="w-1/2 h-[400px] py-4 border rounded-2xl border-neutral-300">
      <div className="h-full overflow-y-auto overflow-x-hidden px-4">
        {data.length === 0 ? (
          <p>Nenhuma cidade encontrada.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {data.map((item) => (
              <li key={item.id} className="bg-white rounded-2xl p-6">
                <h2>{item.localName}</h2>
                <hr />
                <p>{item.address}</p>
                {item.residentsOnly ? (
                  <p>Apenas Moradores</p>
                ) : (
                  <p>Aberto ao Público</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
