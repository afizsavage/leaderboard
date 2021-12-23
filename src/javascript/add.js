const getFormData = () => {
  const name = document.querySelector('input[type = "text"]').value;
  const score = document.getElementById('score').value;

  const formData = { userName: name, userScore: score };
  return formData;
};

const addScoreToAPI = async (nameArg, scoreArg) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/C1YVwF2qfkI9ZCq4djAP/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: nameArg,
        score: scoreArg,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const resMsg = await response.json();
  return resMsg;
};

const addScore = () => {
  const { userName, userScore } = getFormData();
  addScoreToAPI(userName, userScore);
};

export default addScore;
