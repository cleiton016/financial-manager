import { Icons } from "@enums/icons.enum";


export interface TreeMenuItem {
    label: string;
    icon: Icons;
    children?: TreeMenuItem[];
    expanded?: boolean;
}