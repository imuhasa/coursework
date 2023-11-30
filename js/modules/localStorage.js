export const checkLocalStorage = () => {
    if (!localStorage.users){
        let admin = {
            id: 0,
            login: 'admin',
            password: 'admin',
        };
        
        localStorage.setItem('users', JSON.stringify([admin]));
    }
    
}