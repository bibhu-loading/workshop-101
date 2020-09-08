module.exports = {
    "name": "Github Issue Tracking Schema",
    "schemaPath": "./schema.graphql",
    "extensions": {
      "endpoints": {
        "Github GraphQL Endpoint": {
          "url": "https://api.github.com/graphql",
          "headers": {
            "Authorization": `Bearer ${process.env.GITHUB_API_KEY}`
          },
          "introspect": true
        }
      }
    }
  }