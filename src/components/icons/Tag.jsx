import React from "react";
import classNames from "classnames";

function Tag({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} d="M20.6811 13.2434C21.3004 12.6241 21.6181 11.7652 21.5509 10.892L21.1469 5.63919C21.0334 4.16385 19.8611 2.99161 18.3858 2.87812L13.133 2.47406C12.2598 2.40689 11.4009 2.72463 10.7816 3.3439L3.27199 10.8535C2.10042 12.0251 2.10042 13.9246 3.27199 15.0962L8.92884 20.753C10.1004 21.9246 11.9999 21.9246 13.1715 20.753L20.6811 13.2434Z"/>
                <path className={primaryColorClass} d="M14.5857 7.318C13.9999 7.90379 13.9999 8.85354 14.5857 9.43932C15.1715 10.0251 16.1212 10.0251 16.707 9.43932C17.2928 8.85354 17.2928 7.90379 16.707 7.318C16.1212 6.73222 15.1715 6.73222 14.5857 7.318Z"/>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M7.51469 13.682L10.3431 16.5104C10.7336 16.9009 11.3668 16.9009 11.7573 16.5104C12.1479 16.1199 12.1479 15.4867 11.7573 15.0962L8.92891 12.2677C8.53838 11.8772 7.90522 11.8772 7.5147 12.2677C7.12417 12.6583 7.12417 13.2914 7.51469 13.682Z"/>
            </svg>
        </>
    );
}

export default Tag;
