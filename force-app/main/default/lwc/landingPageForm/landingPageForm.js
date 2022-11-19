import { LightningElement, api } from 'lwc';
import CreateAd from '@salesforce/apex/leadUI.CreateAd';
import CreateLead from '@salesforce/apex/leadUI.CreateLead';
//import {ShowToastEvent} from 'Lightning/platformShowToastEvent';

export default class LandingPageForm extends LightningElement {

    isRegistered = false;
    firstName;
    lastName;
    email;
    phone;
    street;
    city;
    state;
    zipCode;
    country;
    infoDate;
    course;

    leadRecord = {
        FirstName:'',
        LastName:'',
        Street:'',
        City:'',
        State:'',
        PostalCode:'',
        Country:'',
        Email:'',
        Phone:''
    }

    AdRecord = {
        UTM_Campaign__c:'',
        UTM_Content__c:'',
        UTM_Medium__c:'',
        UTM_Referer__c:'',
        UTM_Source__c:'',
        UTM_Term__c:'',
        UTM_Id__c:''
    }


    @api UTM_Campaign;
    @api UTM_Content;
    @api UTM_Medium;
    @api UTM_Referer;
    @api UTM_Source;
    @api UTM_Term;
    @api UTM_Id;

    connectedCallback(){




    }



    

}
