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
                                <div className="col-md-3">first</div>
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
