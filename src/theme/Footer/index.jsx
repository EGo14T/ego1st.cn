import React, { useEffect, useState } from "react";
import { showDateTime } from "../../js/since";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Footer(props) {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { footer } = customFields;
    const { since, author, beian } = footer;

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
            <div className="footer-inner">
                <p>
                    博客已安稳运行<span id="since">{count}</span>
                    <span className="my-face">ฅʕ•̫͡•ʔฅ</span>
                </p>
                <p>
                    © <span itemProp="copyrightYear">2021</span>. 由{" "}
                    <a className="a-footer" href="https://hexo.io/" target="_blank" className="external" rel="nofollow">
                        Docusaurus
                    </a>
                    <span> 强力驱动.</span>
                </p>
                <p>{beian}</p>
                <p>
                    Made with <i className="fa fa-heart throb" style={{ color: "#d43f57" }} />
                    <span className="copyrightHolder">by</span>
                    <span className="author">{author}.</span>
                </p>
            </div>
        </footer>
    );
}
export default Footer;
