const adviceId = document.getElementById("advice");
const adviceBtn = document.getElementById("advice_btn");
const adviceNumber = document.getElementById("advice_number");
const adviceMessage = document.getElementById("advice_message");
const dialog = document.getElementById("dialog");
const dialog_btn = document.getElementById("dialog_btn");

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

const showDialog = () => {
	dialog.showModal();
};

const closeDialog = () => {
	dialog_btn.addEventListener("click", function () {
		dialog.close();
	});
};

adviceBtn.addEventListener("click", generatorAdvice);

/* 
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
*/
