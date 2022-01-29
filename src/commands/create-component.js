module.exports = {
    name: "create:component",
    description: "Create a new component into src/components",
    run: async toolbox => {
        const {parameters, createComponent} = toolbox

        const componentName = parameters.first

        await createComponent("src/components", componentName)
    }
}