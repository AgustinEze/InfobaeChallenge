export const NavBar = ({ children }) => {
  return (
    <nav className="flex w-full justify-between items-center p-4 bg-orange-700 text-white">
      {children}
    </nav>
  );
};
