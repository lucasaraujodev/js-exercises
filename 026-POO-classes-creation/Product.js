class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

/* testing */

const watch = new Product("pulse watch", "...", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(50)
console.log(watch)
console.log(priceWithDiscount)


