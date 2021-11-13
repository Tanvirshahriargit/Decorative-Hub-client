import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-earth-85911.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <h2 className=" mt-4">Reviews</h2>
            <hr className="w-25 text-primary border border-info mx-auto" />
            <Row xs={1} md={3} className="gx-0 gy-4">
                {reviews.map(review => <Col key={review._id} className="px-3">
                    <Card>
                        <Card.Body>
                            <Card.Title><i class="fas fa-envelope-open text-primary me-2"></i>Email: {review.email}</Card.Title>
                            <Card.Text className="text-primary">
                                <Rating
                                    initialRating={review.rate}
                                    emptySymbol="text-warning far fa-star"
                                fullSymbol="text-warning fas fa-star"
                                // fractions={review.rate}
                                    readonly
                                />
                                
                            </Card.Text>
                            <Card.Text className="text-primary">
                                {review.massage}
                            </Card.Text>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>

        </div>
    );
};

export default Reviews;