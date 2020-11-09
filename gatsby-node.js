const fetch = require(`node-fetch`)

const dataUrl = "https://api.clasihome.com/rest/builders?builderId=5fa577e57cf0c90a603a23cf";

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(dataUrl)
  const data = await result.json()
  createNode({
    id: data.id,
    parent: null,
    children: [],
    internal: {
      type: `data`,
      contentDigest: createContentDigest(data),
    },
  })
}