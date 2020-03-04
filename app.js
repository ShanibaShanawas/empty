const form = document.querySelector('#the-form-html');

form.addEventListener('submit', (e) => {
e.preventDefault(); // viktigt

const input = document.querySelector('#input-in-form');

//conditionel statement
if(input.value === '') {
    alert('Du har inte skrivit in någonting ännu');
} else {
    alert(input.value);
}
});