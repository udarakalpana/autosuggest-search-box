const productsDetails = [
    {productName: 'Milk powder', price: 1200, units: 9},
    {productName: 'Soap', price: 100, units: 12},
    {productName: 'Oats', price: 450, units: 8},
    {productName: 'Biscuts', price: 150, units: 20},
    {productName: 'Cili Powder', price: 250, units: 30},
];

const inputField = document.getElementById('product-input')
const suggesionsContainers = document.getElementById('suggestions')

inputField.addEventListener('input', () => {
    const filteredProduct =  filterProducts(inputField.value)
    displaySuggestions(filteredProduct)
})

// Filteration part
const filterProducts = (inputValue) => {
    return productsDetails.filter((product) => {
        return product.productName.toLowerCase().includes(inputValue)
    })
}

// Suggestions appending
const displaySuggestions = (suggestions) => {

    suggesionsContainers.innerHTML = ''

    suggestions.forEach((product) => {
        const suggestionItem = document.createElement('p')
        suggestionItem.textContent = product.productName
        suggestionItem.addEventListener('click', () => {
            inputField.value = product.productName
            suggesionsContainers.innerHTML = ''
        })

        suggesionsContainers.appendChild(suggestionItem)
    })
}