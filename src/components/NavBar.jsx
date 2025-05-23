import NavItem from "./atoms/NavItem";

export default function NavBar() {
    return (
       <nav className="flex gap-6 shadow-sm border border-gray-200 rounded-xl p-8 m-2 max-w-6xl mx-auto">
        <NavItem link={'/'} text={'Home'}/>
        <NavItem link={'/featured'} text={'Featured Matches'}/>
        <NavItem link={'/clubs'} text={'My groups'}/>
        <NavItem link={'/news'} text={'News'}/>
       </nav>
    )
}