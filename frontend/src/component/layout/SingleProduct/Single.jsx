import './single.css'

export default function Single() {
    return (
        <>
            <section className="singleWrapper">
                <div className="container-fluid">
                    <div className="add_img">
                        <img src="/images/shopcar.png" alt="add_image" className="amazon_add" />
                    </div>
                    <nav className="nav_breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" ariaCurrent="page">Library</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single_image">
                                <img src="/images/chair-1.jpg" alt="single_image" className="single_img" />
                            </div>
                        </div>
                        <div className="col-md-7">
                             <div className="centerWrapper">
                                <div className="single_content">center</div>
                                <div className="addCart_content"> right</div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
