# floodteam-popover-controls



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description                                                     | Type                                                                                               | Default |
| ------------ | --------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------- |
| `buttonList` | --        | The list of buttons to show when the material button is clicked | `{ label: string; icon: string; color?: string; href?: string; onClick?: (event: any) => any; }[]` | `[]`    |


## Events

| Event                   | Description | Type               |
| ----------------------- | ----------- | ------------------ |
| `floodteamClosePopover` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-content
- ion-list
- ion-item
- ion-icon
- ion-label

### Graph
```mermaid
graph TD;
  floodteam-popover-controls --> ion-content
  floodteam-popover-controls --> ion-list
  floodteam-popover-controls --> ion-item
  floodteam-popover-controls --> ion-icon
  floodteam-popover-controls --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style floodteam-popover-controls fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
