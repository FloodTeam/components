import {
  Component,
  ComponentInterface,
  Element,
  Method,
  Prop,
  Watch,
  h
} from "@stencil/core";

@Component({
  tag: "floodteam-progress-bar",
  styleUrl: "progress-bar.css"
})
export class ProgressBar implements ComponentInterface {
  @Element() progressBarEl: any;

  /**
   * The percent of the progress bar that will be filled
   */
  @Prop()
  percent = 0;

  /**
   * Set the progress bar completion percentage
   */
  @Method()
  async setPercent(percent: number) {
    this.progressBarEl.style.setProperty(
      "--floodteam-progress-bar-fill-width",
      `${percent >= 100 ? 100 : percent <= 0 ? 0 : percent}%`
    );

    return percent;
  }

  @Watch("percent")
  onPercentUpdate() {
    this.setPercent(this.percent);
  }

  componentDidLoad() {
    this.setPercent(this.percent);
  }

  render() {
    return <div class="progress-bar-wrapper" />;
  }
}
