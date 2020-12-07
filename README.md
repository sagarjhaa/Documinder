# Documinder

Reminder to update document

### Useful resources:

- [github-action-toolkit](https://github.com/actions/toolkit)
- [github-workflow-syntax](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)
- [github-workflow-commands](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions)
- [events-triggering-workflow](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows)
- [environment-variables](https://docs.github.com/en/free-pro-team@latest/actions/reference/environment-variables)

### How to use this action

1. Add a rules.yaml file

   - This file will be used to link the source code files to the documents that are related to that code.
   - The structure of the file is in .yaml and is as below

     ```

     rules:
        - path: "src/login/login.ts"
          documents:
           - "link.to.your.google.docs.login-user"
           - "link.to.your.google.docs.authenticate-user"
       - path: "src/login/addUser.ts"
         documents:
           - "link.to.your.document.addAdminUser"
           - "link.to.your.document.addEmployee"

     ```

   - Add more rules to the rules.yaml file. When there is a PR made, the workflow will trigger and check if there is any file updated in the PR request match with the `paths` specified in the rules and if the PR owner will need to update the documentation.

2. Add the workflow in your repository

   - Add a folder `.github/workflows`
   - Add a workflow file in the `workflows` folder with name `document-update.yaml`.
   - Add the below content in the file.

     ```
     name: document-update
     # GitHub Actions Workflows are automatically triggered by GitHub events
     on:
       pull_request:
         types: [opened, reopened]
     jobs:
       document_update_reminder:
         runs-on: ubuntu-latest
         env:
           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           GITHUB_ACTOR: ${{ secrets.GITHUB_ACTOR }}
           GITHUB_REPOSITORY: ${{ secrets.GITHUB_REPOSITORY }}

         steps:
           - uses: actions/checkout@v2
           - uses: sagarjhaa/Documinder@main
             id: document-reminder
             env:
               GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
               GITHUB_ACTOR: ${{ secrets.GITHUB_ACTOR }}
               GITHUB_REPOSITORY: ${{ secrets.GITHUB_REPOSITORY }}
           - run: echo ${{steps.document-reminder.outputs.content}}
     ```
