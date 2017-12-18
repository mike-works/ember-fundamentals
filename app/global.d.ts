declare module 'require' {
  function require(moduleName: string): any;
  namespace require {
    function has(moduleName: string): boolean;
  }
  export default require;
}

interface Hooks {
  application?: any;
}
