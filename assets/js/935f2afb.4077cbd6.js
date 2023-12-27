"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Problem Statement","href":"/docs/","docId":"intro/introduction","unlisted":false}]},{"type":"category","label":"Getting Started","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Installation","href":"/docs/getting_started","docId":"getting_started/installation","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/getting_started/configuration","docId":"getting_started/configuration","unlisted":false},{"type":"link","label":"Launch","href":"/docs/getting_started/launch","docId":"getting_started/launch","unlisted":false},{"type":"link","label":"Execute","href":"/docs/getting_started/execute","docId":"getting_started/execute","unlisted":false}]},{"type":"category","label":"Guides","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"CLI","href":"/docs/guides/cli","docId":"guides/cli","unlisted":false},{"type":"link","label":"Context","href":"/docs/guides/context","docId":"guides/context","unlisted":false},{"type":"link","label":"Tackling N + 1","href":"/docs/guides/n+1","docId":"guides/n+1","unlisted":false},{"type":"link","label":"Operator Composition","href":"/docs/guides/operator-composition","docId":"guides/operator-composition","unlisted":false},{"type":"link","label":"Watch Mode","href":"/docs/guides/watch-mode","docId":"guides/watch-mode","unlisted":false}]},{"type":"category","label":"Operators","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"@addField","href":"/docs/operators/add-field","docId":"operators/add-field","unlisted":false},{"type":"link","label":"@cache","href":"/docs/operators/cache","docId":"operators/cache","unlisted":false},{"type":"link","label":"@const","href":"/docs/operators/const","docId":"operators/const","unlisted":false},{"type":"link","label":"@graphQL","href":"/docs/operators/graphql","docId":"operators/graphql","unlisted":false},{"type":"link","label":"@http","href":"/docs/operators/http","docId":"operators/http","unlisted":false},{"type":"link","label":"@modify","href":"/docs/operators/modify","docId":"operators/modify","unlisted":false},{"type":"link","label":"@server","href":"/docs/operators/server","docId":"operators/server","unlisted":false},{"type":"link","label":"@upstream","href":"/docs/operators/upstream","docId":"operators/upstream","unlisted":false}],"href":"/docs/operators/"}]},"docs":{"getting_started/configuration":{"id":"getting_started/configuration","title":"Configuration","description":"For our first example, we are going to compose a GraphQL schema from the REST APIs at https://jsonplaceholder.typicode.com, a free online REST API with some fake data.","sidebar":"tutorialSidebar"},"getting_started/execute":{"id":"getting_started/execute","title":"Execute","description":"1. Open a web browser and go to http8000. This should load the GraphiQL interface.","sidebar":"tutorialSidebar"},"getting_started/installation":{"id":"getting_started/installation","title":"Installation","description":"You can install the latest version -{\\" \\"}","sidebar":"tutorialSidebar"},"getting_started/launch":{"id":"getting_started/launch","title":"Launch","description":"Now, run the following command to start the server with the full path to the file that you created earlier.","sidebar":"tutorialSidebar"},"guides/cli":{"id":"guides/cli","title":"CLI","description":"The TailCall CLI (Command Line Interface) is an essential part of the TailCall toolkit. It allows developers to manage and optimize GraphQL configurations directly from the command line. Each command within the CLI is designed to handle a specific aspect of GraphQL composition. Below, you\'ll find a detailed overview of each command, along with its options and usage examples.","sidebar":"tutorialSidebar"},"guides/context":{"id":"guides/context","title":"Context","description":"In any GraphQL framework, including Tailcall, Context is a fundamental mechanism used for data sharing amongst various parts of your application. It is an adaptable object that is made available to every resolver in GraphQL.","sidebar":"tutorialSidebar"},"guides/n+1":{"id":"guides/n+1","title":"Tackling N + 1","description":"The N+1 problem is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let\'s understand with an example:","sidebar":"tutorialSidebar"},"guides/operator-composition":{"id":"guides/operator-composition","title":"Operator Composition","description":"Operators can be composed and used together to create new and powerful transformations.","sidebar":"tutorialSidebar"},"guides/watch-mode":{"id":"guides/watch-mode","title":"Watch Mode","description":"Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to [entr], a versatile file-watcher tool, and demonstrate how to run your server in watch mode with it. We\'ll also touch on the installation process and suggest some best practices to optimize your workflow.","sidebar":"tutorialSidebar"},"intro/introduction":{"id":"intro/introduction","title":"Problem Statement","description":"Traditional API Gateway","sidebar":"tutorialSidebar"},"operators/add-field":{"id":"operators/add-field","title":"@addField","description":"The @addField operator simplifies data structures and queries by adding a field that inlines or flattens a nested field or node within your schema. It works by modifying the schema and the data transformation process, simplifying how nested data is accessed and presented.","sidebar":"tutorialSidebar"},"operators/cache":{"id":"operators/cache","title":"@cache","description":"The @cache operator enables caching for the query, field or type it is applied to. For eg:","sidebar":"tutorialSidebar"},"operators/const":{"id":"operators/const","title":"@const","description":"The @const operators allows us to embed a constant response for the schema. For eg:","sidebar":"tutorialSidebar"},"operators/graphql":{"id":"operators/graphql","title":"@graphQL","description":"@graphQL","sidebar":"tutorialSidebar"},"operators/http":{"id":"operators/http","title":"@http","description":"This @http operator serves as an indication of a field or node that is underpinned by a REST API. For Example:","sidebar":"tutorialSidebar"},"operators/index":{"id":"operators/index","title":"Operators","description":"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom operators. These operators provide powerful compile time guarantees to make sure your API composition is tight and robust. The operator information is used to automatically generate highly optimized resolver logic for your types.","sidebar":"tutorialSidebar"},"operators/modify":{"id":"operators/modify","title":"@modify","description":"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here\'s how you can use this operator:","sidebar":"tutorialSidebar"},"operators/server":{"id":"operators/server","title":"@server","description":"The @server directive, when applied at the schema level, offers a comprehensive set of server configurations. It dictates how the server behaves and helps tune tailcall for various use-cases.","sidebar":"tutorialSidebar"},"operators/upstream":{"id":"operators/upstream","title":"@upstream","description":"The upstream directive allows you to control various aspects of the upstream server connection. This includes settings like connection timeouts, keep-alive intervals, and more. If not specified, default values are used.","sidebar":"tutorialSidebar"}}}')}}]);