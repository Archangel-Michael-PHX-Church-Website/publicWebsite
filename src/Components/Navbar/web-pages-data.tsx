
export type NavItem={
    name: string;
    href?: string;
    submenu?: NavItem[];
}

export const navItems: NavItem[] = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about'},
    {name: 'Calendar', href: '/calendar'},
    {name: 'Media',
        submenu: [
            { name: "Sermons", href: '/sermons'},
            { name: "Bible Study", href: '/bible'},
            { name: "Articles on Orthodoxy", href: '/articles'},
            ]
    },
    {name: 'Bookshop', href: '/bookshop'},
    // {name: 'Donation', href: ''},
    {name: 'Recreation Center ', href: '/center'}
];

// export default navItems;