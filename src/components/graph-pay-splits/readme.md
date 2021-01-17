# floodteam-graph-pay-splits



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type     | Default     |
| ------------ | ------------- | ----------- | -------- | ----------- |
| `graphTitle` | `graph-title` |             | `string` | `undefined` |
| `users`      | --            |             | `any[]`  | `[]`        |


## Methods

### `setUsers(users: any) => Promise<any[]>`



#### Returns

Type: `Promise<any[]>`




## Dependencies

### Depends on

- [floodteam-graph](../graph)
- ion-item
- [floodteam-avatar](../avatar)
- [floodteam-error](../error)
- ion-badge

### Graph
```mermaid
graph TD;
  floodteam-graph-pay-splits --> floodteam-graph
  floodteam-graph-pay-splits --> ion-item
  floodteam-graph-pay-splits --> floodteam-avatar
  floodteam-graph-pay-splits --> floodteam-error
  floodteam-graph-pay-splits --> ion-badge
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  floodteam-error --> ion-item
  floodteam-error --> ion-icon
  floodteam-error --> ion-label
  style floodteam-graph-pay-splits fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
