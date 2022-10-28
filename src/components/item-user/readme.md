# floodteam-item-user



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `disabled` | `disabled` |             | `boolean` | `false`     |
| `jobId`    | `job-id`   |             | `string`  | `undefined` |
| `role`     | `role`     |             | `string`  | `undefined` |
| `user`     | `user`     |             | `any`     | `undefined` |


## Events

| Event             | Description | Type                                |
| ----------------- | ----------- | ----------------------------------- |
| `fireenjinSubmit` |             | `CustomEvent<FireEnjinSubmitEvent>` |


## Dependencies

### Depends on

- ion-item-sliding
- ion-item
- fireenjin-avatar
- ion-label
- [floodteam-select-role](../select-role)
- ion-item-options
- ion-item-option
- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-item-user --> ion-item-sliding
  floodteam-item-user --> ion-item
  floodteam-item-user --> fireenjin-avatar
  floodteam-item-user --> ion-label
  floodteam-item-user --> floodteam-select-role
  floodteam-item-user --> ion-item-options
  floodteam-item-user --> ion-item-option
  floodteam-item-user --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  floodteam-select-role --> ion-chip
  ion-chip --> ion-ripple-effect
  ion-item-option --> ion-ripple-effect
  style floodteam-item-user fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
