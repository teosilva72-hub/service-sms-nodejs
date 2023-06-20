import axios from 'axios';

export default new class SMSVALIDATOR {

    async sendSimple(data: any) {
        try {
            const req = await axios.post(`${process.env.SMS_POST_SIMPLE}`, data, {
                headers: {
                    'Authorization': `Bearer ${process.env.TOKEN_SMS}`
                }
            });
            return await this.sendMessage(req.data);
        } catch (error) {
            throw error;
        }
    }

    async sendMultiple(data: any) {
        try{
            const req = await axios.post(`${process.env.SMS_POST_MULTIPLE}`, data, {
                headers: {
                    'Authorization': `Bearer ${process.env.TOKEN_SMS}`
                }
            });
            return await this.sendMessage(req.data);
        }catch(error){
            throw error;
        }
    }

    async sendMessage(data: any) {
        if (data.status == 'error') throw data.response;
        return data;
    }
}