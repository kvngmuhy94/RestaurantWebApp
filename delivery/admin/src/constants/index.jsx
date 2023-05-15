import { AdminPanelSettings, BarChart, Category, CreditCard, Group, Home, Inventory, MonetizationOn, Shield, ShoppingCart, ShowChart } from "@mui/icons-material";
export { default as indexIllustration } from "./landingAsset.png";
export { default as companyIllustration } from "./companyAsset.png";
export { default as loginIllustration } from "./loginAsset.png";
export { default as error404 } from "./404Asset.png";
// export { default as indexIllustration } from "./landingAsset.svg";

export const navLinks = [
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];



export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        slug: 'home',
        icon: <Home /> ,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Companies',
        slug: 'company',
        icon: <ShoppingCart />,
      },
      {
        name: 'owners',
        slug: 'users',
        icon: <Group />,
      },
      {
        name: 'products',
        slug: 'products',
        icon: <Inventory />,
      },
      
      // {
      //   name: 'users',
      //   slug: 'admin/users',
      //   icon: <Group />,
      // },
      
    ],
  },
 
  {
    title: 'Insights',
    links: [
      {
        name: 'line',
        slug: 'line',
        icon: <ShowChart />,
      },
      {
        name: 'bar',
        slug: 'bar',
        icon: <BarChart />,
      },
      
    ],
  },
  {
    title: 'Report',
    links: [
      {
        name: 'report',
        slug: 'report',
        icon: <ShowChart />,
      },
          
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <AdminPanelSettings />,
    title: 'Account Settings',
    desc: 'Change Password',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  // {
  //   icon: <Shield />,
  //   title: 'My Inbox',
  //   desc: 'Messages & Emails',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  // },
  // {
  //   icon: <CreditCard />,
  //   title: 'My Tasks',
  //   desc: 'To-do and Daily Tasks',
  //   iconColor: 'rgb(255, 244, 229)',
  //   iconBg: 'rgb(254, 201, 15)',
  // },
];

export const companyTypes = [
  {
      id: 1,
      value: "Electronics"
  },
  {
      id: 2,
      value: "Mobile Phones and Tablets"
  },
  {
      id: 3,
      value: "Health & Beauty"
  },
  {
      id: 4,
      value: "Fashion"
  },
  {
      id: 5,
      value: "Property"
  },
  {
      id: 6,
      value: "Vehicles"
  },
  
  
  
];
