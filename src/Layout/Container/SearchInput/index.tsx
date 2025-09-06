import Logo from "@/assets/images/logo.svg?react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import IgIcon from "@/assets/icons/ig-icon.svg?react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault(); // impede submit
      (e.target as HTMLInputElement).blur(); // fecha teclado mobile
    }
  }

  return (
    <div className="z-[9999] sticky top-0 text-center sm:text-left p-4 border-b-neutral-200 border-b sm:border-0 bg-neutral-100 sm:w-1/2 flex flex-col justify-center gap-2 sm:gap-6 sm:bg-transparent">
      <div className="flex justify-between">
        <Logo />
        <a
          href="https://www.instagram.com/patanatampa_df/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-pulse"
        >
          <IgIcon className="w-10 h-10 sm:hidden" />
        </a>
      </div>
      <h1 className="mt-2 sm:w-4/5">
        Encontre o ponto de coleta mais próximo de você
      </h1>
      <p className="sm:mt-[-20px] text-neutral-500 mb-2 sm:mb-0">
        Disponível apenas no Distrito Federal.
      </p>
      <div className="w-full max-w-md">
        <div className="relative flex items-center w-full bg-white rounded-full shadow-lg transition-all duration-300 focus-within:shadow-xl">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar cidade..."
            className="w-full h-14 pl-14 pr-16 py-2 text-lg text-gray-700 bg-transparent border border-neutral-400 rounded-full focus:outline-none focus:border-2 focus:border-redpaw placeholder-gray-400"
          />
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-redpaw" />
          </button>
        </div>
      </div>
    </div>
  );
}
