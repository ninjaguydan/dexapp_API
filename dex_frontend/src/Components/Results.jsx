import ResultCard from "./Buttons/ResultCard"

const Results = ({ results }) => {
	return (
		<>
			<h3 className="header2">Showing all types from each generation</h3>
			<div className="result-container">
				{results.map((result) => {
					return <ResultCard key={result.id} id={result.id} art_url={result.art_url} name={result.name} />
				})}
			</div>
		</>
	)
}

export default Results
