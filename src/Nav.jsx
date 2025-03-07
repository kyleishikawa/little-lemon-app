import LogoSvg from './assets/Logo.svg';

export default function Nav() {
    return (
        <nav className="main-nav" aria-label="Main navigation">
            <img src={LogoSvg} alt="Little Lemon" className="logo" />
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}