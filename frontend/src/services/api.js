export const apiUrl = process.env.REACT_APP_API_URL;

//Funzione per ottenere le mappe

export const getMaps = async() => {
    const resp = await fetch(`${apiUrl}/maps`);
    const data = await resp.json();
    return data;
}; 

//funzione per add maps 

export const addMaps =async (formData,token) =>{
    const resp = await fetch(`${apiUrl}/maps` ,{
        method:'POST',
        headers : {
            Authorization:`Bearer ${token}`
        },
        body:formData
    });
    const data = await resp.json()
    return data;
};

//login func 

export const login = async (credentials) => {
    const resp = await fetch(`${apiUrl}/users/login`,{
        method:'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    })
    const data = await resp.json()
    return data;
}

//register func 

export const register = async (userInfo) => {
    const resp = await fetch(`${apiUrl}/users/register`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(userInfo)
    });
    const data = await resp.json()
    return data
};