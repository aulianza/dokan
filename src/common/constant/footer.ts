type FooterLink = {
  id: number;
  name: string;
  path: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  location: string;
};

export const FOOTER_LINKS: FooterLink[][] = [
  [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Features", path: "/features" },
    { id: 3, name: "Pricing", path: "/pricing" },
  ],
  [
    { id: 4, name: "About Us", path: "/about" },
    { id: 5, name: "Integrations", path: "/integrations" },
    { id: 6, name: "FAQs", path: "/faqs" },
  ],
  [
    { id: 7, name: "Blog", path: "/blog" },
    { id: 8, name: "Contact Us", path: "/contact" },
    { id: 9, name: "Terms & Policies", path: "/terms" },
  ],
];

export const CONTACT_INFO: ContactInfo = {
  email: "dokan@test.sa",
  phone: "+999-234-324",
  location: "Saudi Arabia, Jeddah",
};
