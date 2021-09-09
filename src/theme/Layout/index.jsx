import React from "react";
import clsx from "clsx";
import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import LayoutHead from "@theme/LayoutHead";
import useKeyboardNavigation from "@theme/hooks/useKeyboardNavigation";
import { ThemeClassNames } from "@docusaurus/theme-common";

function Layout(props) {
    const { children, noFooter, wrapperClassName, pageClassName } = props;
    useKeyboardNavigation();
    return (
        <LayoutProviders>
            <LayoutHead {...props} />
            <div className={clsx(ThemeClassNames.wrapper.main, wrapperClassName, pageClassName)}>{children}</div>
            {!noFooter && <Footer />}
        </LayoutProviders>
    );
}

export default Layout;
