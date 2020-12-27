export const Login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const UploadFoto = (data) => {
    return {
        type: 'UPLOAD',
        payload: data
    }
}