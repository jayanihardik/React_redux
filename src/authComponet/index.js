export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false
    }
    if (localStorage.getItem('Token')) {
        return true
    }
    else {
        return false
    }
}


export const authntication = (jwt, next) => {
    const Token = jwt.data.token
    if (typeof window !== undefined) {
        localStorage.setItem("Token", Token)
        next()
    }
}