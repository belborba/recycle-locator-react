import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-neutral-100 w-full flex items-center justify-center p-4 gap-2 sm:static sm:bg-transparent">
      <p>Patanatampa</p>
      <HeartIcon className="w-4 h-4 text-redpaw" />
      <p>Projeto Social</p>
    </div>
  );
};
