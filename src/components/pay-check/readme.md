# floodteam-pay-check



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `amount`    | `amount`     |             | `number`  | `undefined` |
| `apiKey`    | `api-key`    |             | `string`  | `undefined` |
| `loading`   | `loading`    |             | `boolean` | `false`     |
| `paymentId` | `payment-id` |             | `string`  | `undefined` |
| `url`       | `url`        |             | `string`  | `undefined` |
| `userId`    | `user-id`    |             | `string`  | `undefined` |


## Events

| Event                 | Description | Type               |
| --------------------- | ----------- | ------------------ |
| `ftCancel`            |             | `CustomEvent<any>` |
| `ftCheckConfirmation` |             | `CustomEvent<any>` |
| `ftCheckError`        |             | `CustomEvent<any>` |
| `ftCheckScan`         |             | `CustomEvent<any>` |
| `ftSubmitCheck`       |             | `CustomEvent<any>` |


## Methods

### `confirmPayment(options?: {}) => Promise<any>`



#### Returns

Type: `Promise<any>`



### `flipCard() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openCamera() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [floodteam-epay](../epay)

### Depends on

- [floodteam-error](../error)
- [floodteam-flip-card](../flip-card)
- ion-grid
- ion-row
- ion-col
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-pay-check --> floodteam-error
  floodteam-pay-check --> floodteam-flip-card
  floodteam-pay-check --> ion-grid
  floodteam-pay-check --> ion-row
  floodteam-pay-check --> ion-col
  floodteam-pay-check --> ion-button
  floodteam-error --> ion-item
  floodteam-error --> ion-icon
  floodteam-error --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  floodteam-flip-card --> ion-icon
  ion-button --> ion-ripple-effect
  floodteam-epay --> floodteam-pay-check
  style floodteam-pay-check fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
