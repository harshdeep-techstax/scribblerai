import React from "react";
import classNames from "classnames";

function Promotion({ className, primaryColor, shadeColor }) {
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
                <path className={shadeColorClass} d="M13.9458 2.34434C12.8245 1.3888 11.1754 1.3888 10.0541 2.34434L8.78264 3.42788C8.62248 3.56437 8.42334 3.64686 8.21357 3.66359L6.54833 3.79648C5.0798 3.91367 3.91367 5.0798 3.79648 6.54833L3.66359 8.21357C3.64686 8.42334 3.56437 8.62248 3.42788 8.78264L2.34434 10.0541C1.3888 11.1754 1.3888 12.8245 2.34434 13.9458L3.42788 15.2173C3.56437 15.3774 3.64686 15.5766 3.66359 15.7863L3.79648 17.4516C3.91367 18.9201 5.0798 20.0863 6.54833 20.2034L8.21357 20.3363C8.42334 20.3531 8.62248 20.4356 8.78264 20.572L10.0541 21.6556C11.1754 22.6111 12.8245 22.6111 13.9458 21.6556L15.2173 20.572C15.3774 20.4356 15.5766 20.3531 15.7863 20.3363L17.4516 20.2034C18.9201 20.0863 20.0863 18.9201 20.2034 17.4516L20.3363 15.7863C20.3531 15.5766 20.4356 15.3774 20.572 15.2173L21.6556 13.9458C22.6111 12.8245 22.6111 11.1754 21.6556 10.0541L20.572 8.78264C20.4356 8.62248 20.3531 8.42334 20.3363 8.21357L20.2034 6.54833C20.0863 5.0798 18.9201 3.91367 17.4516 3.79648L15.7863 3.66359C15.5766 3.64686 15.3774 3.56437 15.2173 3.42788L13.9458 2.34434Z"/>
                <circle className={primaryColorClass} cx="8.5" cy="8.5" r="1.5"/>
                <circle className={primaryColorClass} cx="15.5" cy="15.5" r="1.5"/>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M15.9735 7.2318C16.3978 7.58537 16.4551 8.21593 16.1015 8.64021L9.43487 16.6402C9.08131 17.0645 8.45074 17.1218 8.02647 16.7682C7.60219 16.4147 7.54487 15.7841 7.89843 15.3598L14.5651 7.35984C14.9187 6.93556 15.5492 6.87824 15.9735 7.2318Z"/>
            </svg>
        </>
    );
}

export default Promotion;
