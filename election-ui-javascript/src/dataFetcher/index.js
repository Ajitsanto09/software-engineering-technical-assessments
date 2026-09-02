import { fetchResultData, fetchCandidateData } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const results = await fetchResultData();
  const candidateData = fetchCandidateData();

  return {
    ...results,
    results: results.results.map((result) => {
      const candidate = candidateData.find(({ id }) => id === result.candidateId);

      return {
        ...result,
        candidateName: candidate ? candidate.name : undefined
      };
    })
  };
}

export default fetchResults;
