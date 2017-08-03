var username = "akshay";
//class for get and set
class getsetclass {
    private uname:string;
    constructor(uname:string) {
        this.uname=uname;
    }
    get username():string{
        if (this.uname == username) {
            return username+" user exists ..!!";
        } else {
            return "Invalid User,Try again..!!";
        }
    }
    set username(newname:string){
        if (this.uname == username) {
            console.log(this.uname);
            this.uname == newname;
        } else {
            alert("Wrong User Name..!!");
        }
    }
}

function myFunction(id:string):void {
    var uname:string = document.getElementById("username").value;
   if (uname == "") {
       alert("Enter The username First..!!");
   } else {
       //create new object pf getset class
       let user = new getsetclass(uname);
       if (id == "get") {
           //call the get of class
           document.getElementById("res").innerHTML = user.username;
       } else {
           //call the set of class
           user.username = uname;
           console.log(user);
           //document.getElementById("res").innerHTML = "";
       }
   }
}