export interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    address?: {
        street
    };
    gender: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
