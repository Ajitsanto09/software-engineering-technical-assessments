import { render, screen } from '@testing-library/react';
import Scorecard from '.';

const results = [
  {
    'party': 'Green',
    'candidateId': 2,
    'candidateName': 'Lord Buckethead',
    'votes': '1056'
  }
];

const completedResults = [
  {
    'party': 'Hippo Party',
    'candidateName': 'Baldrick',
    'votes': '1156'
  },
  {
    'party': 'Giraffe Party',
    'candidateName': 'Lord Buckethead',
    'votes': '7000'
  },
  {
    'party': 'Tiger Party',
    'candidateName': 'Count Binface',
    'votes': '10000'
  }
];

test('renders results', async () => {
  render(<Scorecard results={results} />);

  const partyHeading = screen.getByText(/Party/i);
  const candidateHeading = screen.getByText(/Candidate/i);
  const votesHeading = screen.getByText(/Votes/i);

  const party = screen.getByText(/Green/i);
  const candidate = screen.getByText(/Lord Buckethead/i);
  const votes = screen.getByText(/1056/i);

  expect(partyHeading).toBeInTheDocument();
  expect(candidateHeading).toBeInTheDocument();
  expect(votesHeading).toBeInTheDocument();

  expect(party).toBeInTheDocument();
  expect(candidate).toBeInTheDocument();
  expect(votes).toBeInTheDocument();
});

test('renders No Results if there are no results', async () => {
  render(<Scorecard />);
  const noResultsMessage = screen.getByText(/No results/i);
  expect(noResultsMessage).toBeInTheDocument();
});

test('highlights the winner when counting is complete', () => {
  render(<Scorecard results={completedResults} isComplete />);

  const winningRow = screen.getByRole('row', {
    name: /Tiger Party Count Binface 10000/i
  });

  expect(winningRow).toHaveClass('Scorecard-winner');
});
