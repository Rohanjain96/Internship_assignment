console.log("working")

const selectedproduct = document.getElementById("selectproduct");
const selectedaddon = document.getElementById("selectaddon");
const yourboughtitemlist = document.getElementById("yourboughtitems");
let tablebody = "";
let quantitytext = document.getElementById("quantity");
let selectproductvalue = "defaultselect";
let selectaddonvalue = "defaultselect";
let quantity = 1
quantitytext.textContent = quantity
class Product {
    constructor(name, addon) {
        this.name = name
        this.addon = addon
        this.setPrice(name, addon)
    }

    setPrice(name, addon) {
        if (name == "expresso" && addon == "milk") {
            this.price = 60
        }
        else if (name == "expresso" && addon == "cream") {
            this.price = 75
        }
        else if (name == "expresso" && addon == "latte") {
            this.price = 100
        }
        else if (name == "capuccino" && addon == "milk") {
            this.price = 80
        }
        else if (name == "capuccino" && addon == "cream") {
            this.price = 90
        }
        else if (name == "capuccino" && addon == "latte") {
            this.price = 125
        }
        else if (name == "latte" && addon == "milk") {
            this.price = 100
        }
        else if (name == "latte" && addon == "cream") {
            this.price = 125
        }
        else if (name == "latte" && addon == "latte") {
            this.price = 150
        }
    }
}

class Order extends Product {
    constructor(name, addon, qty) {
        super(name, addon)
        this.qty = qty
        this.totalprice = this.qty * this.price
    }
    productDetails() {
        return {
            name: this.name,
            addon: this.addon,
            price: this.price,
            quantity: this.qty,
            totalprice: this.totalprice
        }
    }
}

class GenerateBill {
    constructor() {
        this.orders = []
    }

    addOrder(name, addon, qty) {
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].name == name && this.orders[i].addon == addon) {
                this.orders[i].quantity = this.orders[i].quantity + qty;
                this.orders[i].totalprice = this.orders[i].quantity * this.orders[i].price;
                console.log(this.orders)
                return;
            }
        }
        const newOrder = new Order(name, addon, qty)
        this.orders.push(newOrder.productDetails())
        console.log(this.orders)
    }

    getAllOrders() {
        return { allorders: this.orders }
    }
}

const bill = new GenerateBill()
function changedproductvalue() {
    selectproductvalue = selectedproduct.value
    if (selectproductvalue != "defaultselect") {
        selectedaddon.disabled = false
    }
    else {
        selectedaddon.disabled = true;
    }
}

function changedaddonvalue() {
    selectaddonvalue = selectedaddon.value 
    if (selectaddonvalue == "defaultselect") {
        return;
    }
}

function increment() {
    quantity = quantity + 1;
    quantitytext.textContent = quantity
}
function decrement() {
    if (quantity == 1) return;
    quantity = quantity - 1;
    quantitytext.textContent = quantity
}

function addtolist() {
    if (selectaddonvalue == "defaultselect" || selectproductvalue == "defaultselect") {
        return;
    }
    bill.addOrder(selectproductvalue,selectaddonvalue,quantity)
    selectedproduct.selectedIndex = 0
    selectedaddon.selectedIndex = 0
    selectedaddon.disabled = true;
    showtable()
    }

function showtable() {
    const {allorders} = bill.getAllOrders()
    tablebody = ""
    allorders.forEach((item) => {
        tablebody += ` <tr>
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
    </tr>`})

    yourboughtitemlist.innerHTML = tablebody
}

function generatereceipt() {
    const {allorders} = bill.getAllOrders()
    if (allorders.length > 0) {
        sessionStorage.setItem('receiptitem', JSON.stringify(allorders));
        window.location = "receipt.html"
    }
}



