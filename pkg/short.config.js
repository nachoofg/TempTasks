const { join } = require('path')

module.exports = {
    windows: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
        icon: join(process.cwd(), 'source', 'frontend', 'pics', 'ICON.ico'),
    },
    linux: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
        icon: join(process.cwd(), 'source', 'frontend', 'pics', 'ICON.ico'),
    },
    osx: {
        filePath: join(process.cwd(), 'pkg', 'run.bat'),
        name: 'TempTasks',
    }
}