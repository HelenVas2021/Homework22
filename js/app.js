let users = initialLoad();

function initialLoad() {
  let user = JSON.parse(localStorage.getItem('users'));
  if (user === null) {
    return defaultUsers;
  }
  return user;
}

function showName() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  const allInfo = document.getElementById('allInfo');
  allInfo.innerHTML = '';
  for (let i = 0; i < users.length; i++) {
    const element = document.createElement('div');
    const elemName = document.createElement('div');
    const buttonEdit = document.createElement('button');
    const buttonRemove = document.createElement('button');
    const buttonView = document.createElement('button');
    elemName.textContent = users[i].formName;
    elemName.setAttribute('data-userName', i);
    buttonEdit.textContent = 'Edit';
    buttonRemove.textContent = 'Remove';
    buttonView.textContent = 'View';
    buttonEdit.setAttribute('data-buttonEdit', i);
    buttonRemove.setAttribute('data-buttonRemove', i);
    buttonView.setAttribute('data-buttonView', i);
    buttonView.addEventListener('click', showDataUser);
    buttonRemove.addEventListener('click', showModalWindow);
    buttonEdit.addEventListener('click', editDataUser);
    container.appendChild(element);
    element.appendChild(elemName);
    element.appendChild(buttonEdit);
    element.appendChild(buttonRemove);
    element.appendChild(buttonView);
  }
  allInfo.className = "hidden";
}

function showDataUser(event) {
  const viewIndex = event.target.getAttribute('data-buttonView');
  const form = document.getElementById('userForm');
  const container = document.querySelector('.main');
  const index = users[viewIndex];
  const allInfo = document.getElementById('allInfo');
  allInfo.innerHTML = '';
  allInfo.innerHTML = `<br>Name : ${index.formName}</br> <br>Password : ${index.password}</br><br> Age : ${index.age}</br>
  <br>Email : ${index.email}</br> <br>Phone Number : ${index.phoneNumber} </br><br> Credit Card : ${index.numberCreditCard}</br>`;
  container.appendChild(allInfo);
  allInfo.className = "view";
  form.className = 'hidden';
}

function editDataUser(event) {
  const currentIndex = event.target.getAttribute('data-buttonEdit');
  const allInfo = document.getElementById('allInfo');
  const form = document.getElementById('userForm');
  const index = users[currentIndex];
  const userName = document.getElementById('formName');
  const password = document.getElementById('password');
  const age = document.getElementById('age');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');
  const numberCreditCard = document.getElementById('numberCreditCard');
  const saveBtn = document.getElementById('btnSave');
  userName.value = index.formName;
  password.value = index.password;
  age.value = index.age;
  email.value = index.email;
  phoneNumber.value = index.phoneNumber;
  numberCreditCard.value = index.numberCreditCard;
  form.className = 'view';
  allInfo.className = 'hidden';
  saveBtn.addEventListener('click', saveInfo);
  saveBtn.setAttribute('data-saveBtn', currentIndex);
}

function saveInfo(event) {
  const form = document.getElementById('userForm');
  const index = event.target.getAttribute('data-saveBtn');
  const userInfo = {
    formName: document.forms[0].elements.formName.value,
    password: document.forms[0].elements.password.value,
    age: document.forms[0].elements.age.value,
    email: document.forms[0].elements.email.value,
    phoneNumber: document.forms[0].elements.phoneNumber.value,
    numberCreditCard: document.forms[0].elements.numberCreditCard.value,
  }

  if (checkValidate(userInfo)) {
    return;
  }
  users[index].formName = userInfo.formName;
  users[index].password = userInfo.password;
  users[index].age = userInfo.age;
  users[index].email = userInfo.email;
  users[index].phoneNumber = userInfo.phoneNumber;
  users[index].numberCreditCard = userInfo.numberCreditCard;

  localStorage.setItem('users', JSON.stringify(users));
  showName();
  form.className = 'hidden';
}

document.getElementById('btnAdd').addEventListener('click', addUser);

function addUser() {
  const saveBtn = document.getElementById('btnSave');
  const form = document.getElementById('userForm');
  form.className = 'view';
  saveBtn.addEventListener('click', saveAddUser);
}

function saveAddUser() {
  const userInfo = {
    formName: document.forms[0].elements.formName.value,
    password: document.forms[0].elements.password.value,
    age: document.forms[0].elements.age.value,
    email: document.forms[0].elements.email.value,
    phoneNumber: document.forms[0].elements.phoneNumber.value,
    numberCreditCard: document.forms[0].elements.numberCreditCard.value,
  }
  defaultValue(userInfo);

  if (checkValidate(userInfo)) {
    return;
  }
  users.push(userInfo);
  localStorage.setItem('users', JSON.stringify(users));

  const form = document.getElementById('userForm');
  form.className = 'hidden';
  showName();
}

showName();


