import logo from "../images/logo.svg";

const Balance = () => {
  return (
    <div className="balance">
      <div className="my-balance">
        <h5>My balance</h5>
        <h2>$921.48</h2>
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="company logo"></img>
      </div>
    </div>
  );
};

export default Balance;
