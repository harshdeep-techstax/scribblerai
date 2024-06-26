import React from "react";
import classNames from "classnames";

function Film({ className, primaryColor, shadeColor }) {
    const compClass = classNames({
        "h-full": !className,
        [`${className}`]: className,
    });
    const primaryColorClass = classNames({
        "fill-blue-600": !primaryColor,
        [`${primaryColor}`]: primaryColor,
    });
    const shadeColorClass = classNames({
        "fill-blue-300": !shadeColor,
        [`${shadeColor}`]: shadeColor,
    });
    return (
        <>
            {/* prettier-ignore */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={compClass}>
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M13 5H16V7H13V5ZM18 7V5H19C19.5523 5 20 5.44771 20 6V7H18ZM13 9H17H20V15H17H13V9ZM16 17H13V19H16V17ZM18 19V17H20V18C20 18.5523 19.5523 19 19 19H18ZM11 5H8V7H11V5ZM11 9H7H4V15H7H11V9ZM11 17H8V19H11V17ZM12 21H19C20.6569 21 22 19.6569 22 18V16V8V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V8V16V18C2 19.6569 3.34315 21 5 21H12ZM6 5H5C4.44772 5 4 5.44772 4 6V7H6V5ZM4 18V17H6V19H5C4.44772 19 4 18.5523 4 18Z"/>
                <rect className={primaryColorClass} x="4" y="9" width="7" height="6"/>
                <rect className={primaryColorClass} x="13" y="9" width="7" height="6"/>
            </svg>
        </>
    );
}

export default Film;
