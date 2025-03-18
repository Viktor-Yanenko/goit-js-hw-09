const form = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

function saveToLocalStorage() {
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
