const Price = [
  {
    id: "1",
    link: "",
    price: 0,
    priceId: "",
    duration: "/current",
    planName: "Free plan: Basic",
    headline: "Get Started with 3 Free Forms Every Month",
    paymentOption: "USD / monthly",
    includes: [
      { feature: "Up to 3 Forms per Month" },
      { feature: "Basic Templates" },
      { feature: "Basic Analytics" },
    ],
    notIncluded: [
      { notFeature: "No advanced templates" },
      { notFeature: "No advanced field types" },
      { notFeature: "Limited customization options" },
    ],
  },
  {
    id: "2",
    link: "https://buy.stripe.com/test_00g8xu6Kqf8XbTO5kn",
    price: 4.0,
    priceId: "price_1PXyeaLNvspfOvbgFr6QN0AZ",
    duration: "/monthly",
    planName: "Monthly Plan: Pro",
    headline: "Unlock Advanced Features with Pro Monthly Plan",
    paymentOption: "USD / monthly",
    includes: [
      { feature: "10 Forms per Month" },
      { feature: "Advanced Analytics" },
      { feature: "Integrations" },
    ],
    notIncluded: [
      { notFeature: "No dedicated account manager" },
      { notFeature: "No additional discounts" },
      { notFeature: "No access to premium add-ons" },
    ],
  },
  {
    id: "3",
    link: "https://buy.stripe.com/test_28o8xu1q65yn3nibIK",
    price: 36.0,
    priceId: "price_1PXyc8LNvspfOvbgmz7e7Iy9",
    duration: "/yearly",
    planName: "Yearly Plan: Premium",
    headline: "Go Premium for Maximum Value and Support",
    paymentOption: "USD / yearly",
    includes: [
      { feature: "Unlimited Forms" },
      { feature: "All Templates" },
      { feature: "Comprehensive Analytics" },
      { feature: "Priority Support" },
      { feature: "Dedicated Account Manager" },
    ],
  },
];

export default Price;
