import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  // if cart data is in database, you have to use async await

  const storedCart = getShoppingCart();
  const saveCart = [];
  // console.log(storedCart);
  for (const id in storedCart) {
    const addedProducts = products.find((pd) => pd.id === id);
    if (addedProducts) {
      const qantity = storedCart[id];
      addedProducts.qantity = qantity;
      saveCart.push(addedProducts);
    }
  }

  // if you need to send two things
  // return [products, savedCart]
  // another options
  // return { products, cart: savedCart }
  return saveCart;
};
export { cartProductLoader };
