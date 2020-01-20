export const isAuthenticated = () => {
    const Token = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')).Token : false
    if (typeof window == undefined) {
        return false
    }
    if (Token) {
        return true
    }
    else {
        return false
    }
}


// export const authntication = (jwt, next) => {
//     const Token = jwt.data.token
//     if (typeof window !== undefined) {
//         localStorage.setItem("Token", Token)
//         next()
//     }
// }