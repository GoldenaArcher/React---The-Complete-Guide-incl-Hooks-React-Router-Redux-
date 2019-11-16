# Multi-Page-Felling in a Single-Page-App: Routing

## 228. Absolute vs Relative Paths

`<Link></Link>` will always attach current uri to the root domain, which yields a absolute path, in order to yield a relative path, this approach can be adpoted :

`this.props.match.url + '/some-uri'`