//     class movie{
    //           constructor(title,studio,rating){
    //             this.title=title;
    //             this.studio=studio;
    //             //this.rating=rating;
    //             if(rating==null){
    //                 return this.rating="PG"
    //             }else{
    //                 return this.rating=rating;
    //             }
    //           }
    //           getpg(arr){

    //             let PGResult=[];
    //             for(var i=0;i<arr.length;i++){
    //                 if(arr[i].rating=="PG"){
    //                     PGResult.push(arr[i])
    //                 }

                    
    //             }               
    //             console.log(PGResult)

    //           }
    //     }

    //     var movie1=new movie("casino","Eon production","PG13")
    //     var movie2=new movie("VTV","Gowtham production","PG")
    //     var movie3=new movie("doctor","SK production","PG5")
    //     var movie4=new movie("jailer","sun production","PG")
    //     var movie5=new movie("PS1","mani production","PG")

    //    let arr=[movie1, movie2, movie3, movie4, movie5]
    //    movie1.getpg(arr);

    ///////////////////////////////////////////////////////

    // class circle {
    //             constructor(radius, color) {
    //                 this.radius = radius;
    //                 this.color = color;

    //             }
    //             getradius() {
    //                 console.log(`radius of the circle is${this.radius}`)
    //             }
    //             getcolor() {
    //                 console.log(`color of the circle is${this.color}`)
    //             }
    //             getarea() {
    //                 console.log(`area of circle is ${Math.PI * this.radius * this.radius}`)
    //             }

    //             getcircum() {
    //                 console.log(`circumference of circle is ${Math.PI * 2 * this.radius}`)
    //             }
    //         }

    //         var circle1 = new circle(20, "red")
    //         var circle2 = new circle(10, "green")
    //         var circle3 = new circle(30, "pink")
    //         var circle4 = new circle(50, "yellow")
    //         var circle5 = new circle(40, "white")



    //         circle1.getarea();
    //         circle2.getarea();
    //         circle3.getarea();
    //         circle4.getarea();
    //         circle5.getarea();

    //         circle1.getcircum();
    //         circle2.getcircum();
    //         circle3.getcircum();
    //         circle4.getcircum();
    //         circle5.getcircum();

    //         circle1.getcolor();
    //         circle5.getradius();
    ////////////////////////////////////////////

    // class person{
    //     constructor(name,age,course,place){
    //         this.name=name;
    //         this.age=age;
    //         this.course=course;
    //         this.place=place;
    //     }

    // getoutput(){

    //     console.log(`I am ${this.name} and I am from ${this.place} and I am learning ${this.course}at the age of ${this.age}`)
    // }

    // }

    // var s1=new person("gayathri",29,"JS","coimbatore")
    // s1.getoutput();
    //////////////////////////////////////////////
//     class uberride{
//               constructor(distance,waitingcharge){
//                 this.distance=distance;
//                 this.waitingcharge=waitingcharge
//               }

//             getprice(){
//                 let totalfare=(this.distance*30)+this.waitingcharge
//                 console.log(`total price for uber ride is ${totalfare}`)
//             }

// }

// var uberride1=new uberride(10,50);
// uberride1.getprice();
