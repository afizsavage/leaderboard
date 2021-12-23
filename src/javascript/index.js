import '../styles/index.css';

const fetchScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/C1YVwF2qfkI9ZCq4djAP/scores'
  );
  const scores = await response.json();
  return scores;
};

const displayScores = (scoresArg) => {
  const listContainer = document.querySelector('ul');

  let listItems = '';
  scoresArg.result.forEach((score) => {
    listItems += `<li>${score.user}: ${score.score}</li>`;
    listContainer.innerHTML = listItems;
  });
};

const load = () => {
  fetchScores().then((scores) => {
    displayScores(scores);
  });
};

window.onload = load;
