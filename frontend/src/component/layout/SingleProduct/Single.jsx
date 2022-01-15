import './single.css'

export default function Single() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="add_img">
                        <img src="/images/shopcar.png" alt="add_image" className="amazon_add" />
                    </div>
                    <nav className="nav_breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">right</div>
                    </div>
                </div>
            </section>
        </>
    )
}
