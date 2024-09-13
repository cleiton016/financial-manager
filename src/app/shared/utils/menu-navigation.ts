import { TreeMenuItem } from "@shared/interfaces/tree-menu.interface";

export const MENU_NAVIGATION: TreeMenuItem[] = [
    { label: 'Investimentos', icon: 'banknotes' },
    { label: 'Gestão de Transações', icon: 'receiptLong', children: [
        { label: 'Transações', icon: 'creditCard', path: 'customer-area/expenses' },
        { label: 'Categorias', icon: 'category' },
    ] },
    {
      label: 'Configurações',
      icon: 'settings',
      children: [
        { label: 'Perfil' , icon: 'person' },
        { label: 'Alterar senha', icon: 'lockClosed' },
        { label: 'Sair', icon: 'logout', action: () => console.log('Sair') },
      ],
    }
];