document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == 'Student' && password == '123') {
      // Make AJAX request to validate login credentials
      // If login is successful, display assignment questions
      document.getElementById('fname').innerHTML =
        'Welcome ' + document.getElementById('name').value;
      displayAssignmentQuestions();
    }
  });

function displayAssignmentQuestions() {
  document.getElementById('assignmentQuestions').classList.remove('hidden');
  var questionsList = document.getElementById('questionsList');
  // Mock data for assignment questions
  var questions = ['', '', ''];
  questions.forEach(function (question) {
    var listItem = document.createElement('li');
    listItem.textContent = question;
    questionsList.appendChild(listItem);
  });
}
