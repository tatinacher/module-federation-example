import { createEvent, createStore } from "effector";

const $cart = createStore(0);
const incrementCart = createEvent();

$cart.on(incrementCart, (state) => state + 1);

export default { $cart, incrementCart };
