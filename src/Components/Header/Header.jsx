import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

function Header() {
    return (
        <>
            <header className="header-section" id="header">
                <HeaderTop />
                <HeaderBottom />
            </header> 
        </>
    )
}

export default Header;