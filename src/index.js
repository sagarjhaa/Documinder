// index.js file to do the actual work

// get the PR files
// compare the files
// slack message to intimate if we need an update
// mail if we need to alert

const core = require('@actions/core');
const github = require('@actions/github');
const { GITHUB_SHA, GITHUB_EVENT_PATH, GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_WORKSPACE, GITHUB_ACTOR } = process.env;

// action file information: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions
async function main() {
  try {
    const github_token = GITHUB_TOKEN//core.getInput("GITHUB_TOKEN", { required: true })
    console.log(github_token);
    const repo = GITHUB_REPOSITORY;//core.getInput("GITHUB_REPOSITORY", { required: true }) //github.context.repository;
    console.log(repo)
    const owner = GITHUB_ACTOR //core.getInput("GITHUB_ACTOR", { required: true }) //github.context.repository_owner;
    console.log(owner)
    console.log("GITHUB_WORKSPACE", GITHUB_WORKSPACE)


    const octokit = github.getOctokit(github_token);//new github.GitHub(github_token);
    const context = github.context;
    const pull_number = context.payload.pull_request.number;
    console.log(pull_number)

    const pull_request_files = await octokit.pulls.listFiles({
      owner: owner,
      repo: repo,
      pull_number: pull_number,
    });

    console.log(pull_request_files.data);

  } catch (error) {
    console.log(`error occured ${error}`);
  }
}

main();