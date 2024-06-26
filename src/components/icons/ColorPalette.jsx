import React from "react";
import classNames from "classnames";

function ColorPalette({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M19.7866 14C20.9581 14 22 13.1714 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.1714 22 14 20.9581 14 19.7866V18C14 15.7909 15.7909 14 18 14H19.7866Z"/>
                <circle className={primaryColorClass} cx="11.5" cy="6" r="1.5"/><circle className={primaryColorClass} cx="17.5" cy="9.5" r="1.5"/><circle className={primaryColorClass} cx="6.5" cy="10" r="1.5"/><circle className={primaryColorClass} cx="8" cy="16.5" r="1.5"/>
            </svg>
        </>
    );
}

export default ColorPalette;
