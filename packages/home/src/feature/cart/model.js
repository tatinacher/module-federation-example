import { createEffect, createStore } from "effector";

const $cart = createStore(5);

const incrementCart = createEffect();

$cart.on(incrementCart, (state) => state + 1);

$cart.subscribe(() => console.log("in home"));
export default { $cart, incrementCart };
