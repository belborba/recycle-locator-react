import Logo from "@/assets/images/logo.svg?react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="z-[9999] text-center sm:text-left sticky top-21 border-b-neutral-200 border-b sm:border-0 sm:static bg-neutral-100 sm:w-1/2 flex flex-col justify-center gap-2 sm:gap-6 sm:bg-transparent pb-4 px-4">
      <Logo className="hidden sm:block" />
      <h1 className="sm:w-4/5">
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
            placeholder="Buscar cidade..."
            className="w-full h-14 pl-6 pr-16 py-2 text-lg text-gray-700 bg-transparent border-none rounded-full focus:outline-none placeholder-gray-400"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-redpaw" />
          </button>
        </div>
      </div>
    </div>
  );
}
