export interface Contacts {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | undefined;
    company?: string | undefined;
    jobTitle?: string | undefined;
    categoryId: number;
    isFavorite: boolean;
    notes?: string | undefined;
    createdAt: string;
    updatedAt?: string | undefined;
    isDelete: boolean;
}