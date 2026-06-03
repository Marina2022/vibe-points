import Link from "next/link";
import Icon from "@/components/ui/Icon";

interface HeaderLogoProps {
  isScrolled: boolean;
}

const HeaderLogo = ({ isScrolled }: HeaderLogoProps) => {
  return (
    <Link href="/" className="relative z-[60]">
      <Icon
        name="logo"
        className={`
          w-[97px] mds:w-[120px]
          h-5 mds:h-[40px]
          transition-all duration-300 ease-in-out
          ${isScrolled ? "text-black" : "text-black lg:text-white"}
        `}
      />
    </Link>
  );
};

export default HeaderLogo;
