import './home.css'
import Banner from '../../layout/Banner/Banner'
import Feature from '../../layout/Feature/Feature'
import Catagory from '../../layout/Catagory/Catagory';
export default function Home() {
    return (
        <>
            <div className="Home_Wrapper" >

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
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
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

                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
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
                        
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>


        </>
    )
}
