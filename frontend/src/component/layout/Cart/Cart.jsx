import './cart.css'

export default function Cart() {
    return (
        <>
            <div className="CartWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 ">

                            <div className="cart_items">
                                <div className="cart_head">
                                    <h4>Shopping Cart</h4>
                                </div>
                                <div className="product_details">
                                   <img src="/images/paste-1.jpg" alt="cart_img" className="product_img_cart"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
