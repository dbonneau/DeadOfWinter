export interface MenuItemData {
    id: string;
    route: string;
    icon: string;
    label: string;
}

export type MenuData = Array<MenuItemData>;

/**
 * Create the data structure used to generate the menu.
 * @return Les données du menu à afficher
 */
export function buildMenu(): MenuData {
    const MENU: Array<MenuItemData> = [
        {
            id: 'menu:dashboard',
            route: '/',
            icon: 'stats-bars',
            label: 'Dashboard'
        },{
            id: 'menu:messages',
            route: '/messages',
            icon: 'credit-card',
            label: 'Messages'
        },{
            id: 'menu:profile',
            route: '/profile',
            icon: 'bx-user',
            label: 'Profile'
        },{
            id: 'menu:settings',
            route: '/settings',
            icon: 'bx-info-circle',
            label: 'Settings'
        }
    ];

    return MENU;
}
