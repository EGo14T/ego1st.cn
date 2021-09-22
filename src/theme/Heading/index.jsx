import React from "react";
import clsx from "clsx";

export default function Heading(headingType) {
    const createAnchorHeading = (Tag) =>
        function TargetComponent({ id, ...props }) {
            if (!id) {
                return <Tag id={id} {...props} />;
            }
            return (
                <Tag id={id} {...props}>
                    <a aria-hidden="true" tabIndex={-1} className={clsx("anchor", `anchor__${Tag}`)} id={`tag${id}`} />
                    {props.children}
                </Tag>
            );
        };

    return createAnchorHeading(headingType);
}
