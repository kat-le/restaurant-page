import "./menu.css"

export default function () {
    const menuContainer = createDiv("menu-container")
    const menuContent = createDiv("menu-content")
    menuContent.appendChild(createMenuHeader())

    const menu = createDiv("menu")
    menu.appendChild(createSavoryMenu())
    menu.appendChild(createSweetMenu())
    menu.appendChild(createDrinksMenu())
    menuContent.appendChild(menu)
    menuContainer.appendChild(menuContent)

    return menuContainer
}

function createMenuHeader() {
    const menuHead = createDiv("menu-head")
    const p = document.createElement("p")
    p.textContent = "Menu"
    const menuText = document.createElement("p")
    menuText.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    const headImgs = createDiv("menu-head-imgs")
    headImgs.appendChild(createDiv("menu-img"))
    const menuDiv = createDiv("menu-right")
    menuDiv.appendChild(p)
    menuDiv.appendChild(menuText)
    menuHead.appendChild(menuDiv)
    menuHead.appendChild(headImgs)
    return menuHead
}
 
function createMenuItem(dishName, dishDesc) {
    const div = document.createElement("div")
    div.className = "item"
    const dish = document.createElement("p")
    const description = document.createElement("p")
    dish.textContent = dishName
    description.textContent = dishDesc
    div.appendChild(dish)
    div.appendChild(description)
    return div
}

function createDiv(divName) {
    const div = document.createElement("div")
    div.className = divName
    return div
}

function createSavoryMenu() {
    const menu = createDiv("menu-savory")
    const top = createDiv("savory-top")
    const savoryImg = createDiv("savory-img")
    const category = createDiv("menu-category")
    category.textContent = "Savory"
    const menuItems = createDiv("menu-items")
    menuItems.appendChild(createMenuItem("Artisan Cheese Board", "An assortment of handcrafted cheeses paired with toasted baguette slices, proscuitto wrapped rosemary breadsticks, and local honey."))
    menuItems.appendChild(createMenuItem("Classic Eggs Benedict", "Poached eggs and Canadian bacon on a toasted English muffin with creamy hollandaise sauce, served with arugula and avocado."))
    menuItems.appendChild(createMenuItem("Garden Veggie Hash", "Crispy potatoes sautéed with seasonal vegetables, herbs, and topped with two eggs."))
    menuItems.appendChild(createMenuItem("Mediterranean Omelette", "Three-egg omelette filled with spinach, feta cheese, roasted peppers, and olives."))
    top.append(category)
    top.appendChild(savoryImg)
    top.appendChild(menuItems)

    const bottom = createDiv("savory-bottom")
    const menuItems2 = createDiv("menu-items")
    menuItems2.appendChild(createMenuItem("Pesto Pasta", "Spaghetti pasta tossed with basil pesto, parmesan, and toasted pine nuts. Topped with buratta cheese."))
    menuItems2.appendChild(createMenuItem("Shrimp Scampi Linguine", "Linguine with sautéed shrimp, garlic, lemon butter, parsley, and a hint of white wine."))
    menuItems2.appendChild(createMenuItem("Smoked Salmon Bagel", "Everything bagel layered with herb cream cheese, smoked salmon, capers, red onion, and dill."))
    menuItems2.appendChild(createMenuItem("Avocado Toast Deluxe", "Sourdough topped with smashed avocado, cherry tomatoes, feta, microgreens, and chili flakes."))
    const pasta = createDiv("pasta-img")
    bottom.appendChild(menuItems2)
    bottom.appendChild(pasta)

    menu.appendChild(top)
    menu.appendChild(bottom)

    return menu

}

function createSweetMenu() {
    const menu = createDiv("menu-sweet")
    const category = createDiv("menu-category")
    category.textContent = "Sweet"
    const croissant = createDiv("croissant-img")
    const menuItems = createDiv("menu-items")

    menuItems.appendChild(createMenuItem("Butter Croissant", "Flaky butter croissant served warm with butter and your choice of house-made jam."))
    menuItems.appendChild(createMenuItem("Belgian Waffles", "Light and crispy waffles served with whipped cream, fresh berries, and maple syrup."))
    menuItems.appendChild(createMenuItem("Berry Granola Bowl", "Greek yogurt topped with granola, strawberries, blueberries, raspberries, chia seeds, and local honey."))
    menuItems.appendChild(createMenuItem("Buttermilk Pancakes", "A stack of pancakes topped with butter, maple syrup, and powdered sugar."))
    menuItems.appendChild(createMenuItem("Blueberry Lemon Ricotta Pancakes", "Fluffy ricotta pancakes bursting with blueberries and finished with lemon zest."))
    menuItems.appendChild(createMenuItem("Strawberries & Nutella Crepes", "Delicate crepes filled with Nutella and fresh strawberries. Topped with whipped cream."))
    menuItems.appendChild(createMenuItem("Banana Foster French Toast", "Thick brioche French toast topped with caramelized bananas and cinnamon butter."))
    menu.appendChild(category)
    menu.appendChild(croissant)
    menu.appendChild(menuItems)

    return menu
}

function createDrinksMenu() {
    const menu = createDiv("menu-drinks")
    const category = createDiv("menu-category")
    category.textContent = "Beverages"

    const menuItems = createDiv("menu-items")
    menuItems.appendChild(createMenuItem("Iced Honey Oat Latte", "Espresso shaken with creamy oat milk and a touch of local honey, served over ice."))
    menuItems.appendChild(createMenuItem("Dalgona Coffee", "Whipped coffee served over chilled milk with a light dusting of cocoa for a creamy, velvety finish."))
    menuItems.appendChild(createMenuItem("Matcha Latte", "Premium ceremonial matcha whisked with steamed milk."))


    const coffee = createDiv("coffee-img")
    const menuItems2 = createDiv("menu-items")

    menuItems2.appendChild(createMenuItem("Peach Bellini", "Sparkling Prosecco blended with sweet white peach purée for a light and fruity cocktail."))
    menuItems2.appendChild(createMenuItem("Honey Bee Mimosa", "Fresh orange juice, sparkling wine, and a touch of honey with a rosemary garnish."))
    menuItems2.appendChild(createMenuItem("Espresso Martini", "Vodka, espresso, and coffee liqueur shaken until smooth with a rich, velvety foam."))
    menuItems2.appendChild(createMenuItem("English Breakfast Tea", "A bold black tea with a rich, full-bodied flavor, served hot with milk or lemon."))

    const tea = createDiv("tea-img")

    menu.appendChild(category)
    menu.appendChild(menuItems)
    menu.appendChild(coffee)
    menu.appendChild(menuItems2)
    menu.appendChild(tea)


    return menu
}