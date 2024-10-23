const adviceId = document.getElementById("advice");
const adviceBtn = document.getElementById("advice_btn");
const adviceNumber = document.getElementById("advice_number");
const adviceMessage = document.getElementById("advice_message");
const dialog = document.getElementById("dialog");
const dialog_btn = document.getElementById("dialog_btn");

const generatorAdvice = async () => {
	const id = adviceId.value;
	const getData = fetch(`https://api.adviceslip.com/advice/${id}`);
	try {
		const response = await getData;
		const json = await response.json();
		if (response.ok) {
			if (json.hasOwnProperty("slip")) {
				const adviceData = json.slip;
				adviceNumber.innerHTML = `Advice# ${adviceData.id}`;
				adviceMessage.innerHTML = `"${adviceData.advice}"`;
			} else if (json.hasOwnProperty("message")) {
				showDialog();
				closeDialog();
			}
		}
	} catch (error) {
		console.log(error);
	}
};

const showDialog = () => {
	dialog.showModal();
	dialog.setAttribute("class", "dialogShow");
};

const closeDialog = () => {
	dialog_btn.addEventListener("click", function () {
		dialog.close();
		dialog.removeAttribute("class", "dialogShow");
	});
};

adviceBtn.addEventListener("click", generatorAdvice);
