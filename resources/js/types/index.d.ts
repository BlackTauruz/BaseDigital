export interface User {
    id: number;
    name: string;
    type: number;
    document: string;
    email: string;
    email_verified_at: string;
    wallet?: UserWallet | null;
}

export interface UserWallet {
    id: number;
    user_id: number;
    balance: number;
    user?: User | null
}

export interface WalletTransaction {
    id: number;
    from_id?: number | null;
    wallet_id: number;
    description: number;
    previous_balance: number;
    new_balance: number;
    difference: number;
    created_at: string;
    refunded_at: string;
    reference?: UserWallet | null;
    wallet?: UserWallet | null;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        isUser: boolean;
        isShopkeeper: boolean;
    };
};
