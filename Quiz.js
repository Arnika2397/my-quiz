class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    console.log(question);
    //write code to change the background color here
    background("grey");
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    strokeWeight(5)
    fill("black")
    text("RESULT OF THE QUIZ",350, 50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Cntestant who answered correct are hightlightes in green color*",130,230);
      var y = 300;
      for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("green")
        else
        fill("red");
        text(allContestants[plr].name+ " : "+ allContestants[plr].answer,400,y);
        y= y+40;
      }
    }
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
   
  }

}
