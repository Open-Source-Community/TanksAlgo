class UserData{
    constructor(name , email , userKey  , score , problems_solved)
    {
      this.name = name; 
      this.email = email; 
      this.userKey = userKey; 
      this.problems_solved = problems_solved; 
      this.score= score; 
      this.logged = true; 
    }
  
    pushUser()
    {
      var database = firebase.database(); 
      var ref = database.ref("Users"); 
      ref.push({
        Name : this.name , 
        Email : this.email , 
        UserKey: this.userKey , 
        Problems_solved: this.problems_solved , 
        Score: this.score
      });
    }
  }

