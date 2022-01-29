module.exports = (toolbox) => {
    const { filesystem, template, print: { success, error } } = toolbox

    async function isRN() {
        const package = await filesystem.read("package.json", "json")
        return !!package.dependencies['react-native']
    }

    async function createComponent(folder, componentName) {
        try {
            const styleTemplate = await isRN() ? "styles-rn.js.ejs" : "styles-rjs.js.ejs"

            if (!componentName) {
                error("Please, a name must be specified")
                return
            } else {
                await template.generate({
                    template: "component.js.ejs",
                    target: `${folder}/${componentName}/index.js`,
                    props: { componentName }
                })

                await template.generate({
                    template: styleTemplate,
                    target: `${folder}/${componentName}/styles.js`,
                })

                success(`Success! Create ${componentName} into ${folder}`)
            }
        } catch (er) {
            if (er.message === "Cannot read properties of undefined (reading 'dependencies')") {
                error("Não foi possível ler as propriedades do arquivo package.json\nTenha certeza de que você esteja em um projeto nodejs.")
            } else if(er.message === "Cannot read properties of undefined (reading 'react-native')") {
                error("Não foi possível encontrar o pacote react ou react-native no arquivo package.json\nTenha certeza de que você esteja em um projeto react.")
            }else {
                error(er)
            }
        }

    }

    toolbox.createComponent = createComponent
}