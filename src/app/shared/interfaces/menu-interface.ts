export interface Menu {
    name: string;
    icon?: string;
    router?: Array<string>;
    query?: Record<string, string>;
}