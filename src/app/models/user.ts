export interface User {
	id:number,
    email: string;
	password: string; 
	//pwd: string;
	role: Role;
}

enum Role {
    admin , candidat , recruteur
}