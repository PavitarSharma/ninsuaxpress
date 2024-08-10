import ROUTES from "../routes";
import { FaWarehouse, FaRoad } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";

export const menuItemsData = [
  {
    url: "/",
    title: "Home",
  },
  {
    title: "About Us",
    submenu: [
      {
        url: "/about-us",
        title: "Vinsum Axpress History",
      },
      {
        url: "/about",
        title: "Mission, Vision & Our Values",
      },
      {
        url: "/about",
        title: "Chairman & Managing Director",
      },
      {
        url: "/about",
        title: "Our Network",
      },
      {
        url: "/about",
        title: "Our Clients",
      },
      {
        url: "leadership-team",
        title: "Leadership Team",
      },
    ],
  },
  {
    title: "Our Services",
    submenu: [
      {
        url: ROUTES.SERVICES.MULTIMODAL_TRANSPORTATION,
        title: "Multimodal Transportation",
        submenu: [
          {
            url: "",
            title: "Multimodal Transportation",
          },
          {
            url: "/about",
            title: "Warehousing Solution",
          },
        ],
      },
      {
        url: ROUTES.SERVICES.WAREHOUSING_SOLUTION,
        title: "Warehousing Solution",
      },
      {
        url: ROUTES.SERVICES.PACKAGING_SOLUTION,
        title: "Packaging Solution",
      },
      {
        url: ROUTES.SERVICES.THRRE_PL_AND_INVENTORY_MANAGEMENT,
        title: "3PL & Inventory Management",
      },
      {
        url: ROUTES.SERVICES.FOUR_PL_AND_INPLANT_LOGISTICS_PROJECT_MANAGEMENT,
        title: "4PL/Inplant Logistics/Project Management",
      },
    ],
  },
  {
    title: "Tools",
    submenu: [
      {
        url: "",
        title: "Distance Calculator",
      },
      {
        url: "/about",
        title: "Unit Converter",
      },
      {
        url: "/about",
        title: "Downloads",
      },
      {
        url: "/about",
        title: "Branch Mapping",
      },
    ],
  },
  {
    title: "Media Center",
    submenu: [
      {
        url: "",
        title: "Blog",
      },
      {
        url: "/about",
        title: "Corporate Video",
      },
      {
        url: "/about",
        title: "Company Profile",
      },
      {
        url: "/about",
        title: "Gallery",
      },
    ],
  },
  {
    title: "Contact",
    submenu: [
      {
        url: "career",
        title: "Career",
      },
    ],
  },
];

export const bannerData = [
  {
    image: "/images/banner/banner1.jpeg",
  },
  {
    image: "/images/banner/banner2.jpeg",
  },
  {
    image: "/images/banner/banner3.jpeg",
  },
];

export const leadershipTeams = [
  {
    image: "/images/leadershipteam/vinod.jpeg",
    name: "Mr. Vinod Sharma",
    position: "Chairman & Managing Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/kusum.jpg",
    name: "Mrs. Kusum Sharma",
    position: "Chair Person",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/lalit.jpg",
    name: "Mr. Lalit Sharma",
    position: "Managing Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/amit.jpg",
    name: "Mr. Amit Sharma",
    position: "Executive Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/ankit.jpg",
    name: "Mr. Ankit Sharma",
    position: "Executive Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/tc_web.jpg",
    name: "Mr. T.C Sharma",
    position: "President",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/vimal.jpg",
    name: "Mr. Vimal Sharma",
    position: "Head Credit Control",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/babulal.jpg",
    name: "Mr. Babulal Sharma",
    position: "Head - Audit & Cost Control",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/anil.jpg",
    name: "Mr. Anil Rajput",
    position: "Head Billing",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/amitabha.jpg",
    name: "Amitabha Mohapatra",
    position: "Head Information Technology(IT)",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/mohit.jpg",
    name: "Mr. Mohit Vashisht",
    position: "Manager Packaging Manufacturing Plant",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/sudhir.jpg",
    name: "Mr. Sudhir Mohan Bansal",
    position: "President",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "/images/leadershipteam/supriya.jpg",
    name: "Mrs. Supriya Dutt",
    position: "HR HEAD",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
];



export const servicesTypes = [
  {
    image: "/images/clock.png",
    title: "Express Service",
    description:
      "Our express services promise to deliver your consignment within a stipulated time frame.",
    features: [
      "Guaranteed On-Time Delivery",
      "Real-Time Shipment Tracking",
      "Priority Handling for All Shipments",
      "24/7 Customer Support",
      "Flexible Scheduling Options",
    ],
  },
  {
    image: "/images/security.png",
    title: "Safe Delivery",
    description: "We ensure zero in-transit damages to your consignment.",
    features: [
      "Secure Packaging for All Shipments",
      "Advanced Handling Procedures",
      "Real-Time Damage Monitoring",
      "Comprehensive Insurance Coverage",
      "Expert Trained Personnel",
    ],
  },
  {
    image: "/images/support.png",
    title: "24/7 Support",
    description:
      "We provide round-the-clock 24/7 quality support services anytime, anywhere.",
    features: [
      "Immediate Assistance Anytime",
      "Multi-Channel Support (Phone, Email, Chat)",
      "Dedicated Support Team",
      "Personalized Customer Solutions",
      "Comprehensive Knowledge Base",
    ],
  },
];

export const services = [
  {
    icon: MdOutlineEmojiTransportation,
    title: "Multimodal Transportation",
    description:
      "Vinsum axpress provides the most efficient combination of multiple means of transport , whilst optimizing deadlines & keeping the logistics costs under control.",
    path: ROUTES.SERVICES.MULTIMODAL_TRANSPORTATION,
  },
  {
    icon: FaWarehouse,
    title: "Warehouse Management",
    description:
      "We are offering wide range of services including consolidation & packaging of cargoes of various types & sizes , handling of stock & inventory management solution in our warehouses , as well as distribution wherever needed.",
    path: ROUTES.SERVICES.WAREHOUSING_SOLUTION,
  },
  {
    icon: GoPackage,
    title: "Packaging Service/Model",
    description:
      "We have a dedicated solution design team that specializes in material level knowledge and can design solutions based on inputs provided by the customer about the component / part and produce feasibility reports for all your packaging needs consultation.",
    path: ROUTES.SERVICES.PACKAGING_SOLUTION,
  },
  {
    icon: MdOutlineInventory2,
    title: "3PL & Inventory Management",
    description:
      "We are Third-party logistics providers typically specialize in integrated operations of warehousing and transportation services that can be scaled and customized to customer’s needs, based on market conditions to meet the demands and delivery service requirements for their products.",
    path: ROUTES.SERVICES.THRRE_PL_AND_INVENTORY_MANAGEMENT,
  },
  {
    icon: FaRoad,
    title: "4PL/Inplant Logistics/Project Management",
    description:
      "We provide a wide range of supply chain services including 4PL , Inplant logistics & Project Management.",
    path: ROUTES.SERVICES.FOUR_PL_AND_INPLANT_LOGISTICS_PROJECT_MANAGEMENT,
  },
];

export const whyVinsumAxpress = [
  {
    image: "/images/whyus/whyus-icon1.svg",
    title: "Single Window Solution",
    description:
      "Providing end-to-end supply chain services, including MMT, warehousing, 3PL & inventory management, returnable packaging, 4PL, in-plant logistics, and project management.",
  },
  {
    image: "/images/whyus/whyus-icon2.svg",
    title: "Credibility & Reliability",
    description:
      "With over 18 years of experience in logistics & supply chain management, we have a base of 1000+ satisfied customers.",
  },
  {
    image: "/images/whyus/whyus-icon3.svg",
    title: "Domain Expertise",
    description:
      "Our experienced and dedicated tech-driven team offers domain-specific expertise to provide end-to-end supply chain services.",
  },
  {
    image: "/images/whyus/whyus-icon4.svg",
    title: "Flexibility & Customizability",
    description:
      "The range of products and services by VINSUM AXPRESS are designed keeping in mind the flexible and customized needs of a customer as per their demand.",
  },
  {
    image: "/images/whyus/whyus-icon5.svg",
    title: "Cost-Effective & Sustainable",
    description:
      "We provide cost effective solutions which are sustainable over long period of time.",
  },
];


export const openings = [
  {
    position: "IT Development Head-GM/AGM",
    experience: "12+ Year's",
    vacancy: 1,
    location: "Gurgaon Corporate-Udyog Vihar ph4",
    role: "Full Time",
  },
  {
    position: "Jr. Developer",
    experience: "2-5 Year's",
    vacancy: 3,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Sr. Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Web Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Desktop Support H & N",
    experience: "2-5 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "BA-Documentation / Training",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "SR. Manager (Female) - Sales & Operations",
    experience: "5-12 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Corporate Trainer",
    experience: "4-8 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Territory Head",
    experience: "10 to 15 Year's in Logistics",
    vacancy: 1,
    location: "Chennai",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "Kandivili (MBY)",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "JNPT (MBY)",
    role: "Full Time",
  },
];


export const clients = [
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
  {
    image: "/images/clients/anand.png",
  },
  {
    image: "/images/clients/atl.png",
  },
  {
    image: "/images/clients/bajaj.png",
  },
  {
    image: "/images/clients/fag.png",
  },
  {
    image: "/images/clients/ford.png",
  },
  {
    image: "/images/clients/hero.png",
  },
  {
    image: "/images/clients/mahindra.png",
  },
  {
    image: "/images/clients/yamaha.png",
  },
];
