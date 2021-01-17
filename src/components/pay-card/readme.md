# floodteam-pay-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `stripeKey`   | `stripe-key`   |             | `string` | `undefined` |
| `stripeStyle` | `stripe-style` |             | `any`    | `undefined` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `ftCancel`     |             | `CustomEvent<any>` |
| `ftCardError`  |             | `CustomEvent<any>` |
| `ftSubmitCard` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [floodteam-epay](../epay)

### Depends on

- [floodteam-error](../error)
- ion-grid
- ion-row
- ion-col
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-pay-card --> floodteam-error
  floodteam-pay-card --> ion-grid
  floodteam-pay-card --> ion-row
  floodteam-pay-card --> ion-col
  floodteam-pay-card --> ion-button
  floodteam-error --> ion-item
  floodteam-error --> ion-icon
  floodteam-error --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  floodteam-epay --> floodteam-pay-card
  style floodteam-pay-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
