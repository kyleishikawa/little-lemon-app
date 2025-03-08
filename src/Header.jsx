import LogoSvg from './assets/Logo.svg';
import Nav from './Nav.jsx';

export default function Header() {
    return (
        <header className="grid grid-cols-12 gap-4 p-4 items-center">
            <div className="md:col-start-3 md:col-span-2 col-start-1 col-span-12 flex md:justify-start justify-center">
                <img
                    src={LogoSvg}
                    alt="Little Lemon"
                />
            </div>
            <div className="md:col-start-5 md:col-span-5 col-start-1 col-span-12">
                <Nav />
            </div>
        </header>
    )
}