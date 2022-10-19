const items = JSON.parse(sessionStorage.getItem('receiptitem'));
const totalprice = items.reduce((acc, item) => acc += item.totalprice, 0)
const receiptbody = document.getElementById('receiptbody');
let receipthtml = ""

items.forEach((item) => {
    receipthtml += `
    <tr>
    <td>
    ${item.name}
    </td>
    <td>
    ${item.addon}
    </td>
    <td>
    ${item.quantity}
    </td>
    <td>
    $${item.totalprice}
    </td>
    </tr>
    `
})
receipthtml += `    
<tr>
<td>Total price:</td>
<td></td>
<td></td>
<td>$${totalprice}</td>
</tr>`
receiptbody.innerHTML = receipthtml;


