function getIssues() {
}

function showIssues(el) {
  //getting the updated list of issues
  const repo = 'kyleblee/javascript-fetch-lab-js-cert-000'; //change kyleblee back to "learn-co-curriculum" to pass tests
  fetch('https://api.github.com/repos/' + repo + '/issues')
    .then(res => res.json())
    .then(json => displayIssues(json))

  function displayIssues(json) {
    var issuesTemplate = Handlebars.compile(document.getElementById('issues-template').innerHTML);
    var issuesList = issuesTemplate(json);
    debugger; //check what issuesList looks like
    document.getElementById('issues').innerHTML = issuesList;
  }
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
