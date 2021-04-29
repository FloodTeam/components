# floodteam-activity-feed



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `jobId`  | `job-id`  |             | `string` | `undefined` |
| `siteId` | `site-id` |             | `string` | `undefined` |
| `userId` | `user-id` |             | `string` | `undefined` |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `fireenjinTrigger` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-grid
- ion-row
- ion-col
- fireenjin-filter-bar
- fireenjin-pagination
- ion-card

### Graph
```mermaid
graph TD;
  floodteam-activity-feed --> ion-grid
  floodteam-activity-feed --> ion-row
  floodteam-activity-feed --> ion-col
  floodteam-activity-feed --> fireenjin-filter-bar
  floodteam-activity-feed --> fireenjin-pagination
  floodteam-activity-feed --> ion-card
  fireenjin-filter-bar --> ion-grid
  fireenjin-filter-bar --> ion-row
  fireenjin-filter-bar --> ion-col
  fireenjin-filter-bar --> ion-button
  fireenjin-filter-bar --> ion-icon
  fireenjin-filter-bar --> ion-searchbar
  fireenjin-filter-bar --> ion-card
  fireenjin-filter-bar --> ion-chip
  fireenjin-filter-bar --> ion-label
  fireenjin-filter-bar --> ion-select
  fireenjin-filter-bar --> ion-select-option
  ion-button --> ion-ripple-effect
  ion-searchbar --> ion-icon
  ion-card --> ion-ripple-effect
  ion-chip --> ion-ripple-effect
  fireenjin-pagination --> ion-grid
  fireenjin-pagination --> ion-row
  fireenjin-pagination --> ion-col
  fireenjin-pagination --> ion-card
  fireenjin-pagination --> ion-list
  fireenjin-pagination --> ion-virtual-scroll
  fireenjin-pagination --> ion-infinite-scroll
  fireenjin-pagination --> ion-infinite-scroll-content
  ion-infinite-scroll-content --> ion-spinner
  style floodteam-activity-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
