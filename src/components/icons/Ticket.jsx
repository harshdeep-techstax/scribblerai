import React from "react";
import classNames from "classnames";

function Ticket({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V9C22 9.55228 21.5255 9.97928 21.041 10.2445C20.4207 10.5841 20 11.2429 20 12C20 12.7571 20.4207 13.4159 21.041 13.7555C21.5255 14.0207 22 14.4477 22 15V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V15C2 14.4477 2.47452 14.0207 2.95897 13.7555C3.57933 13.4159 4 12.7571 4 12C4 11.2429 3.57933 10.5841 2.95897 10.2445C2.47452 9.97928 2 9.55228 2 9V7Z"/>
                <path className={primaryColorClass} d="M11.0554 8.71739C11.3667 7.82183 12.6333 7.82183 12.9446 8.71739L13.1822 9.40107C13.3195 9.79614 13.6882 10.064 14.1064 10.0725L14.8301 10.0873C15.778 10.1066 16.1694 11.3111 15.4138 11.8839L14.837 12.3212C14.5038 12.5739 14.3629 13.0074 14.484 13.4077L14.6936 14.1005C14.9682 15.008 13.9435 15.7524 13.1653 15.2109L12.5712 14.7975C12.2279 14.5586 11.7721 14.5586 11.4288 14.7975L10.8347 15.2109C10.0565 15.7524 9.03181 15.008 9.30636 14.1005L9.51596 13.4077C9.63708 13.0074 9.49625 12.5739 9.16295 12.3212L8.58616 11.8839C7.83063 11.3111 8.22201 10.1066 9.16994 10.0873L9.8936 10.0725C10.3118 10.064 10.6805 9.79614 10.8178 9.40107L11.0554 8.71739Z"/>
            </svg>
        </>
    );
}

export default Ticket;
