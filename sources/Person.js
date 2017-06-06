
var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};
var address = function (street, city, state){ 
    
    this.street = street;
    this.city = city;
    this.state = state;
};

Person.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

    
    address.prototype = {

    myaddress : function() {
        return this.street + (this.city ? ' ' + this.city: '') + ' ' + this.state;
    }
};
