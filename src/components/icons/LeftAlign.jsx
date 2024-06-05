import React from "react";
import classNames from "classnames";

function LeftAlign({ className, primaryColor, shadeColor }) {
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
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"/>
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H4C3.44772 11 3 10.5523 3 10Z"/>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"/>
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M3 18C3 17.4477 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H4C3.44772 19 3 18.5523 3 18Z"/>
            </svg>
        </>
    );
}

export default LeftAlign;
