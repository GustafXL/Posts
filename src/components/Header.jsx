import style from  "./Header.module.css";

import igniteLogo from "../../public/img/Ignite-logo.svg";

export function Header() {
    return (
        <header className={ style.header }>
            <img src={ igniteLogo } alt="Ignite Logo" />
        </header>
    )
};