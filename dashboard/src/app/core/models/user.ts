
    export interface Experience {
        company: string;
        year: string;
        description: string;
    }

    export interface Picture {
        url: string;
    }

    export interface Language {
        name: string;
    }

    export interface Qualification {
        name: string;
    }

    export interface Speciality {
        name: string;
    }

    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        description: string;
        experience: Experience[];
        pictures: Picture[];
        languages: Language[];
        qualifications: Qualification[];
        specialities: Speciality[];
        address: string;
        insurance_provider: string;
        insurance_policy_number: string;
    }

