import { watchgem, shoeLogo, companyLogo3, watchLogo, shoe1, shoe2a, shoe2b, shoe2c, shoe3a, shoe3b, nike1} from ".";


export const dummyCompany =[
    {
        id: "1",
        name: "Shoe Company",
        slogan: "Lorem Shoe",
        logo: shoeLogo,
        type: "wears",
        category: {
            shoes: [
                {   id: 1,
                    name: "Shoe 1",
                    price: 20000,
                    desc: "the product is very good tested and trusted",
                    img: [
                        shoe1
                    ],
                },
                {   id: 2,
                    name: "Shoe 2",
                    price: 34000,
                    desc: "the product is very good tested and trusted",
                    img: [
                        shoe2a, shoe2b, shoe2c
                    ],
                },
                {   id: 3,
                    name: "Shoe 3",
                    price: 50000,
                    desc: "the product is very good tested and trusted",
                    img: [
                        shoe3a, shoe3b
                    ],
                } 
            ],
            canvas: [
                {
                    id: 1,
                    name: "nike",
                    price: 80000,
                    desc: "the product is a nike original",
                    img: [
                        nike1
                    ]
                }
            ]
        }
    },
    {
        id: "2",
        name: "Watch Company",
        slogan: "Lorem Watch",
        logo: watchLogo,
        type: "Wears/Accesories"
    },
    {
        id: "3",
        name: "Company three",
        slogan: "Lorem Apple",
        logo: companyLogo3
    }
    
     
];

export const topCompanies = [
    {
        id: 1,
        name: "Shoe Company",
        slogan: "Lorem Shoe",
        logo: shoeLogo
    },
    {
        id: 2,
        name: "Watch Company",
        slogan: "Lorem Watch",
        logo: watchLogo
    },
    {
        id: 3,
        name: "Company three",
        slogan: "Lorem Apple",
        logo: companyLogo3
    }
];

export const products = [
    {
        id: 1,
        name: "Product 1",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 4"
    },
    {
        id: 5,
        name: "Product 5",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 5"
    },
    {
        id: 6,
        name: "Product 6",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 6"
    },
    {
        id: 7,
        name: "Product 7",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 7"
    },
    {
        id: 8,
        name: "Product 8",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 8"
    },
    {
        id: 9,
        name: "Product 9",
        price: 200,
        image: watchgem,
        desc: "Lorem product 9"
    }
];
export const topProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 4"
    },
    {
        id: 5,
        name: "Product 5",
        price: 20000,
        image: watchgem,
        desc: "Lorem product 5"
    }
];

export const dummyCategories = [
    {
        id: "1",
        name: "Category1",
        value: "cat1"
    },
    {
        id: "2",
        name: "Category2",
        value: "cat2"
    },
    {
        id: "3",
        name: "Category3",
        value: "cat3"
    },
    {
        id: "4",
        name: "Category4",
        value: "cat4"
    },
    {
        id: "5",
        name: "Category5",
        value: "cat5"
    }
]
