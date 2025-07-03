"use strict";
////////////////////////////////////////////
///User
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.username = username;
        this.email = email;
    }
    retryFunctionality(retryfn, message) {
        const tryagain = confirm(`${message},Do you want to try again`);
        if (tryagain)
            retryfn();
    }
    viewMovieNames() {
        for (const movie of User.movieList) {
            let str = `${movie.name},seatsLeft:${movie.availableSeats}`;
            console.log(str);
        }
    }
}
User.movieList = [];
////////////////////////////////////////////////
///Admin
class Admin extends User {
    constructor(username, email) {
        super(username, email);
    }
    Addmovie() {
        const movieName = prompt('Enter the movie name to Add');
        const allocatedSeat = Number(prompt('Enter the allocated seat'));
        console.log('hai');
        if (!movieName || !movieName.length || !allocatedSeat) {
            return this.retryFunctionality(() => () => this.Addmovie(), 'Invalid Movie name for adding');
        }
        const movie = {
            name: movieName,
            availableSeats: allocatedSeat,
        };
        User.movieList.push(movie);
        console.log(User.movieList);
    }
}
////////////////////////////////////////////////////////
///Customers
class Customers extends User {
    constructor(username, email) {
        super(username, email);
    }
    Bookmovie() {
        const movieName = prompt('Enter the movie Name for booking');
        if (!movieName || !movieName.length) {
            this.retryFunctionality(() => this.Bookmovie(), 'Movie not found');
            return;
        }
        const findIndex = User.movieList.findIndex(movie => movie.name.toLowerCase() === movieName.trim().toLowerCase());
        if (findIndex == -1)
            return this.retryFunctionality(() => this.Bookmovie(), 'No movie Found');
        const movie = User.movieList[findIndex];
        if (movie.availableSeats < 1) {
            return console.log('No Seat Available');
        }
        let seatInput = prompt('Enter the number of seats');
        if (!seatInput || isNaN(Number(seatInput))) {
            return this.retryFunctionality(() => this.Bookmovie, 'Invalid number of seats');
        }
        let numberOfSeat = Number(seatInput);
        const booked = [];
        while (numberOfSeat) {
            let str = `${movie.name.toUpperCase()}${movie.availableSeats--}`;
            numberOfSeat--;
            booked.push(str);
        }
        console.log(booked);
    }
}
////////USAGE//////////////
const admin = new Admin('Ebi', 'ebimanoj28@gmail.com');
const customer = new Customers('Ebi', 'ebimanoj28@gmail.com');
admin.Addmovie();
admin.viewMovieNames();
customer.Bookmovie();
