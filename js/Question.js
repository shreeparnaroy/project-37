class Form {

    constructor() {
      this.input = createInput("welcome to our game");
     this.button = createButton("play")
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
     this.button.hide();
      this.input.hide();
    }
  
    display(){
     
      title.html("my quiz game");
      title.position(350, 0);
  
     this.question.html("question- what start with letter E ane ends with it but only ha sone letter")
     this.question.position(150,80)
     this.option1.html("elephant")
     this.option1.position(150,100)
     this.option2.html("envelope")
     this.option2.position(150,120)
     

     this.input.position(150,230)
  
    }
  }
 