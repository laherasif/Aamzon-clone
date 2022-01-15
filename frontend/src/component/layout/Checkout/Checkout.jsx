import './checkout.css'

export default function Checkout() {
    return (
        <>
            <section className="checkoutWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="check_heading">Checkout Shopping</h4>
                            <hr/>
                            <div className="shipping_address">
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label">Your name</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Email Address </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Shipping Address </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile number</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            right
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
