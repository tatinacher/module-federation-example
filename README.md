# Simple module federation example

- Module Federation
- React
- Effector

### How to start

`yarn install` - install dependencies

`yarn start` - run home and nav apps

### About

`/packages/home` -> host app

`/packages/nav` -> remote app

`nav` app exposes `Header` component

`home` gets Header from remote `nav` and render it on page.

To share state between `home` and `nav` was used Effector state manager

Model -> `home/src/feature/cart/model`

to connect -> `import model from "home/cart";`
