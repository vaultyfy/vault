type CountedObject = {
  label: string;
  value: string;
};

export const generateNoOfDays = (days?: number): CountedObject[] => {
  const result: CountedObject[] = [];
  const newDays = days || 100;

  for (let i = 5; i <= newDays; i += 5) {
    result.push({ label: `${i} days`, value: `${i}` });
  }

  return result;
};

export const generateNoOfCycles = (cycleCount?: number): CountedObject[] => {
  const result: CountedObject[] = [];
  const cycles = cycleCount || 10;

  for (let i = 1; i <= cycles; i += 1) {
    result.push({ label: `${i}`, value: `${i}` });
  }

  return result;
};

export const skeleton = {
  startColor: "var(--pale-grey)",
  endColor: "var(--grey-sec)",
  light: {
    startColor: "var(--white-smoke)",
    endColor: "var(--grey-100)",
  },
};

export const dicebear = "https://api.dicebear.com/7.x/micah/svg";

export const formatPrice = (price: number) => {
  const currencySymbol = "₦";

  if (price >= 1000000) {
    const millions = price / 1000000;
    return `${currencySymbol}${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }

  if (price >= 1000) {
    const thousands = price / 1000;
    return `${currencySymbol}${thousands.toFixed(thousands % 1 === 0 ? 0 : 1)}K`;
  }

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

// const formatCurrency = (amount: string | number) => {
//   return new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   })
//     .format(Number(amount))
//     .replace("NGN", "₦");
// };
