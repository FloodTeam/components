import { Component, Host, Prop, h, Build } from "@stencil/core";

@Component({
  tag: "floodteam-waves",
})
export class Waves {
  @Prop() color: string;
  @Prop() size: string = "100px";
  @Prop() moving: boolean = false;
  @Prop() speed: string = "10s";
  @Prop() dip: string;

  getCssVarColor(color: string) {
    if (!Build?.isBrowser) return color;
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--ion-color-${color}`)
      .replace(" ", "");
  }

  render() {
    return (
      <Host>
        <div
          class="waves"
          style={{
            height: this.size,
            width: "100%",
            marginBottom: `var(--ft-wave-margin-bottom, -3px)`,
            "--wave-dip": this.dip ? this.dip : `calc(${this.size} / 2)`,
            animation: this.moving && `waving ${this.speed} linear infinite`,
            transition: `${this.speed} linear all`,
            backgroundRepeat: "repeat-x",
            backgroundPositionY: "0",
            backgroundSize: `calc(${this.size} * 8)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1642' height='202' viewBox='0 0 1643 202' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M106 7C97.6 21.2 88.4 35.83 72.9 44.63C66.065 48.55 49.752 52.263 33.6 53.23C22.3935 53.7889 11.1606 53.4881 0 52.33V127.165V202H1643V116.2C1643 68.7681 1643 52.38 1643 52.38C1635.42 51.2523 1628.11 49.6998 1620.7 47.73C1610.76 45.081 1599.41 40.789 1591.5 37.93C1571.11 30.567 1547.64 19.639 1534.9 10.8C1529.8 7.4 1524.9 4.5 1523.9 4.5C1523 4.5 1516.9 8.49999 1510.4 13.4C1491.5 27.7 1474.7 35.8 1453 41C1438.7 44.5 1428.5 45.5 1408 45.5C1390.7 45.5 1389.3 45.3 1371.5 41.5C1350.3 36.9 1344.5 35.1 1328.5 28.3C1322.2 25.7 1316.5 23.5 1315.8 23.5C1315.1 23.5 1310.6 26.8 1305.9 30.9C1295.9 39.5 1281.7 47.3 1270 50.7C1259.3 53.7 1234.6 54 1221.5 51.2C1194.7 45.5 1162.2 32.5 1136.3 17.2C1132.3 14.9 1128.2 12.6 1127.3 12.3C1126.3 11.9 1121.7 13.5 1115.3 16.7C1085.4 31.4 1059 37.5 1025.7 37.5C985.7 37.5 945.7 26.5 914.3 6.8C912.547 5.63986 910.572 4.85664 908.5 4.5C907.4 4.5 900.1 9.19999 892.2 14.9C875.1 27.4 864.1 33.8 848.1 40.6C821.8 51.7 798.6 56.4 766 57.2C750.8 57.6 743 57.3 733.5 56.1C693.4 50.8 653.2 36.4 616.3 14.2L603.6 6.5L592.3 17.8C579.4 30.7 571.1 35.9 555.6 41.1C541.7 45.8 528.2 47.5 505.8 47.5C465.3 47.5 423.4 38.8 369.6 19.3L350.2 12.3L346.3 16.9C335.7 29.2 317.6 37.9 293.5 42.1C280.8 44.3 254.9 43.6 238 40.6C207.1 35.1 161.3 21.4 129 8C120.2 4.3 112.3 1.1 111.4 0.8C110.3 0.5 108.7 2.3 106 7Z' fill='${
              this.color &&
              (this.color.includes("#") ||
              this.color.includes("rgb(") ||
              this.color.includes("rgba(") ||
              this.color.includes("hsl(") ||
              this.color.includes("hsla(")
                ? this.color
                : this.color
                ? this.getCssVarColor(this.color)
                : "%232473bb"
              ).replace("#", "%23")
            }'/%3E%3C/svg%3E%0A")`,
          }}
        />
        <div
          class="water-wrapper"
          style={{
            backgroundColor:
              this.color &&
              (this.color.includes("#") ||
              this.color.includes("rgb(") ||
              this.color.includes("rgba(") ||
              this.color.includes("hsl(") ||
              this.color.includes("hsla(")
                ? this.color
                : this.color
                ? this.getCssVarColor(this.color)
                : "#2473bb"),
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
