let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "People with a Banana allergy have an increase in having which allergy?",
	"a": "latex allergy",
	"b": "corn allergy",
	"c": "rubber allergy",
	"d": "dried fruit allergy",
	"image":"quizimages/banana.png",
	"answer": "a"
   },
   {
	"question": "What is the third word in the third chapter in the third book of the harry potter series?",
	"a": "Reparo",
	"b": "Harry",
	"c": "Several",
	"d": "Heartstring",
	"image":"quizimages/harry3.jpg",
	"answer": "c"
   },
   {
	"question": "What is the most common type of bone break in children, teens, and seniors?",
	"a": "The arm",
	"b": "The leg",
	"c": "The collar",
	"d": "The wrist",
	"image":"quizimages/brokenbones.jpg",
	"answer": "c"
   },
   {
	"question": "How many versions of the monopoly boardgame are there?",
	"a": "1129",
	"b": "1135",
	"c": "1144",
	"d": "1152",
	"image":"quizimages/monopoly.jpg",
	"answer": "c"
   },
    {
	"question": "How much would all of the sims 3 dlcs cost in total?",
	"a": "$512.82",
	"b": "$512.80",
	"c": "$512.81",
	"d": "$192.12",
	"image":"quizimages/sims3cover.jpg",
	"answer": "c"
   },
   {
	"question": "What is the sixth word in the sixth chapter in the sixth book of the harry potter series?",
	"a": "Wand",
	"b": "Poltergeist",
	"c": "Of",
	"d": "Which",
	"image":"quizimages/harry6.jpg",
	"answer": "c"
   },
   {
	"question": "How many lego bricks are there to people?",
	"a": "92 lego briks per person",
	"b": "at least 6 lego bricks per person",
	"c": "81 lego bricks per person",
	"d": "86 lego bricks per person",
	"image":"quizimages/lego.jpg",
	"answer": "d"
   },
   {
	"question": "The avarage human contains enough carbon to create how many pencils?",
	"a": "at least 8 pencils",
	"b": "917 pencils",
	"c": "900 pencils",
	"d": "842 pencils",
	"image":"quizimages/pencil.jpg",
	"answer": "c"
   },
   {
	"question": "If you watch a gif that is 1650 milliseconds how many times can you watch it in a singal day?",
	"a": "53,127 times",
	"b": "52,374 times",
	"c": "52,363 times",
	"d": "at least 10 times",
	"image":"quizimages/gif.jpg",
	"answer": "c"
   },
    {
	"question": "What is this visual novel?",
	"a": "A dating sim with cute girls.",
	"b": "A literature based novel where you can date the club members by writing poems.",
	"c": "A game for weebs where they date 2D girls.",
	"d": "A psychological horror game disguised as a cute dating sim to lure you into a false sense of security and to completely turn on you when you least expect it.",
	"image":"quizimages/doki.png",
	"answer": "d"
   },
   
 ];
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "80%";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
	
	
	//move to the next question
	currentQuestion++;
	if(currentQuestion >= question.length) {
		// create a special image
		message = "You somehow managed to get a good score on this quiz filled with random infomation you are amazing!"
	}else{
		loadQuestion();
	}
	
	
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
    
  
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 