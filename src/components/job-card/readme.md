# floodteam-snapshot-card



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `active`        | `active`         |             | `boolean` | `false`     |
| `buttonProps`   | --               |             | `{}`      | `{}`        |
| `buttonText`    | `button-text`    |             | `string`  | `undefined` |
| `disableShrink` | `disable-shrink` |             | `boolean` | `false`     |
| `href`          | `href`           |             | `string`  | `undefined` |
| `photo`         | `photo`          |             | `string`  | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `floodteamClick` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-card
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-snapshot-card --> ion-card
  floodteam-snapshot-card --> ion-button
  ion-card --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  style floodteam-snapshot-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
