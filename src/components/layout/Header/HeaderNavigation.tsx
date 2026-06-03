import HeaderItem from "./HeaderItem";

interface NavigationItem {
  title: string;
  href: string;
}

interface HeaderNavigationProps {
  items: NavigationItem[];
  isScrolled: boolean;
}

const HeaderNavigation = ({ items, isScrolled }: HeaderNavigationProps) => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {items.map((item) => (
          <HeaderItem
            key={item.title}
            title={item.title}
            href={item.href}
            isScrolled={isScrolled}
          />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
