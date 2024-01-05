let cash = 0;
let randoWord = "scorched" 
let randoString = "Earth"

function randomalert() {
    alert( 'IT COMES FOR YOU...' );
    alert( '...' );
    alert('IT HAS APPEARD OUTSIDE...');
    alert('...');
    alert('.. IT FLOATS DOWN LOW AND UP HIGH..');
    alert('...');
    alert('DO NOT LOOK OUTSIDE.');
    alert('OR YOU WILL SURELY DIE.');
    alert('...');
    alert('...');
}

function setadmin() {
    let admin, name;
    name = "john";
    admin = name;
    alert(admin);
}


function twovars() {
    alert(`${randoWord} ${randoString}`);
}

function firstPrompt() {
    let favColor = prompt("What's your favorite color?", '');
    alert(`You favorite color is ${favColor}? WOW. CRAZY.`);
}

function combineStrings() {
    let bine = "two" + "strings";
    alert(bine);
}

function increaseCash() {
    cash++;
}

function decreaseCash() {
    cash--;
}

function showCash() {
    alert(`Your total cash: ${cash}`);
}

function ifelse() {
    let sky = prompt("What color is the sky?");

    if (sky == "blue") {
        alert("No shit.");
    } else if (sky == "red") {
        alert("Better run.. the man is about to show up.");
    } else if (sky == "green") {
        alert("... I'd stay inside if I were you.");
    } else if (sky == "yellow") {
        alert("No idea what that could possibly mean. but.. whatever.");
    } else if (sky == "orange") {
        alert("Strange.. that reminds me of the song Fortunate son by the band Creedence Clearwater.");
    } else if (sky == "black") {
        alert("Just like my heart.");
    } else if (sky == "pink") {
        alert("Love is in the air.... ");
        alert("I'm kidding of course, there ain't anything there.");
    } else if (sky == "purple") {
        alert("nurple.");
    } else {
        alert("God damn... you must be as stupid as the people who have more pronouns than braincells. try again.");
    }
}

function ifelse2() {
    let sky2 = prompt("What color is the sky?");

    let message = (sky2 == 'blue') ? "No shit." :
        (sky2 == 'red') ? "Better run.. the man is about to show up." :
        (sky2 == 'green') ? ".. I'd stay inside if I were you." :
        (sky2 == 'yellow') ? "No idea what that could possibly mean. but.. whatever." :
        (sky2 == 'orange') ? "Strange.. that reminds me of the song Fortunate son by the band Creedence Clearwater." :
        (sky2 == 'black') ? "Just like my heart." :
        (sky2 == 'pink') ? "heh.. no." :
        (sky2 == 'purple') ? "nurple." :
        "God damn... you must be as stupid as the people who have more pronouns than braincells. try again.";

    alert(message);
}

function loginCheck() {
    let user = prompt("Who is it?");
    if (user == "admin") {
        let pass = prompt("Ok. What is the pass?");
        if (pass == "TheMaster") {
            alert("Welcome!")
        } else {
            alert("Nice try.. now fuck off.")
        }
    } else {
        alert("Wrong pass. GO AWAY!")
    }
}