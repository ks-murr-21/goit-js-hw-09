const formEl = document.querySelector('.feedback-form');
const keyState = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(keyState)) || {
  email: '',
  message: '',
};

for (const key in formData) {
  formEl.elements[key].value = formData[key];
}

const onInput = ({ target: { name, value } }) => {
  formData[name] = value.trim();
  localStorage.setItem(keyState, JSON.stringify(formData));
};
const onSubmit = evt => {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  formEl.reset();
  localStorage.removeItem(keyState);
  formData.email = '';
  formData.message = '';
};

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);