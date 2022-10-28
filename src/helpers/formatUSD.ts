export default function formatUSD(amount) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(
    typeof amount === "string"
      ? parseFloat(amount.replace(/\$|,/g, ""))
      : amount || 0
  );
}
