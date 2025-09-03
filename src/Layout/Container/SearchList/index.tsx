import ButtonIcon from "@/assets/icons/button-icon.svg?react";
import Logo from "@/assets/images/logo.svg?react";

export function SearchList() {
  return (
    <>
      <div className="sm:w-1/2 flex flex-col justify-center gap-8 p-4">
        <Logo />
        <h1>Encontre o ponto de coleta mais próximo de você</h1>
        <p className="mt-[-25px]">
          Nossos pontos de coleta estão espalhados por todo o Distrito Federal.
        </p>
        <div className="relative flex w-4/5 items-center bg-white border border-neutral-300 rounded-full shadow-lg transition-all duration-300 focus-within:shadow-xl">
          <input
            type="text"
            placeholder="Digite a sua cidade..."
            className="w-full h-14 pl-6 pr-16 py-2 text-lg text-gray-700 bg-transparent border-none rounded-full focus:outline-none placeholder-gray-400"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 focus:outline-none transition-colors duration-200">
            <ButtonIcon />
          </button>
        </div>
      </div>
    </>
  );
}
