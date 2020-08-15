// Movie Basics

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        rating!==undefined?this.rating=rating:this.rating="PG";
        this._getPg = this._getPg.bind(this);
    }
    _getPg(...obj){
       let movieList = obj.filter(a=> a.rating === 'PG');
         console.log(movieList);
    }
}
let m1 = new Movie('The Shawshank Redemption','Studio A');
let m2 = new Movie(' The Godfather','Studio B','UG');
let m3 = new Movie('The Godfather: Part II','Studio C','PG');
let m4 = new  Movie('The Dark Knight','Studio D','AG');
let m5 = new Movie();
m5._getPg(m1,m2,m3,m4);