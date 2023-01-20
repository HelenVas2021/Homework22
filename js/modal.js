function showModalWindow(event) {
	const item = event.target.getAttribute('data-buttonRemove');
	const btnDelete = document.querySelector('#confirmDelete');
	const refuseDelete = document.querySelector('#refuseDelete');
	const modal = document.querySelector('.modal');
	btnDelete.setAttribute('data-deleteButton', item);
	modal.classList.add('active');
	btnDelete.addEventListener('click', deleteUser);
	refuseDelete.addEventListener('click', refuseUser);
	modal.addEventListener('click', escapeDefault);
	document.addEventListener('keydown', keyDefault);
}

function deleteUser(event) {
	const item = event.target.getAttribute('data-deleteButton');
	const container = document.querySelector('.container');
	const allInfo = document.getElementById('allInfo');
	const modal = document.querySelector('.modal');
	const form = document.getElementById('userForm');
	modal.classList.remove('active');
	users.splice(item, 1);
	container.textContent = '';
	allInfo.className = "hidden";
	form.className = "hidden";
	localStorage.setItem('users', JSON.stringify(users));
	showName();
}

function refuseUser() {
	const modal = document.querySelector('.modal');
	modal.classList.remove('active');
}

function escapeDefault(event) {
	const modal = document.querySelector('.modal');
	if (event.target === modal) {
		modal.classList.remove('active');
	}
}
function keyDefault(event) {
	const modal = document.querySelector('.modal');
	if (event.key === 'Escape') {
		modal.classList.remove('active');
	}
}