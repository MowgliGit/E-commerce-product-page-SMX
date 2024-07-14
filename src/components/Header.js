import Navbar from "./Navbar";
export default function Header({ cartCount, toggleCartVisibility }) {
  return (
    <div>
      <Navbar
        cartCount={cartCount}
        toggleCartVisibility={toggleCartVisibility}
      />
    </div>
  );
}
