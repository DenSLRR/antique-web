import { createPinia } from 'pinia';

export type NavItem = {
    name: string;
    path: string;
    subNav?: NavItem[];
};
