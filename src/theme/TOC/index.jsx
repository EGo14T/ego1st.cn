import React from "react";
import useTOCHighlight from "@theme/hooks/useTOCHighlight";

const LINK_CLASS_NAME = "table-of-contents__link";

const TOC_HIGHLIGHT_PARAMS = {
    linkClassName: LINK_CLASS_NAME,
    linkActiveClassName: "table-of-contents__link--active",
};

export function TOCHeadings({ toc, isChild }) {
    if (!toc.length) {
        return null;
    }

    const toTag = (id) => {
        const tagHeight = document.getElementById(id).offsetTop;
        window.scrollTo({ top: tagHeight + 745, behavior: "smooth" });
    };

    return (
        <ol>
            {toc.map((heading) => (
                <li key={heading.id}>
                    <a
                        id={`tag${heading.id}`}
                        className={LINK_CLASS_NAME}
                        onClick={() => toTag(heading.id)}
                        dangerouslySetInnerHTML={{
                            __html: heading.value,
                        }}
                    />
                    <TOCHeadings isChild toc={heading.children} />
                </li>
            ))}
        </ol>
    );
}

function TOC({ toc }) {
    useTOCHighlight(TOC_HIGHLIGHT_PARAMS);
    return (
        <div className="post-toc">
            <TOCHeadings toc={toc} />
        </div>
    );
}

export default TOC;
