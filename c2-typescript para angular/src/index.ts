//decorators
function apiVersion(version: string) {
 return (target: any) => {
  Object.assign(target.prototype, { __version: version })
 }
}

@apiVersion('1.10')
class API {}

const api = new API()
console.log(api.__version)