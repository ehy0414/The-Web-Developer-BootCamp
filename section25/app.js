// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const product = form.elements.product;
const qty = form.elements.qty;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.appendC(`${product.value} ${qty.value}`);
    ul.append(li);

    product.value = '';
    qty.value = '';
})