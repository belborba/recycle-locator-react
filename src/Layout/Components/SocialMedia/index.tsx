import IgIcon from "@/assets/icons/ig-icon.svg?react";

export const SocialMedia = () => {
  return (
    <div className="w-full h-auto flex justify-end p-4">
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
