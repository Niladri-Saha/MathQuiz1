player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;
var get_correct = "";
function send() {
    var get_number1 = document.getElementById("number1").value;

    var get_number2 = document.getElementById("number2").value;

 get_correct = get_number1 * get_number2;

    question = "<span>" + get_number1 + "x" + get_number2 + "</span>";
    inputbox = "<br>answer :<input type='text' id='input_check_box'>";
    btn = "<br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question + inputbox + btn;
    document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value="";
   document.getElementById("number2").value="";
}
answer_turn = "player2";
question_turn = "player1";

function check() {
    get_answer = document.getElementById("input_check_box").value;


    if (get_answer == get_correct) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}