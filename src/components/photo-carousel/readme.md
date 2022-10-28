# floodteam-photo-carousel



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                                                                                                                                             | Default           |
| ---------------- | ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `addButtonColor` | `add-button-color` |             | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never>` | `"primary"`       |
| `badgeColor`     | `badge-color`      |             | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never>` | `"medium"`        |
| `currentSlide`   | `current-slide`    |             | `number`                                                                                                                                         | `0`               |
| `hideAddButton`  | `hide-add-button`  |             | `boolean`                                                                                                                                        | `false`           |
| `jobId`          | `job-id`           |             | `string`                                                                                                                                         | `undefined`       |
| `multiple`       | `multiple`         |             | `boolean`                                                                                                                                        | `true`            |
| `name`           | `name`             |             | `string`                                                                                                                                         | `"photocarousel"` |
| `options`        | `options`          |             | `any`                                                                                                                                            | `{}`              |
| `photos`         | --                 |             | `any[]`                                                                                                                                          | `[]`              |
| `siteId`         | `site-id`          |             | `string`                                                                                                                                         | `undefined`       |
| `tags`           | --                 |             | `string[]`                                                                                                                                       | `[]`              |
| `type`           | `type`             |             | `string`                                                                                                                                         | `"site"`          |
| `uploadPath`     | `upload-path`      |             | `string`                                                                                                                                         | `undefined`       |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `fireenjinTrigger` |             | `CustomEvent<FireEnjinTriggerInput>` |


## Methods

### `getCurrentSlide() => Promise<number>`



#### Returns

Type: `Promise<number>`



### `getPhoto() => Promise<any>`



#### Returns

Type: `Promise<any>`



### `selectFiles() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `slideNext() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `slidePrev() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `slideTo(slideNumber: number) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `update() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- ion-badge
- ion-button
- ion-slides
- ion-slide
- ion-img
- [floodteam-fallback](../fallback)

### Graph
```mermaid
graph TD;
  floodteam-photo-carousel --> ion-badge
  floodteam-photo-carousel --> ion-button
  floodteam-photo-carousel --> ion-slides
  floodteam-photo-carousel --> ion-slide
  floodteam-photo-carousel --> ion-img
  floodteam-photo-carousel --> floodteam-fallback
  ion-button --> ion-ripple-effect
  floodteam-fallback --> ion-icon
  style floodteam-photo-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
