# floodteam-input-address



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                              | Type                                                                                                                                                                                      | Default     |
| ------------- | ------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `label`       | `label`       | The label of the input field             | `string`                                                                                                                                                                                  | `undefined` |
| `name`        | `name`        | The name attribute of the input          | `string`                                                                                                                                                                                  | `undefined` |
| `placeholder` | `placeholder` | The placeholder text for the input field | `string`                                                                                                                                                                                  | `undefined` |
| `required`    | `required`    | Whether the address input is required    | `boolean`                                                                                                                                                                                 | `undefined` |
| `value`       | --            | The value of the input field             | `{ __typename?: "Address"; placeId?: string; lat?: number; lng?: number; full?: string; street?: string; unit?: string; city?: string; state?: string; zip?: string; country?: string; }` | `{}`        |


## Events

| Event                       | Description | Type               |
| --------------------------- | ----------- | ------------------ |
| `floodteamAddressMode`      |             | `CustomEvent<any>` |
| `floodteamUpdateAutoHeight` |             | `CustomEvent<any>` |
| `ionInput`                  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [floodteam-payment-methods](../payment-methods)

### Depends on

- ion-item
- ion-label
- ion-input
- ion-grid
- ion-row
- ion-col
- [floodteam-input-state](../input-state)
- ion-button
- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-input-address --> ion-item
  floodteam-input-address --> ion-label
  floodteam-input-address --> ion-input
  floodteam-input-address --> ion-grid
  floodteam-input-address --> ion-row
  floodteam-input-address --> ion-col
  floodteam-input-address --> floodteam-input-state
  floodteam-input-address --> ion-button
  floodteam-input-address --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  floodteam-input-state --> ion-select
  floodteam-input-state --> ion-select-option
  ion-button --> ion-ripple-effect
  floodteam-payment-methods --> floodteam-input-address
  style floodteam-input-address fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
