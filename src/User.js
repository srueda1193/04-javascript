export class User {

    username; //string
    email; //string
    password; //string password
    firstName; //string
    lastName; // string
    bithDay; //date

    constructor(username, email, password, firstName, lastName, bithDay) {

        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bithDay = bithDay;

    }

}

export class Flat {

    city; //string
    streetName; //String
    streetNumber; //number
    areaSize; //number
    hasAC; // boolean
    yearBuilt; // number
    rentPrice; // Number
    dateAvailable; //Date

    constructor(city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable) {
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.areaSize = areaSize;
        this.hasAC = hasAC;
        this.yearBuilt = yearBuilt;
        this.rentPrice = rentPrice;
        this.dateAvailable = dateAvailable;
    }

}