
const validate = {
	formName: /[A-Za-z]{1,15}/,
	password: /\w+/,
	age: /[0-9]{1,3}/,
	email: /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
	phoneNumber: /^[0-9]{10}$/,
	numberCreditCard: /^[0-9]{16}$/,
}


function checkValidate(userInfo) {
	let isError = false;
	for (let key in validate) {
		if (validate[key].exec(userInfo[key])) {
			continue;
		} else {
			let elem = document.getElementById(key);
			const error = document.createElement('span');
			error.textContent = 'Change your info!';
			elem.after(error);
			elem.setAttribute('class', 'invalid');
			isError = true;
		}
	}
	return isError;
}

function defaultValue(userInfo) {
	for (let key in userInfo) {
		let item = document.getElementById(key);
		console.log(item);
		if (item.classList.contains('invalid')) {
			item.classList.remove('invalid');
			item.nextElementSibling.remove();
		}
	}
}
