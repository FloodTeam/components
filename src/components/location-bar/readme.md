# floodteam-location-bar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type     | Default                              |
| ------------------ | -------------------- | ----------- | -------- | ------------------------------------ |
| `algoliaAppId`     | `algolia-app-id`     |             | `string` | `"ZKFP93O6EH"`                       |
| `algoliaIndex`     | `algolia-index`      |             | `string` | `"locations"`                        |
| `algoliaSearchKey` | `algolia-search-key` |             | `string` | `"cef2b52143823594c9c5af78ad86bcf0"` |
| `query`            | `query`              |             | `string` | `undefined`                          |


## Dependencies

### Depends on

- ion-grid
- ion-row
- ion-col
- ion-icon
- fireenjin-form
- [floodteam-input](../input)
- ion-button

### Graph
```mermaid
graph TD;
  floodteam-location-bar --> ion-grid
  floodteam-location-bar --> ion-row
  floodteam-location-bar --> ion-col
  floodteam-location-bar --> ion-icon
  floodteam-location-bar --> fireenjin-form
  floodteam-location-bar --> floodteam-input
  floodteam-location-bar --> ion-button
  fireenjin-form --> ion-grid
  fireenjin-form --> ion-row
  fireenjin-form --> ion-col
  fireenjin-form --> ion-button
  ion-button --> ion-ripple-effect
  floodteam-input --> ion-input
  floodteam-input --> ion-item
  floodteam-input --> ion-icon
  floodteam-input --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style floodteam-location-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
