import './cart.css'

export default function Cart() {
    return (
        <>
            <div className="CartWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">

                            <div className="cart_items">
                                <div className="cart_head">
                                    <h4>Shopping Cart</h4>
                                    <p>Price</p>
                                </div>
                                <div className="product_details">
                                   <img src="/images/paste-1.jpg" alt="cart_img" className="product_img_cart"/>
                                   <div className="cart_product_desc">
                                     <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim fugiat dignissimos aliquid commodi, impedit magnam similique obcaecati voluptatibus, hic expedita corrupti vel dolorem repellendus eaque vitae reiciendis, eum earum ullam?</h4>
                                   </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
