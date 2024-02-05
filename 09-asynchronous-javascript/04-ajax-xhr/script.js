const xhr = new XMLHttpRequest();

// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');


xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

// Send request
xhr.send();
