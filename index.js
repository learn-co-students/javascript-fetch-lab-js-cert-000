const username = 'kyleblee';
const baseAPI = 'https://api.github.com/';
const fork = `${username}/javascript-fetch-lab`;

function getIssues() {
  fetch(`${baseAPI}repos/${fork}/issues`).
    then(res => res.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  var issuesTemplate = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = issuesTemplate(json);
}

function createIssue() {
  // event.preventDefault();
  var postTitle = document.getElementById('title').value;
  var postBody = document.getElementById('body').value;
  var postData = {
    title: postTitle,
    body: postBody
  }

  fetch(`${baseAPI}repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  var resultsTemplate = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = resultsTemplate(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';

  fetch(`${baseAPI}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).
    then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
