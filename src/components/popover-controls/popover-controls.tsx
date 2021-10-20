import { Color } from '@ionic/core';
import { Component, Prop, h } from '@stencil/core';


@Component({
    tag: 'floodteam-popover-controls',
    styleUrl: 'popover-controls.css'
})
export class PopoverControls {
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
                            href={mb.href}
                            color={mb.color}
                            onClick={(event) =>
                                mb.onClick && typeof mb.onClick === "function"
                                    ? mb.onClick(event)
                                    : null
                            }
                        >
                            <ion-icon
                                name={mb.icon.indexOf("/") === -1 ? mb.icon : null}
                                src={mb.icon.indexOf("/") === -1 ? null : mb.icon}
                                slot="start"
                            />
                            <ion-label innerHTML={mb.label} />
                        </ion-item>
                    ))}

                </ion-list>
            </ion-content>
        );
    }
}