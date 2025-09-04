import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center p-4 gap-2">
      <p>Patanatampa</p>
      <HeartIcon className="w-4 h-4 text-redpaw" />
      <p>Projeto Social</p>
    </div>
  );
};
