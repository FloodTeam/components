# floodteam-select-lost-reason



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default        |
| ---------- | ---------- | ----------- | --------- | -------------- |
| `disabled` | `disabled` |             | `boolean` | `false`        |
| `jobId`    | `job-id`   |             | `string`  | `undefined`    |
| `name`     | `name`     |             | `string`  | `"lostReason"` |
| `value`    | `value`    |             | `string`  | `undefined`    |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `fireenjinSubmit`  |             | `CustomEvent<FireEnjinSubmitEvent>`  |
| `fireenjinTrigger` |             | `CustomEvent<FireEnjinTriggerInput>` |


## Dependencies

### Depends on

- ion-chip
- ion-icon
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-select-lost-reason --> ion-chip
  floodteam-select-lost-reason --> ion-icon
  floodteam-select-lost-reason --> ion-label
  ion-chip --> ion-ripple-effect
  style floodteam-select-lost-reason fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
