# Simple module federation example

- Module Federation
- React
- Effector

### How to start

`yarn install` - install dependencies

`yarn start` - run home and nav apps

### About

`/packages/data` -> remote app

`/packages/dynamic` -> host app

`/packages/home` -> host app

`/packages/nav` -> remote app

### More info

`data` app exposes values, fn, class, component

`dynamic` app dynamicly load React component

`home` gets Header from remote `nav`, values from remote `data` and render it on page

`nav` app exposes `Header` component

### State manager

Effector state manager was used to share state between `home` and `nav`

model -> `home/src/feature/cart/model`

to connect -> `import model from "home/cart";`
