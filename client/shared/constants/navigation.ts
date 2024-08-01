export interface NavItem {
    name: string;
    path: string;
    subNav?: {
        name: string;
        path: string;
    }[];
}

export const HEADER_NAV: NavItem[] = [
    {
        name: 'Главная',
        path: '/',
    },
    {
        name: 'Магазин',
        path: '/inventory',
        subNav: [
            {
                name: 'Декор',
                path: '/inventory/glass',
            },
            {
                name: 'Мебель',
                path: '/inventory/furniture',
            },
            {
                name: 'Техника',
                path: '/inventory/tech',
            },
        ],
    },
    {
        name: 'Контакты',
        path: '/contacts',
    },
    {
        name: 'О нас',
        path: '/about',
    },
];
