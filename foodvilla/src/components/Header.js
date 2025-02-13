const logo = (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://content3.jdmagicbox.com/comp/rohtak/j1/9999p1262.1262.230322230029.w5j1/catalogue/food-villa-family-restaurant-and-hotel-rohtak-restaurants-vepedpc3pq.jpg"
      />
    </a>
  );
  
  const Header = () => {
    return (
      //const Styleobj={
      //  backgroundColor:blue,
      // }
      // to give inline styleing in jsx we give as style={Styleobj} in tag as a attribute
      <div className="header">
        {logo}
        <div className="list">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Go to Cart</li>
          </ul>
        </div>
      </div>
    );
  };



  export default Header;