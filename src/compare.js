// prepare the filepath
// compare with the the rules.yaml
// yeild that this file changed and this documents are 


class Compare {
  constructor(rules) {
    this.rules = rules;
  }

  prepareFilePath(content_url) {
    const referenceRemoved = content_url.split("?")[0]
    // referenceRemoved.split("/")
    return referenceRemoved
  }

  comparePath(content_url = '') {
    const currentFilePath = this.prepareFilePath(content_url)

    const matchResults = [];
    this.rules.forEach(rule => {
      matchResults.push(
        {
          "prFilePath": currentFilePath,
          "comparePath": rule.path,
          "documents": rule.documents
        }
      )
    });

    return matchResults;
  }
}

exports.Compare = Compare;