import './product.css'

export default function Products() {
    console.log("product page ");

    return (
        <>
            <div className="ProductWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <div className="sidebar_filter">
                                <div className="filter">
                                    Filters
                                </div>
                                <hr />
                                <div className="filter_list">
                                    <ul className="Lists">
                                        <li className="listItems">
                                            Prime & Delivery
                                </li>
                                        <li className="listItems">
                                            Prime & Delivery
                                </li>
                                        <li className="listItems">
                                            Prime & Delivery
                                </li>
                                        <li className="listItems">
                                            Prime & Delivery
                                </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <div className="products">
                                <div className="price">
                                    Price and other details may vary base on product size and color
                                </div>
                                <div className="products_list">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="product_data">
                                                <img src="/images/chair-1.jpg" className="product_images" alt="product_img" />
                                                <p className="feature_brand">Feature from our brand</p>
                                                <h3 className="product_desc">Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>
                                                <span className="price">$205 </span>
                                                <span className="ships">Ships to Pakistan</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">first</div>
                                        <div className="col-md-3">first</div>
                                        <div className="col-md-3">first</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
