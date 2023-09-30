// javascript code goes here
document.getElementById("reveal").style.display = "none"


let buttonArray = document.getElementsByTagName("button")
let count = 0
let player1 = ""
let player2 = ""

document.getElementById("p1").addEventListener("input", function () {
    player1 = document.getElementById("p1").value
})
document.getElementById("p2").addEventListener("input", function () {
    player2 = document.getElementById("p2").value
})


document.getElementById("start").addEventListener("click", function (e) {
    e.preventDefault()
    if (player1.length != 0 && player2.length != 0) {
        document.getElementsByTagName('section')[0].remove()
        document.getElementsByTagName("body")[0].style.backgroundColor = "skyblue"
        document.getElementsByTagName("h1")[0].innerText = "Welcome " + player1 + " and " + player2 + " Lets play !!!"
        document.getElementById("reveal").style.display = "block"
        document.getElementById("play1").innerText = "It's " + player1 + "'s turn, place 'X' anywhere on empty grid"

        



        for (let i = 0; i < buttonArray.length; i++) {
            buttonArray[i].addEventListener("click", function (e) {
                if (player1Active()) {
                    document.getElementById(e.target.id).innerText = "X"
                    document.getElementById(e.target.id).disabled = true
                    if (whetherWonOrNot()) {
                        win(player1)
                    }
                    else {
                        if (count == 8) {
                            draw()
                        }
                        document.getElementById("play1").innerText = ""
                        document.getElementById("play2").innerText = "It's " + player2 + "'s turn, place 'O' anywhere on empty grid"
                    }
                    count += 1

                } else {
                    document.getElementById(e.target.id).innerText = "O"
                    document.getElementById(e.target.id).disabled = true
                    if (whetherWonOrNot()) {
                        win(player2)
                    }
                    else {
                        document.getElementById("play1").innerText = "It's " + player1 + "'s turn, place 'X' anywhere on empty grid"
                        document.getElementById("play1").style.backgroundColor = "skyblue"
                        document.getElementById("play2").innerText = ""
                    }
                    count += 1;

                }
            })

        }

        function player1Active() {
            if (document.getElementById("play2").innerText == "") {
                return true
            }
        }
        function win(player) {
            alert("Congratulations! " + player + " wins.")
        }
        function draw() {
            alert("Draw!")
        }
        function whetherWonOrNot() {
            if (document.getElementById("1").innerText == document.getElementById("2").innerText && document.getElementById("2").innerText == document.getElementById("3").innerText && document.getElementById("1").innerText != "" && document.getElementById("2").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("4").innerText == document.getElementById("5").innerText && document.getElementById("5").innerText == document.getElementById("6").innerText && document.getElementById("4").innerText != "" && document.getElementById("5").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("7").innerText == document.getElementById("8").innerText && document.getElementById("8").innerText == document.getElementById("9").innerText && document.getElementById("7").innerText != "" && document.getElementById("8").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("1").innerText == document.getElementById("4").innerText && document.getElementById("4").innerText == document.getElementById("7").innerText && document.getElementById("1").innerText != "" && document.getElementById("4").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("2").innerText == document.getElementById("5").innerText && document.getElementById("5").innerText == document.getElementById("8").innerText && document.getElementById("2").innerText != "" && document.getElementById("5").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("3").innerText == document.getElementById("6").innerText && document.getElementById("6").innerText == document.getElementById("9").innerText && document.getElementById("3").innerText != "" && document.getElementById("6").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("1").innerText == document.getElementById("5").innerText && document.getElementById("5").innerText == document.getElementById("9").innerText && document.getElementById("1").innerText != "" && document.getElementById("5").innerText != "") {
                console.log(true)
                return true
            } else if (document.getElementById("7").innerText == document.getElementById("5").innerText && document.getElementById("5").innerText == document.getElementById("3").innerText && document.getElementById("7").innerText != "" && document.getElementById("5").innerText != "") {
                console.log(true)
                return true
            } else {
                return false
            }
        }
    } else {
        document.getElementById("error").innerText = "Please Enter Your names to Start !!"
    }
})


