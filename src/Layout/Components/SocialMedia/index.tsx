import IgIcon from "@/assets/icons/ig-icon.svg?react";

export const SocialMedia = () => {
  return (
    <div className="w-full h-auto hidden sm:flex sm:justify-end p-4 bg-neutral-100 sm:bg-transparent">
      <a
        href="https://www.instagram.com/patanatampa_df/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:animate-pulse"
      >
        <IgIcon className="w-10 h-10 sm:block" />
      </a>
    </div>
  );
};
