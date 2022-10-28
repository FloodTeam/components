# floodteam-input-room



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                 | Default           |
| --------------- | ---------------- | ----------- | ------------------------------------ | ----------------- |
| `label`         | `label`          |             | `string`                             | `undefined`       |
| `labelPosition` | `label-position` |             | `"fixed" \| "floating" \| "stacked"` | `"stacked"`       |
| `list`          | `list`           |             | `string`                             | `undefined`       |
| `multiple`      | `multiple`       |             | `boolean`                            | `false`           |
| `name`          | `name`           |             | `string`                             | `"name"`          |
| `options`       | --               |             | `{ label: string; value: any; }[]`   | `getRoomNames()`  |
| `placeholder`   | `placeholder`    |             | `string`                             | `"Choose a Room"` |
| `required`      | `required`       |             | `boolean`                            | `false`           |
| `value`         | `value`          |             | `any`                                | `undefined`       |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ionChange` |             | `CustomEvent<any>` |
| `ionInput`  |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-item
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-input-room --> ion-item
  floodteam-input-room --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  style floodteam-input-room fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
