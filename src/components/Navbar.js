export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navigation">
          <img src="./images/logo.svg" alt="logo" className="logo" />
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Woman</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="userBar">
          <img src="./images/icon-cart.svg" className="" alt="" />
          <img src="./images/image-avatar.png" className="user" alt="" />
        </div>
      </nav>
    </>
  );
}
