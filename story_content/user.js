function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kJSoh5EPt1":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwfWAPOEZdnc2ngxzZnspooWXdmmAvc8B35oDQFah-fExT56_IH1K5AcHanNniRBxkh/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

