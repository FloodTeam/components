# floodteam-title-bar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type      | Default     |
| ------------------ | ------------------- | ----------- | --------- | ----------- |
| `back`             | `back`              |             | `string`  | `undefined` |
| `disableUnderline` | `disable-underline` |             | `boolean` | `false`     |
| `heading`          | `heading`           |             | `number`  | `1`         |
| `icon`             | `icon`              |             | `string`  | `undefined` |
| `pin`              | `pin`               |             | `any`     | `undefined` |
| `pins`             | --                  |             | `any[]`   | `undefined` |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `fireenjinTrigger` |             | `CustomEvent<FireEnjinTriggerInput>` |


## Dependencies

### Used by

 - [floodteam-navigation-menu](../navigation-menu)
 - [floodteam-totaller-card-list](../totaller-card-list)

### Depends on

- ion-toolbar
- ion-buttons
- ion-back-button
- ion-icon
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-title-bar --> ion-toolbar
  floodteam-title-bar --> ion-buttons
  floodteam-title-bar --> ion-back-button
  floodteam-title-bar --> ion-icon
  floodteam-title-bar --> ion-button
  ion-back-button --> ion-icon
  ion-back-button --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  floodteam-navigation-menu --> floodteam-title-bar
  floodteam-totaller-card-list --> floodteam-title-bar
  style floodteam-title-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
