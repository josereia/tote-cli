module.exports = {
    name: "create:component",
    alias: "cc",
    description: "Cria um novo componente em src/components",
    run: async toolbox => {
        const { parameters, createComponent } = toolbox

        const componentName = parameters.first

        await createComponent("src/components", componentName)
    }
}