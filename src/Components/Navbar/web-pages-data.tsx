
export type NavItem={
    name: string;
    href?: string;
    submenu?: NavItem[];
}

export const navItems: NavItem[] = [
    {name: 'Home', href: ''},
    {name: 'About Us', href: ''},
    {name: 'Calendar', href: ''},
    {name: 'Media',
        submenu: [
            { name: "Sermons", href: ''},
            { name: "Bible Study", href: ''},
            { name: "Articles on Orthodoxy", href: ''},
            ]
    },
    {name: 'Bookshop', href: ''},
    {name: 'Donation', href: ''},
    {name: 'Contact Us', href: ''}
];

// export default navItems;