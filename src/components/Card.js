export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-box">
          <span className="card-box-shorttitle">Sneaker company</span>
          <h1 className="card-box-title">Fall limited edition sneakers</h1>
          <p className="card-box-text">
            There low-profile sneakers are you perfect casuel wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the wear can offer.
          </p>
        </div>
        <div className="box-prices">
          <div className="prices">
            <span className="bold-price">$125.00</span>{" "}
            <span className="color-price">50%</span>
          </div>
          <div className="price">
            <span>$250.00</span>
          </div>
        </div>
        <div className="boxWithButtons">
          <div className="buttons">
            <button className="button-minus">
              {" "}
              <img src="./images/icon-minus.svg" alt="" />
            </button>
            <div className="number">0</div>
            <button className="button-plus">
              {" "}
              <img src="./images/icon-plus.svg" alt="" />
            </button>
          </div>
          <div className="addToCard" style={{ fill: "white" }}>
            <img
              src="./images/icon-cart copy.svg"
              style={{ stroke: "white" }}
              className="cardButton"
              alt=""
            />
            <span> Add to card</span>
          </div>
        </div>
      </div>
    </>
  );
}
