const baseUrl = 'https://taskmanagertoolapi.azurewebsites.net/api/v1';

export default {
    someEmployee: {
        url: `${baseUrl}/vraboten`,
        method: 'GET',
    },
    allEmployees: {
        url: `${baseUrl}/vraboten/all`,
        method: 'GET',
    },
    signIn: {
        url: `${baseUrl}/kredencijal/validacija`,
        method: 'GET',
    },
};
