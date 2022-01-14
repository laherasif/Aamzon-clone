import Header from '../Header/Header';
import SmallHeader from '../SmalHeader/SmallHeader';
import Footer from '../Footer/Footer';


export default function Wrapper({ children }) {
    return (
        <div>
            <Header />
            <SmallHeader />

            {children}

            <Footer />

        </div>
    )
}
