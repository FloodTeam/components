# floodteam-pin-bar



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default     |
| --------- | --------- | ----------- | --------- | ----------- |
| `pins`    | --        |             | `any[]`   | `undefined` |
| `profile` | `profile` |             | `any`     | `undefined` |
| `reorder` | `reorder` |             | `boolean` | `false`     |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `fireenjinTrigger` |             | `CustomEvent<FireEnjinTriggerInput>` |


## Dependencies

### Used by

 - [floodteam-navigation-footer](../navigation-footer)

### Depends on

- fireenjin-chip-bar
- ion-router-link
- ion-chip
- ion-icon
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-pin-bar --> fireenjin-chip-bar
  floodteam-pin-bar --> ion-router-link
  floodteam-pin-bar --> ion-chip
  floodteam-pin-bar --> ion-icon
  floodteam-pin-bar --> ion-label
  ion-chip --> ion-ripple-effect
  floodteam-navigation-footer --> floodteam-pin-bar
  style floodteam-pin-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
