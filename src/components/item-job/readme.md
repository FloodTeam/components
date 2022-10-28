# floodteam-item-job



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type                          | Default     |
| --------- | ---------- | ----------- | ----------------------------- | ----------- |
| `isAdmin` | `is-admin` |             | `boolean`                     | `false`     |
| `job`     | `job`      |             | `any`                         | `undefined` |
| `lines`   | `lines`    |             | `"full" \| "inset" \| "none"` | `"inset"`   |


## Dependencies

### Depends on

- ion-item
- fireenjin-avatar
- ion-label
- fireenjin-chip-bar
- [floodteam-select-status](../select-status)
- [floodteam-select-location](../select-location)
- ion-chip
- ion-icon
- ion-router-link
- [floodteam-select-job-service-types](../select-job-service-types)

### Graph
```mermaid
graph TD;
  floodteam-item-job --> ion-item
  floodteam-item-job --> fireenjin-avatar
  floodteam-item-job --> ion-label
  floodteam-item-job --> fireenjin-chip-bar
  floodteam-item-job --> floodteam-select-status
  floodteam-item-job --> floodteam-select-location
  floodteam-item-job --> ion-chip
  floodteam-item-job --> ion-icon
  floodteam-item-job --> ion-router-link
  floodteam-item-job --> floodteam-select-job-service-types
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  floodteam-select-status --> ion-chip
  floodteam-select-status --> ion-icon
  floodteam-select-status --> ion-label
  ion-chip --> ion-ripple-effect
  floodteam-select-location --> ion-chip
  floodteam-select-location --> ion-icon
  floodteam-select-location --> ion-label
  floodteam-select-job-service-types --> ion-chip
  floodteam-select-job-service-types --> ion-icon
  floodteam-select-job-service-types --> ion-label
  style floodteam-item-job fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
