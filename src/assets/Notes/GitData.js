export default [
    {
        "id": "1",
        "topic": "1. How to initialize a new Git repository?",
        "content": "Use the `git init` command to initialize a new Git repository in your project directory.",
        "code": "git init",
        "language": "bash"
    },
    {
        "id": "2",
        "topic": "2. How to check the status of files in a Git repository?",
        "content": "Use `git status` to view the current status of tracked and untracked files in your repository.",
        "code": "git status",
        "language": "bash"
    },
    {
        "id": "3",
        "topic": "3. How to stage a file for commit in Git?",
        "content": "The `git add` command stages files, preparing them for commit. You can specify the filename to stage specific files.",
        "code": "git add filename",
        "language": "bash"
    },
    {
        "id": "4",
        "topic": "4. How to commit staged changes with a message?",
        "content": "To commit staged changes with a descriptive message, use the `git commit` command followed by the `-m` flag and your message.",
        "code": "git commit -m 'Your commit message here'",
        "language": "bash"
    },
    {
        "id": "5",
        "topic": "5. How to view the commit history in Git?",
        "content": "Use `git log` to view the commit history, which shows each commit with its author, date, and message.",
        "code": "git log",
        "language": "bash"
    },
    {
        "id": "6",
        "topic": "6. How to clone a Git repository from GitHub?",
        "content": "To copy a repository from GitHub to your local machine, use `git clone` followed by the repository URL.",
        "code": "git clone https://github.com/username/repository.git",
        "language": "bash"
    },
    {
        "id": "7",
        "topic": "7. How to create a new branch in Git?",
        "content": "Use `git branch` with a branch name to create a new branch. Branches help you work on features independently.",
        "code": "git branch branch_name",
        "language": "bash"
    },
    {
        "id": "8",
        "topic": "8. How to switch to a different branch?",
        "content": "To switch branches, use the `git checkout` command followed by the branch name.",
        "code": "git checkout branch_name",
        "language": "bash"
    },
    {
        "id": "9",
        "topic": "9. How to merge a branch into the current branch?",
        "content": "Merging integrates changes from one branch into the current branch. Use `git merge` followed by the branch name.",
        "code": "git merge branch_name",
        "language": "bash"
    },
    {
        "id": "10",
        "topic": "10. How to delete a branch locally?",
        "content": "To delete a branch locally, use `git branch -d` followed by the branch name. Be cautious, as this cannot be undone easily.",
        "code": "git branch -d branch_name",
        "language": "bash"
    },
    {
        "id": "11",
        "topic": "11. How to push changes to a remote repository on GitHub?",
        "content": "Use `git push` with the remote name and branch to upload changes to GitHub. `origin` is the default remote name.",
        "code": "git push origin branch_name",
        "language": "bash"
    },
    {
        "id": "12",
        "topic": "12. How to pull the latest changes from a remote repository?",
        "content": "To download and integrate changes from a remote branch, use `git pull` followed by the remote name and branch.",
        "code": "git pull origin branch_name",
        "language": "bash"
    },
    {
        "id": "13",
        "topic": "13. How to discard changes in a modified file?",
        "content": "If you want to discard changes in a file, use `git checkout -- filename`. This reverts the file to its last committed state.",
        "code": "git checkout -- filename",
        "language": "bash"
    },
    {
        "id": "14",
        "topic": "14. How to reset a file to the last committed state?",
        "content": "Use `git reset` followed by the filename to unstage changes and reset a file to the previous commit’s state.",
        "code": "git reset filename",
        "language": "bash"
    },
    {
        "id": "15",
        "topic": "15. How to unstage a staged file?",
        "content": "To unstage a file, use `git reset HEAD` with the filename, which removes it from the staging area but keeps the changes.",
        "code": "git reset HEAD filename",
        "language": "bash"
    },
    {
        "id": "16",
        "topic": "16. How to remove a file from both the Git index and the working directory?",
        "content": "The `git rm` command removes a file from both the working directory and the index, staging the deletion for commit.",
        "code": "git rm filename",
        "language": "bash"
    },
    {
        "id": "17",
        "topic": "17. How to view differences in unstaged changes?",
        "content": "Use `git diff` to see changes in files that have been modified but not yet staged.",
        "code": "git diff",
        "language": "bash"
    },
    {
        "id": "18",
        "topic": "18. How to create a new repository on GitHub?",
        "content": "Go to GitHub, click on 'New Repository', fill in the details (like name and description), and click 'Create repository' to initialize a new repository.",
        "language": "text"
    },
    {
        "id": "19",
        "topic": "19. How to add a remote repository in Git?",
        "content": "The `git remote add` command adds a new remote repository reference, allowing you to push and pull code from the remote.",
        "code": "git remote add origin https://github.com/username/repository.git",
        "language": "bash"
    },
    {
        "id": "20",
        "topic": "20. How to fetch updates from a remote repository without merging?",
        "content": "Use `git fetch` to retrieve updates from the remote repository without merging. This is useful for checking the latest changes before integrating them.",
        "code": "git fetch origin",
        "language": "bash"
    }
]
