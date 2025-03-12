const { exec } = require("child_process");
const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Display Copyright Info
console.log(`\n======================================
    🛠️  Github Cloner Script
    📌 Developed by: Mohamed Samy
    📅 Copyright © ${new Date().getFullYear()}
    ======================================\n`);
    
// ...existing code...

const getRepos = async (username) => {
    try {
        const options = {
            url: `https://api.github.com/users/${username}/repos`,
            method: 'GET',
            headers: {
                'User-Agent': 'Github-Cloner'
            }
        };
        const response = await axios(options);
        return response.data;
    } catch (error) {
        console.error("Error fetching repositories: ", error.message);
        return [];
    }
};

// ...existing code...

const displayRepos = (repos) => {
    if (repos.length === 0) {
        console.log("No repositories found.");
        return;
    }

    console.log(`\nRepositories (${repos.length} total):`);
    repos.forEach((repo, index) => {
        console.log(`${index + 1}. ${repo.name}`);
    });
};

const cloneRepo = (repoUrl) => {
    console.log(`Cloning ${repoUrl}...`);
    exec(`git clone ${repoUrl}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error cloning repo: ${error.message}`);
        } else {
            console.log("Repository cloned successfully!");
        }
        rl.close();
    });
};

rl.question("Enter GitHub username: ", async (username) => {
    const repos = await getRepos(username);
    displayRepos(repos);

    rl.question("\nEnter the number of the repo to clone: ", (num) => {
        const repoIndex = parseInt(num) - 1;
        if (repoIndex >= 0 && repoIndex < repos.length) {
            const repoUrl = repos[repoIndex].clone_url;
            cloneRepo(repoUrl);
        } else {
            console.log("Invalid selection.");
            rl.close();
        }
    });
});