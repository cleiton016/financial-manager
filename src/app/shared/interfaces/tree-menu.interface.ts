import { Icons } from "@enums/icons.enum";


export interface TreeMenuItem {
    label: string;
    icon: Icons;
    path?: string;
    action?: () => void;
    children?: TreeMenuItem[];
    expanded?: boolean;
}