module.exports = {
    name: "create:screen",
    alis: "cs",
    description: "Cria uma nova tela em src/screens",
    run: async toolbox => {
        const { parameters, createComponent } = toolbox

        const componentName = parameters.first

        await createComponent("src/screens", componentName)
    }
}