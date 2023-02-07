const { join } = require('path')

module.exports = {
    windows: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
        icon: join(process.cwd(), 'source', 'frontend', 'pics', 'ICON.ico'),
        workingDirectory: join(process.cwd(), 'pkg')
    },
    linux: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
        icon: join(process.cwd(), 'source', 'frontend', 'pics', 'ICON.ico'),
        workingDirectory: join(process.cwd(), 'pkg')
    },
    osx: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
    }
}