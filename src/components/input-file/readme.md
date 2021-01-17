# floodteam-input-file



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description               | Type     | Default     |
| -------------- | --------------- | ------------------------- | -------- | ----------- |
| `accept`       | `accept`        |                           | `string` | `undefined` |
| `defaultValue` | `default-value` |                           | `any`    | `undefined` |
| `documentId`   | `document-id`   |                           | `string` | `undefined` |
| `endpoint`     | `endpoint`      | The endpoint to upload to | `string` | `"upload"`  |
| `fileName`     | `file-name`     |                           | `string` | `undefined` |
| `icon`         | `icon`          |                           | `string` | `undefined` |
| `label`        | `label`         |                           | `string` | `undefined` |
| `name`         | `name`          |                           | `string` | `undefined` |
| `path`         | `path`          |                           | `string` | `undefined` |
| `type`         | `type`          |                           | `string` | `"file"`    |
| `value`        | `value`         |                           | `any`    | `undefined` |


## Events

| Event                 | Description | Type               |
| --------------------- | ----------- | ------------------ |
| `floodteamUpload`     |             | `CustomEvent<any>` |
| `floodteamUploadFile` |             | `CustomEvent<any>` |
| `ionInput`            |             | `CustomEvent<any>` |


## Methods

### `openFile() => Promise<any>`



#### Returns

Type: `Promise<any>`




## Dependencies

### Depends on

- ion-card
- ion-item
- ion-icon

### Graph
```mermaid
graph TD;
  floodteam-input-file --> ion-card
  floodteam-input-file --> ion-item
  floodteam-input-file --> ion-icon
  ion-card --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style floodteam-input-file fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
