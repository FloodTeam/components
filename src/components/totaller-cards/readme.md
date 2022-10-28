# floodteam-totaller-cards



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                          | Default     |
| ------------ | ------------- | ----------- | ----------------------------- | ----------- |
| `totallerId` | `totaller-id` |             | `string`                      | `undefined` |
| `totals`     | --            |             | `{ [sumName: string]: any; }` | `undefined` |


## Events

| Event            | Description | Type                               |
| ---------------- | ----------- | ---------------------------------- |
| `fireenjinFetch` |             | `CustomEvent<FireEnjinFetchEvent>` |


## Dependencies

### Used by

 - [floodteam-totaller-card-list](../totaller-card-list)

### Depends on

- ion-card

### Graph
```mermaid
graph TD;
  floodteam-totaller-cards --> ion-card
  ion-card --> ion-ripple-effect
  floodteam-totaller-card-list --> floodteam-totaller-cards
  style floodteam-totaller-cards fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
