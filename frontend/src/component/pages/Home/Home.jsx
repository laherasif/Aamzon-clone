import './home.css'
import Banner from '../../layout/Banner/Banner'
import Feature from '../../layout/Feature/Feature'
export default function Home() {
    return (
        <>
            <div className="Home_Wrapper">

                <div className="banner">
                    <Banner />

                </div>
                <div className="feature">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <Feature />
                            </div>
                            <div className="col-md-3">
                                <Feature />
                            </div>
                            <div className="col-md-3">
                                <Feature />
                            </div>
                            <div className="col-md-3">
                                <Feature />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
