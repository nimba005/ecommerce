import pay from "../../Assets/Steps/pay.png";
import dash from "../../Assets/Steps/dash.png";
import plan from "../../Assets/Steps/plan.png";

export const data = [
  {
    name: "Free Trial",
    category: "free",
    price: "0.0",
    original: 3,
    description:
      "Include rent due reminder messages to tenants and registration of up to two plots",
  },
  {
    name: "Basic",
    category: "individual",
    price: 3.3,
    description:
      "Include rent due reminder messages to tenants and registration of up to five plots",
  },
  {
    name: "Premium",
    category: "sacco",
    price: 7.35,
    original: 10.5,
    description:
      "Package includes rent due reminder message to tenants and registration of up to ten plots",
  },
  {
    name: "VIP",
    category: "sacco",
    price: 14.99,
    original: 20,
    description:
      "Rent due reminder messages to tenants, unlimited plots plus free property listing at Qwarqo",
  },
];

export const steps = [
  {
    img: plan,
    step: "Choose a Plan",
    desc: "Choose a plan that suits your needs from our range of options",
  },
  {
    img: pay,
    step: "Pay for your plan",
    desc: "Pay for your plan using any of our payment options",
  },
  {
    img: dash,
    step: "Start enjoying our services",
    desc: "After your payment has been confirmed, you will be sent a link to activate your account. After successful activation, you can now start managing your rentals at your convenience",
  },
];