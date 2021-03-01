
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');
const gitBtn = document.querySelector('#btn3');
const gitOutput = document.querySelector('#git-output');

const getJson = () => {
    fetch('json.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
           
            jsonOutput.innerHTML = "";
            data.forEach(post => {
                jsonOutput.innerHTML +=
                `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
                `
            })
        })
        .catch(error => {
            console.log('Error ' + error);
        })

}

const getGit = () => {

    fetch('https://api.github.com/users/Lexicon-NA21/repos', {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        //console.log(data);

        gitOutput.innerHTML = '';

        data.forEach(repo => {
            gitOutput.innerHTML +=
            `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
              <a href="${repo.html_url}" class="card-link">${repo.name}</a>
              <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
            </div>
            </div>

            `
        })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}


jsonBtn.addEventListener('click', getJson);
gitBtn.addEventListener('click', getGit);


const getRequest = (url, cb) => {
    const http = new XMLHttpRequest();
  
    http.addEventListener('readystatechange', () => {
      // console.log(http);
    
      if(http.readyState === 4 && http.status === 200) {
        // console.log(http.responseText);
        const data = JSON.parse(http.responseText);
        cb(undefined, data);
      } 
      else if (http.readyState === 4) {
        // console.log('404 could not fetch data');
        cb('404 could not fetch data', undefined)
      }
    
    })
    
    http.open('GET', url);
    http.send();
  }

  getRequest('json.json', (error, data) => {
      console.log(error, data);
  })
