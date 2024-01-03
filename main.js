const modules = import.meta.glob("./src/10/*.js", { as: "raw", eager: true });
console.log(modules);
