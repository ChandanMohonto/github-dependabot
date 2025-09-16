

# **Dependabot Demo Project**

## **Introduction**

This demo project demonstrates how to use **Dependabot** in a **Node.js** application for **automated dependency management**. It includes a basic **Express** server that makes an HTTP request to the **GitHub API** using **Axios**. With **Dependabot** configured, the project will automatically propose pull requests to update dependencies, ensuring the app is always up-to-date with minimal manual effort.

## **Why Use Dependabot?**

* **Automated Dependency Updates**: **Dependabot** automatically checks for updates to your dependencies and creates pull requests to update them, saving time on manual dependency management.

* **Security**: By automatically proposing updates for known vulnerabilities, **Dependabot** helps secure your project by keeping dependencies patched.

* **Improved Project Health**: Regular updates ensure your project is using the latest stable versions of libraries, reducing technical debt and preventing compatibility issues.

* **Customizable**: You can configure the frequency of updates, manage pull request limits, and even set up **Dependabot** for different ecosystems (e.g., npm, Docker, Python).

## **How to Use Dependabot**

### **Step 1: Set Up the Node.js Project**

1. **Clone the Repository**:
   Clone the project to your local machine:

   ```bash
   git clonehttps://github.com/ChandanMohonto/github-dependabot.git
   cd github-dependabot
   ```

2. **Install Dependencies**:
   Run the following command to install dependencies:

   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the app with:

   ```bash
   node index.js
   ```

   Visit `http://localhost:3000` in your browser to see the GitHub API response.

### **Step 2: Set Up Dependabot**

1. **Create the `dependabot.yml` Configuration File**:
   In the root of your project, create a `.github` folder if it doesn’t already exist:

   ```bash
   mkdir .github
   touch .github/dependabot.yml
   ```

2. **Add the Following Configuration** to `dependabot.yml`:

   ```yaml
   version: 2
   updates:
     - package-ecosystem: "npm"
       directory: "/"
       schedule:
         interval: "daily"   # Can be "weekly", "monthly", or "daily"
       commit-message:
         prefix: "chore"
       open-pull-requests-limit: 5
   ```

3. **Commit and Push to GitHub**:
   After creating the configuration file, commit it and push the changes to GitHub:

   ```bash
   git add .github/dependabot.yml
   git commit -m "Add Dependabot configuration"
   git push origin master
   ```

### **Step 3: Wait for Dependabot to Run**

* **Dependabot** will now run according to the schedule set in `dependabot.yml`. It will check for updates to your dependencies (`express` and `axios` in this case) and create pull requests when new versions are available.

* You can view the pull requests in the **Pull Requests** section of your GitHub repository.

### **Step 4: Review and Merge Pull Requests**

* When **Dependabot** creates a pull request to update a dependency, review the PR, check the release notes, and test the changes.

* Once you're confident that the update is safe, merge the PR. **Dependabot** will automatically clean up the branch after merging.

---

## **Conclusion**

By integrating **Dependabot** into your Node.js project, you automate the process of dependency management, ensuring your project is always up-to-date with the latest, secure, and compatible dependencies. This reduces the maintenance burden and improves the overall health of your codebase.

Let Dependabot do the heavy lifting, so you can focus on building great features!

---

### **Useful Links**

* [GitHub Dependabot Documentation](https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates)
* [Node.js Documentation](https://nodejs.org/en/docs/)

---

