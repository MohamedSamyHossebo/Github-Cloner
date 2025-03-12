## 🛠️ About the Project
This is a simple Node.js script that allows users to scan a GitHub user's repositories and clone any selected repository. It interacts with the GitHub API to fetch repository details and uses the `git` command to perform cloning.

## 📌 Features
- Fetches all repositories for a given GitHub username.
- Displays repository names and the total count.
- Allows the user to select a repository to clone.
- Uses the `git clone` command to clone the selected repository.

## 🚀 Installation & Usage
### 1️⃣ Prerequisites
- Node.js installed on your machine.
- Git installed on your machine.

### 2️⃣ Install Dependencies
Run the following command in the project directory:
```sh
npm install
```

### 3️⃣ Run the Script
Execute the script using:
```sh
npm run build 
```

### 4️⃣ Open the exe and Enter GitHub Username
After running the script, enter a valid GitHub username when prompted.

### 5️⃣ Select a Repository to Clone
The script will display a list of repositories. Enter the corresponding number to clone a specific repository.

## 📝 Example Output
```
======================================
    🛠️  Github Cloner Script
    📌 Developed by: Mohamed Samy
    📅 Copyright © 2025
======================================

Enter GitHub username: johndoe

Repositories (5 total):
1. my-first-repo
2. test-project
3. node-app
4. portfolio-site
5. demo-repo

Enter the number of the repo to clone: 3
Cloning node-app...
Repository cloned successfully!
```

## 🔧 Troubleshooting
- **Error: Command 'git' not found** → Make sure Git is installed and added to your system's PATH.
- **Error fetching repositories** → Ensure the username is correct and check your internet connection.

## 📜 License
This project is open-source and available for modification. Feel free to use it in your projects.

---

💡 **Developed by Mohamed Samy** 🚀

