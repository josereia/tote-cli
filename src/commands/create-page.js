module.exports = {
    name: "create:screen",
    alias: "cp",
    description: "Cria uma nova página em src/pages",
    run: async toolbox => {
        const { parameters, createComponent } = toolbox

        const componentName = parameters.first

        await createComponent("src/pages", componentName)
    }
}