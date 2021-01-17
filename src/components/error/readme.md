# floodteam-error



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                  | Type     | Default                  |
| ---------- | ----------- | ---------------------------- | -------- | ------------------------ |
| `color`    | `color`     | The color of the component   | `string` | `"danger"`               |
| `iconName` | `icon-name` | The icon to use              | `string` | `"alert-circle-outline"` |
| `message`  | `message`   | The error message to display | `string` | `undefined`              |


## Dependencies

### Used by

 - [floodteam-epay](../epay)
 - [floodteam-graph-pay-splits](../graph-pay-splits)
 - [floodteam-pay-card](../pay-card)
 - [floodteam-pay-check](../pay-check)
 - [floodteam-payment-methods](../payment-methods)

### Depends on

- ion-item
- ion-icon
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-error --> ion-item
  floodteam-error --> ion-icon
  floodteam-error --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  floodteam-epay --> floodteam-error
  floodteam-graph-pay-splits --> floodteam-error
  floodteam-pay-card --> floodteam-error
  floodteam-pay-check --> floodteam-error
  floodteam-payment-methods --> floodteam-error
  style floodteam-error fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
