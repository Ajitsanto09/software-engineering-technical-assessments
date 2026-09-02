import './Scorecard.css';

function Scorecard({ results, isComplete }) {
  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

  const winningVoteCount = Math.max(
    ...results.map(({ votes }) => Number(votes))
  );

  let scores = [];
  for (let i=0; i < results.length; i++) {
    const isWinner = isComplete && Number(results[i].votes) === winningVoteCount;

    scores.push(
      <tr key={i} className={isWinner ? 'Scorecard-winner' : undefined}>
        <td>{results[i].party}</td>
        <td>{results[i].candidateName}</td>
        <td>{results[i].votes}</td>
      </tr>
    )
  }

  return (
    <div className="Scorecard">
        <table className="Scorecard-table">
          <thead>
            <tr>
              <th>Party</th>
              <th>Candidate</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {scores}
          </tbody>
        </table>
    </div>
  );
}

export default Scorecard;
