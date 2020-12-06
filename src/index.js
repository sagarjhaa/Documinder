// index.js file to do the actual work

// get the PR files
// compare the files
// slack message to intimate if we need an update
// mail if we need to alert

const core = require('@actions/core');
const github = require('@actions/github');

// action file information: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions
async function main() {
  try {

    const github_token = core.getInput("GITHUB_TOKEN", { required: true })
    const octokit = github.getOctokit(github_token);//new github.GitHub(github_token);
    const context = github.context;
    const owner = github.repository_owner;
    const repo = github.repository;
    const pull_request_number = context.payload.pull_request.number;

    console.log(octokit);
    console.log(owner)
    console.log(repo)
    console.log(pull_request_number)

    const pull_request_files = await octokit.pulls.listFiles({
      owner,
      repo,
      pull_request_number,
    });

    console.log(pull_request_files);

  } catch (error) {
    console.log(`error occured ${error}`);
  }
}

main();