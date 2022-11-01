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



### `openCamera(scanningBack?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [floodteam-epay](../epay)

### Depends on

- [floodteam-error](../error)
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-pay-check --> floodteam-error
  floodteam-pay-check --> ion-button
  floodteam-error --> ion-item
  floodteam-error --> ion-icon
  floodteam-error --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-button --> ion-ripple-effect
  floodteam-epay --> floodteam-pay-check
  style floodteam-pay-check fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
