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
    result.push({ label: `${i} days`, value: `${i}` });
  }

  return result;
};

export const skeleton = {
  startColor: "var(--pale-grey)",
  endColor: "var(--grey-sec)",
  light: {
    startColor: "var(--platinum)",
    endColor: "var(--grey-100)"
  }
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    maximumSignificantDigits: 3,
  }).format(price).replace("NGN", "₦");
};

export const dicebear = "https://api.dicebear.com/7.x/micah/svg"
