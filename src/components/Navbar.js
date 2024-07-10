export default function Navbar() {
  const menu = [
    {
      id: 1,
      title: "Collections",
      link: "#collections",
    },
    {
      id: 2,
      title: "Men",
      link: "#men",
    },
    {
      id: 3,
      title: "Women",
      link: "#women",
    },
    {
      id: 4,
      title: "About",
      link: "#about",
    },
    {
      id: 5,
      title: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <header className="header">
        <div className="navigation">
          <img src="./images/logo.svg" alt="logo" className="logo" />
          <ul className="list">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="userBar">
          <img
            src="./images/icon-cart.svg"
            className="icon-cart"
            alt="icon cart"
          />
          <img src="./images/image-avatar.png" className="user" alt="avatar" />
        </div>
      </header>
    </>
  );
}
