import { fetchMoviesreviews } from "filmApi";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { AuthorName, Item, List, Text } from "./Reviews.styled";

const Reviews = () => {
    const { id } = useParams()

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetchMoviesreviews(id);
                setReviews(response)
                console.log(response)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchReview()
    },[id])
    return (
        <>
            {error && <div>{error}</div>} 
            <List>
                {reviews.map(review => {
                    return (
                        <Item key={review.id}>
                            <Text><AuthorName>Author: {review.author}</AuthorName></Text>
                            <Text>{review.content}</Text>
                        </Item>
                    )
                })}
            </List>
        </>
    )
}

export default Reviews;