import { InvoiceType } from "../typings";

export default function getInvoiceTypes(): {
  label: string;
  value: InvoiceType;
}[] {
  return [
    { label: "Water Clean-up & Drying", value: "water" },
    { label: "Mold Remediation", value: "mold" },
    { label: "Box Out / Contents", value: "content" },
    { label: "Reconstruction", value: "reconstruction" },
    { label: "Drain Cleaning", value: "drain" },
    { label: "Other", value: null },
  ];
}
