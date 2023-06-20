
export default new class ReturnJSON {

    async default(
        code: number,
        status: boolean,
        message: string,
        data: any
    ) {
        return {
            code: code,
            status: status,
            message: message,
            data: data
        }
    }

    async login(
        code: number,
        status: boolean,
        message: string,
        token: string
    ){
        return {
            code: code,
            status: status,
            message: message,
            token: token
        }
    }
}