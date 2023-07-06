import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>BOSCH</h1>
          <p>Manager Car</p>
        </div>
        <div>
          <a href="https://facebook.com/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="https://github.com/">
            <i className="fa-brands fa-github-square"></i>
          </a>

          <a href="https://twitter.com/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
