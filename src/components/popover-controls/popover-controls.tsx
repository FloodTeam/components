import { Color } from '@ionic/core';
import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';


@Component({
    tag: 'floodteam-popover-controls',
    styleUrl: 'popover-controls.css'
})
export class PopoverControls {
    @Event() floodteamClosePopover: EventEmitter;

    /**
     * The list of buttons to show when the material button is clicked
     */
    @Prop() buttonList: {
        /**
         * The label to show next to the button
         */
        label: string;
        /**
         * The icon to use in the button
         */
        icon: string;
        /**
         * The color from the theme to make the button
         */
        color?: Color;
        /**
         * The link to use for the button
         */
        href?: string;
        /**
         * The functionality to run when the button is clicked
         */
        onClick?: (event: any) => any;
    }[] = [];

    render() {
        return (
            <ion-content>
                <ion-list>
                    {this.buttonList.map((mb) => (
                        <ion-item
                            detail
                            lines="full"
                            href={mb?.href || "#"}
                            onClick={(event) => {
                                if (typeof mb?.onClick !== "function") return;
                                mb.onClick(event);
                                this.floodteamClosePopover.emit({ event });
                            }}
                        >
                            <ion-icon
                                color={mb?.color}
                                name={mb.icon.indexOf("/") === -1 ? mb.icon : null}
                                src={mb.icon.indexOf("/") === -1 ? null : mb.icon}
                                slot="start"
                            />
                            <ion-label color={mb?.color} innerHTML={mb.label} />
                        </ion-item>
                    ))}

                </ion-list>
            </ion-content>
        );
    }
}