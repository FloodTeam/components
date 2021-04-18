# floodteam-input-search-user



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                    | Default          |
| --------------- | ---------------- | ----------- | ----------------------- | ---------------- |
| `autofocus`     | `autofocus`      |             | `boolean`               | `undefined`      |
| `dataPropsMap`  | `data-props-map` |             | `any`                   | `undefined`      |
| `disableSearch` | `disable-search` |             | `boolean`               | `false`          |
| `disabled`      | `disabled`       |             | `boolean`               | `undefined`      |
| `endpoint`      | `endpoint`       |             | `string`                | `undefined`      |
| `iconEnd`       | `icon-end`       |             | `string`                | `undefined`      |
| `iconStart`     | `icon-start`     |             | `string`                | `undefined`      |
| `label`         | `label`          |             | `string`                | `undefined`      |
| `limit`         | `limit`          |             | `number`                | `5`              |
| `mode`          | `mode`           |             | `"inline" \| "popover"` | `"inline"`       |
| `name`          | `name`           |             | `string`                | `undefined`      |
| `placeholder`   | `placeholder`    |             | `string`                | `"Search Users"` |
| `required`      | `required`       |             | `boolean`               | `undefined`      |
| `results`       | --               |             | `any[]`                 | `[]`             |
| `template`      | --               |             | `(result: any) => any`  | `undefined`      |
| `value`         | `value`          |             | `any`                   | `undefined`      |


## Events

| Event                 | Description | Type               |
| --------------------- | ----------- | ------------------ |
| `floodteamSelectUser` |             | `CustomEvent<any>` |
| `ionInput`            |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [floodteam-input-search](../input-search)
- ion-item
- ion-label
- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-input-search-user --> floodteam-input-search
  floodteam-input-search-user --> ion-item
  floodteam-input-search-user --> ion-label
  floodteam-input-search-user --> ion-icon
  floodteam-input-search --> ion-item
  floodteam-input-search --> ion-icon
  floodteam-input-search --> ion-label
  floodteam-input-search --> ion-input
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style floodteam-input-search-user fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
