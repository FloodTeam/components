# floodteam-select-status



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `disabled` | `disabled` |             | `boolean` | `false`     |
| `jobId`    | `job-id`   |             | `string`  | `undefined` |
| `name`     | `name`     |             | `string`  | `"status"`  |
| `value`    | `value`    |             | `string`  | `undefined` |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `fireenjinSubmit`  |             | `CustomEvent<FireEnjinSubmitEvent>`  |
| `fireenjinTrigger` |             | `CustomEvent<FireEnjinTriggerInput>` |


## Dependencies

### Used by

 - [floodteam-item-job](../item-job)

### Depends on

- ion-chip
- ion-icon
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-select-status --> ion-chip
  floodteam-select-status --> ion-icon
  floodteam-select-status --> ion-label
  ion-chip --> ion-ripple-effect
  floodteam-item-job --> floodteam-select-status
  style floodteam-select-status fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
