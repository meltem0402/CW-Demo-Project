import { LightningElement } from 'lwc';

export default class Calendly extends LightningElement {
    @api calendlyURL;

    connectedCallback(){
        this.calendlyURL = this.calendlyURL?this.calendlyURL.replaceAll('%3A', ':').replaceAll('%2F', '/'):'';
    }

}