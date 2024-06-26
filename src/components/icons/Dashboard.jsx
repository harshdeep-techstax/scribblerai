import React from "react";
import classNames from "classnames";

function Dashboard({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} d="M12 3C6.47715 3 2 7.47715 2 13C2 15.3444 2.80672 17.5003 4.15769 19.2053C4.33752 19.4323 4.61507 19.5561 4.90463 19.5561H19.0954C19.3849 19.5561 19.6625 19.4323 19.8423 19.2053C21.1933 17.5003 22 15.3444 22 13C22 7.47715 17.5228 3 12 3Z"/>
                <path className={primaryColorClass} d="M17.2071 9.20711C17.5976 8.81658 17.5976 8.18342 17.2071 7.79289C16.8166 7.40237 16.1834 7.40237 15.7929 7.79289L12.518 11.0677C12.3528 11.0236 12.1792 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 12.8208 13.9764 12.6472 13.9323 12.482L17.2071 9.20711Z"/>
            </svg>
        </>
    );
}

export default Dashboard;
