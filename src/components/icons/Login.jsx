import React from "react";
import classNames from "classnames";

function Login({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} d="M18 2C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H12C10.3431 22 9 20.6569 9 19V5C9 3.34315 10.3431 2 12 2H18Z"/>
                <path className={primaryColorClass} d="M12.7071 7.79289C12.3166 7.40237 11.6834 7.40237 11.2929 7.79289C10.9024 8.18342 10.9024 8.81658 11.2929 9.20711L13.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H13.0858L11.2929 14.7929C10.9024 15.1834 10.9024 15.8166 11.2929 16.2071C11.6834 16.5976 12.3166 16.5976 12.7071 16.2071L15.5 13.4142C16.2811 12.6332 16.281 11.3668 15.5 10.5858L12.7071 7.79289Z"/>
            </svg>
        </>
    );
}

export default Login;
