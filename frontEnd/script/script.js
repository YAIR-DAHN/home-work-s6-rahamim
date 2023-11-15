fetch('http://localhost:3000/products')
.then(response => response.json())
.then(printPro);

function printPro(prod) {
console.log(prod);
const tableBody = document.querySelector('#productTable tbody');
prod.products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
  <td>${product.id}</td>
  <td>${product.title}</td>
  <td>${product.price}$</td>
  <td>${product.brand}</td>
  <td>${product.description}</td>
`;
    tableBody.appendChild(row);
});
}