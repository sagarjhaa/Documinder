// index.js file to do the actual work

// get the PR files
// compare the files
// slack message to intimate if we need an update
// mail if we need to alert

const core = require('@actions/core');
const github = require('@actions/github');
const { getRulesContent } = require('./rules.js');
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_ACTOR } = process.env;
const compare = require('./compare.js');

// action file information: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions
async function main() {
  try {
    // const github_token = GITHUB_TOKEN;
    // const repo = GITHUB_REPOSITORY.split("/")[1];
    // const owner = GITHUB_ACTOR;
    // const octokit = github.getOctokit(github_token);
    // const context = github.context;
    // const pull_number = context.payload.pull_request.number;
    // const rules = getRulesContent();
    // const compareObj = new compare.Compare(rules)

    // console.log(`Analyse PR ${pull_number} for repo ${repo}`)

    // const pull_request_files = await octokit.pulls.listFiles({
    //   owner: owner,
    //   repo: repo,
    //   pull_number: pull_number,
    // });

    // const files = pull_request_files.data;

    // results = files.map(file => {
    //   return compareObj.comparePath(file.contents_url)
    //   // core.setOutput('content', result)
    //   // console.log("filename", files.filename);
    //   // console.log("file-path", files.contents_url);
    // })

    core.setOutput('content', ["One", "Two"])

  } catch (error) {
    console.log(`error occured ${error}`);
  }
}

main();