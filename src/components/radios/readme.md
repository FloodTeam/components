# floodteam-radios



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                          | Default     |
| ---------- | ---------- | ----------- | ----------------------------- | ----------- |
| `label`    | `label`    |             | `string`                      | `undefined` |
| `lines`    | `lines`    |             | `"full" \| "inset" \| "none"` | `"none"`    |
| `name`     | `name`     |             | `string`                      | `undefined` |
| `options`  | `options`  |             | `any`                         | `undefined` |
| `required` | `required` |             | `any`                         | `undefined` |
| `selected` | `selected` |             | `number`                      | `0`         |
| `value`    | `value`    |             | `any`                         | `undefined` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ionChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-item
- ion-label
- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-radios --> ion-item
  floodteam-radios --> ion-label
  floodteam-radios --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style floodteam-radios fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
