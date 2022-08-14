import axios from "axios";

export class ContactService{

    static serverUrl = 'http://127.0.0.1:9000';

    static getAllGroup()
    {
        let dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl); 
    }

    static getGrpName(contact)
    {
        let groupId = contact.groupid;
        let dataUrl = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl);
    }

    static getAllContact()
    {
        let dataUrl = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl);
    }

    static getSingleContact(ContId)
    {
        let dataUrl = `${this.serverUrl}/contacts/${ContId}`;
        return axios.get(dataUrl);
    }

    static createContact(contact)
    {
        let dataUrl = `${this.serverUrl}/contacts`;
        return axios.post(dataUrl,contact);
    }

    static updateContact(contact,ContId)
    {
        let dataUrl = `${this.serverUrl}/contacts/${ContId}`;
        return axios.put(dataUrl,contact);
    }

    static deleteContact(ContId)
    {
        let dataUrl = `${this.serverUrl}/contacts/${ContId}`;
        return axios.delete(dataUrl);
    }

}