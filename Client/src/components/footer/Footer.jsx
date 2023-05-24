import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Copyright &copy; Indian Oil Corporation Limited</li>
          <li className="fListItem">Site Map | Terms of Use | Data Privacy Policy</li>
          <li className="fListItem">| Hyperlinking Policy</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Toll FREE Number: 1800-2333-555</li>
          <li className="fListItem">Commercial LPG Helpline No. 1860-5991-111</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">LPG Emergency Helpline: 1906</li>
          <li className="fListItem"> <a href="https://www.planetecomsolutions.com/" target="_blank">Powered By PECS</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
