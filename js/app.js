const showCart = () => {
  const cart = document.getElementsByClassName("lista-compra")[0].style
  cart.display = cart.display === "none" ? "block" : "none"
}