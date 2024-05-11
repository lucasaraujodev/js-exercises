export class Component {
    #element = null

    constructor(tag, parent, options) {
    // options é qualquer atributo do html (classes, ids, etc...)
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
    }

    getElement() {
        // tornando #element um método de leitura pública. Não é possível acessá-lo para alterá-lo, mas pode ser lido.
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.#element.append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}

