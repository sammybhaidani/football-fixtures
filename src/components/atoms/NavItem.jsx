import { NavLink } from "react-router-dom";

export default function NavItem( {link, text} ) {
    return (
        <>
        <NavLink to={link} className="font-semibold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            {text}
        </NavLink>
        </>
    )
}