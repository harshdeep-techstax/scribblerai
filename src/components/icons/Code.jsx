import React from "react";
import classNames from "classnames";

function Code({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L19.5858 12L16.2929 8.7071C15.9024 8.31657 15.9024 7.68341 16.2929 7.29289C16.6834 6.90236 17.3166 6.90236 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071Z"/>
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M7.70711 16.7071C8.09763 16.3166 8.09763 15.6834 7.70711 15.2929L4.41421 12L7.70711 8.7071C8.09763 8.31657 8.09763 7.68341 7.70711 7.29289C7.31658 6.90236 6.68342 6.90236 6.29289 7.29289L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071Z"/>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03846 18.7253C8.88674 19.2563 9.19423 19.8098 9.72527 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473C15.1132 4.7437 14.8057 4.19021 14.2747 4.03849Z"/>
            </svg>
        </>
    );
}

export default Code;
