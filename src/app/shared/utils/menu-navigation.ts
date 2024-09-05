import { TreeMenuItem } from "@shared/interfaces/tree-menu.interface";

export const MENU_NAVIGATION: TreeMenuItem[] = [
    { label: 'Investimentos', icon: 'banknotes' },
    {
        label: 'Gastos',
        icon: 'creditCard',
    },
    {
      label: 'Configurações',
      icon: 'settings',
      children: [
        { label: 'Perfil' , icon: 'person' },
        { label: 'Alterar senha', icon: 'lockClosed' },
        { label: 'Sair', icon: 'logout' }
      ],
    }
];