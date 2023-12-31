import axios from 'axios';
import { useAuth } from '../stores/auth';

const baseUrl = process.env.REACT_APP_API_URL_GMS;

export const getPersonId = async (auth_code: string) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseUrl}/me`,
            headers: {
                Authorization: `Bearer ${auth_code}`,
            }
        });
        const personId = response?.data?.result?.mygms_id;
        if (personId) {
            const setPersonId = useAuth.getState().setPersonId;
            setPersonId(personId);
            return personId;
        }

        throw response;
    } catch (err) {
        console.log('[ERROR] error : ', err);
        return null;
    }
}