const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedFormData = localStorage.getItem(LS_KEY);
if (savedFormData) {
  const parsedFormData = JSON.parse(savedFormData);
  formData.email = parsedFormData.email;
  formData.message = parsedFormData.message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

function addToLocalStorage(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(LS_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}

form.addEventListener('input', addToLocalStorage);

form.addEventListener('submit', handleSubmit);
