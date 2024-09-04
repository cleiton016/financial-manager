export enum IconsNames {
    menuDotsSquare = 'menu-dots-square',
    bars3 = 'bars-3',
    chartPie = 'chart-pie',
    calculator = 'calculator',
    creditCard = 'credit-card',
    settings = 'settings',
    arrowDown = 'arrow-down',
    arrowUp = 'arrow-up',
    arrowLeft = 'arrow-left',
    arrowRight = 'arrow-right',
    person = 'person',
    lockClosed = 'lock-closed',
    lockOpen = 'lock-open',

    // sem SVG 
    logout = 'logout',
    banknotes = 'banknotes',
    expenses = 'expenses',
    check = 'check',
    close = 'close',

} 

export type Icons = keyof typeof IconsNames;
