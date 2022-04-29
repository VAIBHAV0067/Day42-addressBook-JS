//UC1 Ability to create a Address Book Contact with first and last names,address, city, state, zip, phone number and email...RG----
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    eMail;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }

        toString(){
            return ("FullName: "+this.firstName+this.lastName+"|Full Address: "+this.address+","+this.city+","+this.state+","+this.zip+"|Phone: "+this.phoneNumber+ "|EMail: "+this.eMail);
        }
}
let contactObj = new Contact("Vaibhav","Manapure","Subhash Ward no,14","Samudrapur,Wardha","Maharshtra",442305,9764510067,"manapure.vaibhav@gmail.com");
console.log(contactObj.toString());