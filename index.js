//READ ABOUT THE BODY OF FETCH AGAIN (SINCE YOU MESSED IT UP LAST TIME) AND THEN CONTINUE ON.
//STOPPED AT SHOW ISSUES (EVERYTHING IS GOOD UP TO THERE).

function getIssues() {
}

function showIssues(json) {
  console.log(json);
  debugger;
}

function createIssue() {
  event.preventDefault();
  var token = getToken();
  var repo = 'kyleblee/javascript-fetch-lab-js-cert-000'; //change kyleblee back to "learn-co-curriculum" to pass tests
  var postTitle = document.getElementById('title').value;
  var postBody = document.getElementById('body').value;
  var postData = {
    title: postTitle,
    body: postBody
  }

  debugger; //check postTitle and postBody

  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showResults(json) {
  var resultsTemplate = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  var resultsList = resultsTemplate(json);
  document.getElementById('results').innerHTML = resultsList;
}

function forkRepo() {
  const repo = 'kyleblee/javascript-fetch-lab-js-cert-000'; //change kyleblee back to "learn-co-curriculum" to pass tests
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks')
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
