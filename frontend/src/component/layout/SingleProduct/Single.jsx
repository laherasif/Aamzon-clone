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
                        <div className="col-md-4">
                            <div className="single_image">
                                <img src="/images/chair-1.jpg" alt="single_image" className="single_img" />
                            </div>
                        </div>
                        <div className="col-md-8">
                             <div className="centerWrapper">
                                <div className="single_content">
                                   <h4 className="single_product_detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea laboriosam, voluptate quia sunt numquam explicabo totam quasi incidunt quos dicta officiis repudiandae error temporibus, quae voluptates excepturi consequatur impedit.</h4>
                                    <p className="price">$ 14.40</p>
                                    <ul className="product_info">
                                    <li className="listInfo">
                                      <h3>Product Dimentions</h3>
                                      <p>24.4"D x 26.4</p>
                                    </li>
                                    </ul>
                                </div>
                                <div className="addCart_content"> right</div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
