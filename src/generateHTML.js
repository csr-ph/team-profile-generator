const generateManager = function (manager) {
    return `
    <div class="col-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}"></a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}"></a></p>
                <p class="school">School: ${intern.school}</a></p>
            </div>
        </div>
    </div>
    `;
}


// function to generate cards and display on page
generateHTML = (data) => {
    let team = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            team.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            team.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            team.push(internCard);
        }
    }
    const cards = team.join('');

    const generateTeam = generatePage(cards);
    return generateTeam;
}

const generatePage = function (cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>My Team Profile</title>
    
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="display-4 text-center bg-secondary">Team Profile</h1>
                </div> 
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 justify-content-center">
                    ${cards}
                </div>
            </div>
        </div>
    
    </body>
    </html>
    `;
}

module.exports = generateHTML;