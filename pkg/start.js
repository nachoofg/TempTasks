let { exec } = require('child_process'),
    readline = require('readline').createInterface({ input: process.stdin, output: process.stdout }),
    { existsSync } = require('fs'),
    { join } = require('path'),
    colors,
    cds

if (existsSync(`${join(process.cwd(), 'node_modules')}`)) return exec('npm run start')
else return installDependencies()

function installDependencies() {
    // install things
    console.log(' ')
    console.log('\x1b[32m%s\x1b[0m', ':: Installing Dependencies ::')
    exec('npm install', (err, stdout, stderr) => {
        if (err) return console.error(':: Error Installing Dependencies ::\n', err)
        else {
            var shortConfig = require('./short.config')
            colors = require('colors')
            cds = require('create-desktop-shortcuts')

            console.log(colors.green(':: Installed Dependencies ::'))
            readline.question(colors.yellow('Create Shortcut? (y/n): '), (res) => {
                if (res === 'yes' || res === 'y') {
                    var cdS = cds(shortConfig)
                    if (cdS) console.log(colors.green(':: Shortcut Created ::'))
                } else if (res === 'no' || res === 'n') {
                    readline.question(colors.yellow('Do you want to start the application? (y/n): '), (res) => {
                        if (res === 'yes' || res === 'y') return exec('npm run start') && console.log(colors.green(':: App Started (if you close the console the application closes) ::'))
                        else if (res === 'no' || res === 'n') readline.close()
                        return console.log(colors.red(':: Ok, remember that you can use the "tt" command to start the application ::'))
                    })
                }
            })
        }
    })
}