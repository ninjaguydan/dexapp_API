import Review from "./Review"

function ReviewList({ reviews }) {
	if (reviews.length === 0) {
		return (
			<p className="card" style={{ textAlign: "center", display: "block" }}>
				No reviews yet!
			</p>
		)
	}

	return (
		<>
			{reviews.map((review) => {
				return <Review review={review} key={review.id} />
			})}
		</>
	)
}

export default ReviewList
