import React, {useState} from 'react';
import styles from './ReviewsSection.module.css';
import SearchReviewSection from '../search-review-section/SearchReviewSection';
import ReviewCard from '../review-card/ReviewCard';

function ReviewsSection({details}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [stars, setStars] = useState(0);

    const {users_reviews} = details;
    let reviews = users_reviews;

    if (stars)
        reviews = reviews.filter((review) => parseInt(review.rating) === stars);

    if (searchTerm.length) {
        reviews = reviews.filter((review) =>
            review.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <main className={styles.mainContainer}>
            <p className={styles.header}>Reviews</p>
            <SearchReviewSection
                setSearchTerm={setSearchTerm}
                setStars={setStars}
            />
            <div className={styles.reviewsContainer}>
                {reviews.length ? (
                    reviews.map((review, idx) => {
                        return (
                            <ReviewCard
                                key={idx}
                                review={review}
                            />
                        );
                    })
                ) : (
                    <h2 style={{textAlign: 'center'}}>
                        No reviews matching to {searchTerm} <br/>
                        No reviews matched your search. Try searching with
                        another term.
                    </h2>
                )}
            </div>
        </main>
    );
}

export default ReviewsSection;
