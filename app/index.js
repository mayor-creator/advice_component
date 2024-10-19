const adviceId = document.getElementById("advice");
const adviceBtn = document.getElementById("advice_btn");
const adviceNumber = document.getElementById("advice_number");
const adviceMessage = document.getElementById("advice_message");

const generatorAdvice = () => {
	const id = adviceId.value;
	const getData = fetch(`https://api.adviceslip.com/advice/${id}`);
	getData
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			const adviceData = json.slip;
			adviceNumber.innerHTML = `Advice# ${adviceData.id}`;
			adviceMessage.innerHTML = `"${adviceData.advice}"`;
		})
		.catch((error) => {
			console.log(error);
		});
};

adviceBtn.addEventListener("click", generatorAdvice);
