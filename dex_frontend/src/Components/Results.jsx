import ResultCard from "./Buttons/ResultCard"
import Loading from "../Components/Loader/Loading"

const Results = ({ results, isLoading }) => {
	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			<h3 className="header2">Showing all types from each generation</h3>
			<div className="result-container">
				{results.map((result) => {
					return <ResultCard key={result.id} id={result.id} art_url={result.art_url} name={result.name} isLoading={isLoading} />
				})}
			</div>
		</>
	)
}

export default Results
