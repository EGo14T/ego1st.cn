import React, { useEffect,useState } from "react";
import { showDateTime } from "../../js/since";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Footer(props) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { footer } = customFields;
  const { since } = footer;

  const [count, setCount] = useState(showDateTime(since));

  useEffect(() => {
    const id = setInterval(() => {
      setCount(showDateTime(since));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-image"></div>
      <div className="footer-inner"></div>
      <p>
        博客已萌萌哒运行<span id="since">{count}</span>
        <span className="my-face">(●'◡'●)ﾉ♥</span>
      </p>
    </footer>
  );
}
export default Footer;
