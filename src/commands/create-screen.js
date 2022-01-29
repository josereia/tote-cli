module.exports = {
    name: "create:screen",
    description: "Create a new component into src/components",
    run: async toolbox => {
        const {parameters, createComponent} = toolbox

        const componentName = parameters.first

        await createComponent("src/screens", componentName)
    }
}