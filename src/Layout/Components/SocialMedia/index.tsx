import IgIcon from "@/assets/icons/ig-icon.svg?react";
import Logo from "@/assets/images/logo.svg?react";

export const SocialMedia = () => {
  return (
    <div className="sticky top-0 w-full h-auto flex justify-between sm:justify-end p-4 bg-neutral-100 sm:bg-transparent">
      <Logo className="block sm:hidden w-[150px]" />
      <a
        href="https://www.instagram.com/patanatampa_df/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:animate-pulse"
      >
        <IgIcon className="w-10 h-10" />
      </a>
    </div>
  );
};
