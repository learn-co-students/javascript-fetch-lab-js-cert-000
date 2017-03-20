function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  var resultsTemplate = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  var resultsList = resultsTemplate(json);
  document.getElementById('results').innerHTML = resultsList;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
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
