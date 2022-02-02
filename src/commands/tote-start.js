module.exports = {
    name: "tote start",
    alias: "st",
    description: "Inicia o amiente",
    run: async toolbox => {
        const { print } = toolbox

        //const vsCode = await toolbox.system.run('code ./', { trim: true })
        const npmStart = await toolbox.system.run('expo start --localhost', { trim: true })
        console.log(npmStart)
    }
}