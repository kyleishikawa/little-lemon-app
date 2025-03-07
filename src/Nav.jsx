import LogoSvg from './assets/Logo.svg';

export default function Nav() {
    return (
        <nav className="grid grid-cols-12 gap-4 p-4 items-center">
            <div className="md:col-start-3 md:col-span-2 col-start-1 col-span-12">
                <img
                    src={LogoSvg}
                    alt="Little Lemon"
                />
            </div>
            <ul className="md:col-start-5 md:col-span-6 col-start-1 col-span-12 flex flex-wrap justify-around items-center">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}