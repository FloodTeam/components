# floodteam-signature-pad



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                   | Type     | Default                |
| ---------------------- | ------------------------ | --------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| `backgroundColor`      | `background-color`       | The background color for the signature pad                                                    | `string` | `"rgb(255, 255, 255)"` |
| `clearText`            | `clear-text`             | The text to display on the clear button                                                       | `string` | `"Clear"`              |
| `dotSize`              | `dot-size`               | Radius of a single dot                                                                        | `number` | `undefined`            |
| `label`                | `label`                  | The label to display below signature pad                                                      | `string` | `"Sign Above"`         |
| `maxWidth`             | `max-width`              | Maximum width of a line                                                                       | `number` | `0.5`                  |
| `minDistance`          | `min-distance`           | Add the next point only if the previous one is farther than x pixels                          | `number` | `5`                    |
| `minWidth`             | `min-width`              | Minimum width of a line                                                                       | `number` | `0.5`                  |
| `name`                 | `name`                   | The name of the element                                                                       | `string` | `"signature"`          |
| `penColor`             | `pen-color`              | Color used to draw the lines. Can be any color format accepted by context.fillStyle           | `string` | `"black"`              |
| `submitText`           | `submit-text`            | The text to display on the submit button                                                      | `string` | `"Submit"`             |
| `throttle`             | `throttle`               | Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling | `number` | `16`                   |
| `value`                | `value`                  | The current data for the signature pad                                                        | `any`    | `undefined`            |
| `velocityFilterWeight` | `velocity-filter-weight` | Weight used to modify new velocity based on the previous velocity                             | `number` | `0.7`                  |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ionChange` |             | `CustomEvent<any>` |
| `ionInput`  |             | `CustomEvent<any>` |


## Methods

### `clear() => Promise<any>`

Clear the signature field

#### Returns

Type: `Promise<any>`



### `download(dataURL: any, filename: any) => Promise<void>`

Download a file via a new browser tab

#### Returns

Type: `Promise<void>`



### `downloadJPG() => Promise<void>`

Download the signature as a JPG file

#### Returns

Type: `Promise<void>`



### `downloadPNG() => Promise<void>`

Download the signature as a PNG file

#### Returns

Type: `Promise<void>`



### `downloadSVG() => Promise<void>`

Download the signature as an SVG file

#### Returns

Type: `Promise<void>`



### `fromData(data: any) => Promise<any>`

Fill the signature pad from data

#### Returns

Type: `Promise<any>`



### `isEmpty() => Promise<any>`

Check if the signature pad is empty

#### Returns

Type: `Promise<any>`



### `resizeCanvas() => Promise<void>`

Resize the canvas based on browser

#### Returns

Type: `Promise<void>`



### `submit() => Promise<void>`

Update the value and emit ionChange event

#### Returns

Type: `Promise<void>`



### `toData() => Promise<any>`

Get the signature pad data

#### Returns

Type: `Promise<any>`



### `undo() => Promise<any>`

Undo the last stroke from the signature

#### Returns

Type: `Promise<any>`




## Dependencies

### Depends on

- ion-card
- ion-icon
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-signature-pad --> ion-card
  floodteam-signature-pad --> ion-icon
  floodteam-signature-pad --> ion-button
  ion-card --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  style floodteam-signature-pad fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
