import { Header } from '../exports';

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default Layout;