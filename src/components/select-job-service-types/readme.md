# floodteam-select-job-service-types



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type       | Default          |
| ------------ | ------------- | ----------- | ---------- | ---------------- |
| `disabled`   | `disabled`    |             | `boolean`  | `false`          |
| `icon`       | `icon`        |             | `string`   | `"reader"`       |
| `jobId`      | `job-id`      |             | `string`   | `undefined`      |
| `locationId` | `location-id` |             | `string`   | `undefined`      |
| `name`       | `name`        |             | `string`   | `"serviceTypes"` |
| `value`      | --            |             | `string[]` | `undefined`      |


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
  floodteam-select-job-service-types --> ion-chip
  floodteam-select-job-service-types --> ion-icon
  floodteam-select-job-service-types --> ion-label
  ion-chip --> ion-ripple-effect
  floodteam-item-job --> floodteam-select-job-service-types
  style floodteam-select-job-service-types fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
