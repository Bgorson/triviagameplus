//Timer variables
var quizQuestions = [
    {
        question: "Which one of these is NOT a Startcraft Race?",
        answers: [
            "Zerg",
            "Protoss",
            "Xel-Naga",
            "Terran"
        ],
        correctAnswer:2,
        gif: "https://media.giphy.com/media/zRTYFMDNtycPm/giphy.gif"
    },
        {
            question: "Who is the main Protagonist?",
            answers: [
                "Sarah Kerrigan",
                "Jim Raynor",
                "Matt Horner",
                "Murlocs"
            ],
            correctAnswer:1,
            gif: "https://media.giphy.com/media/3oz8xwMJwWmGA49jbi/giphy.gif"
        },
        {
            question: "What is the cost of a Cybernetics Core?",
            answers: [
                "150 Minerals/150 Gas",
                "50 Minerals/ 50 Gas",
                "100 Minerals/ 100 Gas",
                "200 Minerals/ 50 Gas"
            ],
            correctAnswer:0,
            gif: "https://media.giphy.com/media/11LkMV5jfQiSti/giphy.gif"
        },
        {
            question: "What does RTS stand for?",
            answers: [
                "Real Time Simulator",
                "Really Tough Stuff",
                "Real Time Strategy",
                "Read Text Script"
            ],
            correctAnswer:2,
            gif: "https://media.giphy.com/media/3o6ZtgrHwKzt6n0m52/giphy.gif"
        },
        {
            question: "Who is the Queen of Blades?",
            answers: [
                "Sarah Kerrigan",
                "Jim Raynor",
                "Matt Horner",
                "Thrall"
            ],
            correctAnswer:0,
            gif:"https://media.giphy.com/media/wsUDVcaNz7KxXtNKdq/giphy.gif"
        }
    ]
var time=30;
var intervalId;
var score=0;
var iQuestion = 0;
var quizSection =document.getElementById('questions');
var totalQuestions = quizQuestions.length-1;
var slideTime = 3000;
function start () {
    intervalId=setInterval(decrement,1000)
}

function questionDisplay () {
    $("#timer").css("display","block")
    $("#next").css("display","block")
    if (iQuestion == totalQuestions) {
        $("#submit").css("display","block")
        $("#next").css("display","none")
      }
    $("#questions").html('<p id = "question ' + iQuestion+ '">'+ quizQuestions[iQuestion].question + '</p>')
    clearInterval(intervalId)
    time =30;
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    start(); 
    for (i=0;i<4;i++){
      $("#questions").append('<label class ="radio-inline"><input type= "radio" name="optradio ' + iQuestion + '" value ="'+ i + '">'+  quizQuestions[iQuestion].answers[i]+ '</label>')
      }  
      
}

function decrement() { //countdown timer
    time--;
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    if (time === 0) { // when time runs out
        clearInterval(intervalId)
        $("#timer").css("display","none")
        $("#submit").css("display","none")
        $('#questions').html("You ran out of time and got " + score + " correct!")
        $('#questions').append('<p>And you missed '+ (quizQuestions.length-score) + '</p>')
    }
}

function transition(slideNumber) {
    console.log(quizQuestions[slideNumber].gif)
    $('#questions').html("<img src=" + quizQuestions[iQuestion].gif + ">")
    $("#timer").css("display","none")
    $("#next").css("display","none")
    setTimeout(function() {
        questionDisplay();
    }, slideTime);
}

$("#start").on("click",function(){ //what happens when "start" is clicked
    start()
    $("#start").remove();
    $("#timer").css("display","block")
    $("#next").css("display","block")
    $('#questions').css("display","block")
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    questionDisplay()
    })

$("#next").on("click", function() {//when next is clicked
    if(($("input[name='optradio " + (iQuestion) + "']:checked").val()) == quizQuestions[iQuestion].correctAnswer) {
        score++;
    }
    transition(iQuestion)
    iQuestion++;
    
    
       })


$("#submit").click(function(){ // Submitting answers and checking them to the correct answer value
    if(($("input[name='optradio " + iQuestion + "']:checked").val()) == quizQuestions[iQuestion].correctAnswer) {
        score++;
    }
    $("#submit").css("display","none")
    $('#questions').html("<img src=" + quizQuestions[iQuestion].gif + ">")
    $("#timer").css("display","none")
    $("#next").css("display","none")
    setTimeout(function() {
        $("#timer").css("display","none") // Clears screen and displays score
        $("#submit").css("display","none")
        $('#questions').html("You got " + score+ ' correct!')
        $('#questions').append('<p>And you missed '+ (quizQuestions.length-score) + '</p>')
        $("#restart").css("display","block")
    }, slideTime);
    clearInterval(intervalId)
    

}); 

$("#restart").click(function(){
    score = 0;
    iQuestion = 0;
    $("#timer").css("display","block")
    $("#next").css("display","block")
    $('#questions').css("display","block")
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    $("#restart").css("display","none")
    questionDisplay()

})