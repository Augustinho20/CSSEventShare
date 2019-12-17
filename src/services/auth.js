// Define a constante usuarioAutenticado
// que verifica se há um token no localStorage
export const usuarioAutenticado = () => localStorage.getItem('usuario-eventshare') !== null

// Define a constante parseJwt
export const parseJwt = () => {
    // Define a variável base64 que recebe o payload do token
    var base64 = localStorage.getItem('usuario-eventshare').split('.')[1]

    // Retorna o payload convertido de base64 para string e de string para JSON
    // console.log(JSON.parse(window.atob(base64)))
    return JSON.parse(window.atob(base64))
}