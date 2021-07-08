import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar/Avatar';

const Header = () => {
    return (
        <nav className="w-screen h-auto bg-white-400 shadow-md py-2 px-4 z-50">
            <div className="flex items-center justify-between container mx-auto">
                <div>
                    <h1 className="text-black text-lg font-extrabold uppercase">
                        geofinmaps
                    </h1>
                    <div>

                    </div>
                </div>
                <div className="flex justify-end">
                    <ul className="flex flex-row items-center justify-between">
                        <li className="px-2">
                            <Link href="/">
                                <a className="text-black text-center text-lg capitalize font-bold">help</a>
                            </Link>
                        </li>

                        <li className="px-2">
                            <Avatar />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;