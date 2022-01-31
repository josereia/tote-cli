module.exports = {
    name: "tote init",
    alias: "i",
    description: "Cria as pastas src, screens ou pages e components.",
    run: async toolbox => {
        const { filesystem, createComponent } = toolbox

        async function isRN() {
            const package = await filesystem.read("package.json", "json")
            return !!package.dependencies['react-native']
        }

        if (await isRN()) {
            await createComponent("src/screens", "NewScreen")
        } else {
            await createComponent("src/pages", "NewPage")
        }
        await createComponent("src/components", "NewComponent")
    }
}
