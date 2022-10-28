# floodteam-input-totaller-type



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                 | Default                                                                                                                                                                                                                                                                                          |
| --------------- | ---------------- | ----------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`         | `label`          |             | `string`                             | `undefined`                                                                                                                                                                                                                                                                                      |
| `labelPosition` | `label-position` |             | `"fixed" \| "floating" \| "stacked"` | `"stacked"`                                                                                                                                                                                                                                                                                      |
| `list`          | `list`           |             | `string`                             | `undefined`                                                                                                                                                                                                                                                                                      |
| `name`          | `name`           |             | `string`                             | `"type"`                                                                                                                                                                                                                                                                                         |
| `options`       | --               |             | `{ label: string; value: any; }[]`   | `[     {       label: "Year",       value: "year",     },     {       label: "Quarter",       value: "quarter",     },     {       label: "Month",       value: "month",     },     {       label: "Week",       value: "week",     },     {       label: "Day",       value: "day",     },   ]` |
| `placeholder`   | `placeholder`    |             | `string`                             | `"Type"`                                                                                                                                                                                                                                                                                         |
| `required`      | `required`       |             | `boolean`                            | `false`                                                                                                                                                                                                                                                                                          |
| `value`         | `value`          |             | `any`                                | `undefined`                                                                                                                                                                                                                                                                                      |


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
  floodteam-input-totaller-type --> ion-item
  floodteam-input-totaller-type --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  style floodteam-input-totaller-type fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
