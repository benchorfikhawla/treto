import { Fragment } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <div className="mil-footer">
      <p className="mil-upper mil-upper-sm">
        © {new Date().getFullYear()} <span className="mil-accent">Khawlabenchorfi.</span>{" "}
        All rights reserved.
      </p>
    </div>
  );
};
const Footer2 = () => {
  return (
    <Fragment>
      <div className="mil-social-panel">
        <ul>
          <li>
            <a href="https://www.facebook.com/hajar.benchorfi.1">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/khawla.benchorfi/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khawla-benchorfi-3a46612b9/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/benchorfikhawla">Github</a>
          </li>
        </ul>
      </div>
      <div className="mil-footer">
        <p className="mil-upper">
          © {new Date().getFullYear()}{" "}
          <span className="mil-accent">khawla benchorfi.</span> All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};
