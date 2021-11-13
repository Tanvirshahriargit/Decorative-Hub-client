import React from 'react';
import { Accordion } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <h1 className="text-primary mt-3"><i className="fab fa-angellist me-3"></i>About Us</h1>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            {/* Top About */}
            <div className="container row">
                {/* Left Top */}
                <div className="col-md-7 col-12">
                    <h3 className="mt-4">ABOUT OUR DECORATIVE-HUB</h3>
                    <p className="mt-4 text-dark">Trade, be it barter exchange or buying and selling of goods and services has been prevalent for centuries. No one can be self-sufficient. And this brings out the need for demand and supply of goods and services.
                        Transactions have been going on all over the world for centuries, locally, and across locations. Keeping the same concept in mind, now think electronic.
                        However, also bear in mind that with the whole world going online, data privacy laws have become increasingly stringent. And before you begin, an eCommerce venture you should be aware of all the</p>
                </div>
                {/* Right Top */}
                <div className="col-md-5 col-12">
                    <img className="img-fluid ms-4" src='https://i.ibb.co/f1GPK0t/6.jpg' alt="" />
                </div>
            </div>
            {/* What we give */}
            <div className="row container">
                {/* Left Side */}
                <div className="col-md-6 col-12 p-3">
                    <h5 className="text-primary">What We Give</h5>
                    <h2 className="mb-4">Best offer All For All</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <i class="fas fa-user-tag text-dark me-2"></i> Special Price</Accordion.Header>
                            <Accordion.Body>
                            SPECIAL PRICING can be defined as offering different prices to customers for a particular product according to several criteria, such as quality, quantity, the time frame of purchase and type of customer.on the lockscreen every single time you turn your Kindle on and off or happen to glance at the screen while it's turned off. To me this is simply unacceptable.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fas fa-money-check-alt me-2 "></i>Bank Offer</Accordion.Header>
                            <Accordion.Body>
                            The discount rate serves as an important indicator of the condition of credit in an economy. Because raising or lowering the discount rate alters the banks' borrowing costs and hence the rates that they charge on loans, adjustment of the discount rate is considered a tool to combat recession or inflation.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <i className="fas fa-hand-holding-usd me-2"></i>Quick Delevary</Accordion.Header>
                            <Accordion.Body>
                            an express delivery: a very quick dispatch, the action of bringing or carrying something to someone very quickly. idiom. (an order with) next day delivery: (an order which) will be brought to you on the day after purchase.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><i className="fas fa-hotel  me-2"></i>Easy To Return</Accordion.Header>
                            <Accordion.Body>
                            A goods return or purchase return is a transaction where the buyer of inventory or other items sends these goods back to the seller. It may be due to various reasons such as poor quality , defective items or extra items being ordered.What are return sentences? When you return to the "they say" in your text to remind the reader what you're responding to
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><i class="fas fa-shopping-cart me-2"></i>Easy To Placed Order</Accordion.Header>
                            <Accordion.Body>
                            To place an order, please fill out this order formand send it to Éducaloi at the address indicated on the form. Here is an example of a letter to place an order that the owner of a clothes shop is sending to a manufacturer. When you place an order through the Online Store you will receive an order confirmation number.An order letter, also known as a purchase order or PO, begins the paper trail of a specific purchase. The objective is to provide the vendor with detailed instructions for fulfilling an order. ... The vendor does not need to know why you are placing the order, what it is going to be used for or for whom it is intended.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {/* Right Side */}
                <div className="col-md-6 col-12 ps-5 mt-3">
                    <img className="img-fluid p-5 mt-5" src='https://i.ibb.co/NmZXh1Z/11.jpg' alt="" />
                </div>
            </div>

            {/* Testumunial */}
            <div>
                <img className="img-fluid mb-3" src='' alt="" />
            </div>
        </div>
    );
};

export default AboutUs;