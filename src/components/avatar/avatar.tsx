import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-avatar",
  styleUrl: "avatar.css"
})
export class Avatar implements ComponentInterface {
  @Prop() src: string;
  @Prop() size: string;
  @Prop() initials: string;

  render() {
    return (
      <div
        class="avatar-image"
        style={{
          backgroundImage:
            !this.src && this.initials
              ? null
              : `url('${
                  this.src ? this.src : "/assets/images/default-icon.png"
                }')`,
          height: this.size ? this.size : "50px",
          lineHeight: this.size ? this.size : "50px",
          fontSize: this.size ? `calc(${this.size} / 2 )` : "25px",
          width: this.size ? this.size : "50px"
        }}
      >
        {!this.src ? this.initials : null}
      </div>
    );
  }
}
