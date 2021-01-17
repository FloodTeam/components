# floodteam-flip-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `backImage`   | `back-image`   |             | `string`  | `undefined` |
| `flipped`     | `flipped`      |             | `boolean` | `false`     |
| `frontImage`  | `front-image`  |             | `string`  | `undefined` |
| `hideRefresh` | `hide-refresh` |             | `boolean` | `false`     |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `floodteamFlip` |             | `CustomEvent<any>` |


## Methods

### `flip(event?: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [floodteam-pay-check](../pay-check)

### Depends on

- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-flip-card --> ion-icon
  floodteam-pay-check --> floodteam-flip-card
  style floodteam-flip-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
