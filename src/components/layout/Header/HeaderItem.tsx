interface HeaderItemProps {
  title: string;
  href: string;
  isScrolled: boolean;
}

const HeaderItem = ({ title, href, isScrolled }: HeaderItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`
          font-manrope text-xs font-normal
          transition-all duration-300 ease-in-out hover:opacity-70
          ${isScrolled ? "text-black" : "text-black lg:text-white"}
        `}
      >
        {title}
      </a>
    </li>
  );
};

export default HeaderItem;
