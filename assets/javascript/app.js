//Timer variables
var time=30;
var intervalId;
var score=0;


$("#start").on("click",function(){ //what happens when "start" is clicked
    start()
    $("#start").remove();
    $("#timer").css("display","block")
    $("#submit").css("display","block")
    $('#questions').css("display","block")
    $('#countDown').html("Time Remaining: "+time+" Seconds")   
})  
 
function start () {
    intervalId=setInterval(decrement,1000)
}
function decrement() { //countdown timer
    time--;
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    if (time === 0) { // when time runs out
        clearInterval(intervalId)
        for (var i = 0;i<quizQuestions.length;i++){
            if(($("input[name='optradio " + i + "']:checked").val()) == quizQuestions[i].correctAnswer) {
                score++
            }
        
        }
        $("#timer").css("display","none")
        $("#submit").css("display","none")
        $('#questions').html("You ran out of time and got " + score + " correct!")
        $('#questions').append('<p>And you missed '+ (quizQuestions.length-score) + '</p>')
    }
}
//Questions
var quizSection =document.getElementById('questions');


var quizQuestions = [
    {
        question: "Which one of these is NOT a Startcraft Race?",
        answers: [
            "Zerg",
            "Protoss",
            "Xel-Naga",
            "Terran"
        ],
        correctAnswer:2
    },
        {
            question: "Who is the main Protagonist?",
            answers: [
                "Sarah Kerrigan",
                "Jim Raynor",
                "Matt Horner",
                "Murlocs"
            ],
            correctAnswer:1
        },
        {
            question: "What is the cost of a Cybernetics Core?",
            answers: [
                "150 Minerals/150 Gas",
                "50 Minerals/ 50 Gas",
                "100 Minerals/ 100 Gas",
                "200 Minerals/ 50 Gas"
            ],
            correctAnswer:0
        },
        {
            question: "What does RTS stand for?",
            answers: [
                "Real Time Simulator",
                "Really Tough Stuff",
                "Real Time Strategy",
                "Read Text Script"
            ],
            correctAnswer:2
        },
        {
            question: "Who is the Queen of Blades?",
            answers: [
                "Sarah Kerrigan",
                "Jim Raynor",
                "Matt Horner",
                "Thrall"
            ],
            correctAnswer:0
        }
    ]
    var questionNumber;

    $(quizQuestions).each(function(i,e) { //creating questions on the page
        questionNumber=i;
          $("#questions").append('<p id = "question ' + i+ '">'+ e.question + '</p>')
          for (i=0;i<4;i++){
            $("#questions").append('<label class ="radio-inline"><input type= "radio" name="optradio ' + questionNumber + '" value ="'+ i+ '">'+  e.answers[i]+ '</label>')
       }
    }

    )

$("#submit").click(function(){ // Submitting answers and checking them to the correct answer value
    for (var i = 0;i<quizQuestions.length;i++){
    if(($("input[name='optradio " + i + "']:checked").val()) == quizQuestions[i].correctAnswer) {
        score++
    }

}
$("#timer").css("display","none") // Clears screen and displays score
$("#submit").css("display","none")
$('#questions').html("You got " + score+ ' correct!')
$('#questions').append('<p>And you missed '+ (quizQuestions.length-score) + '</p>')

}); 
