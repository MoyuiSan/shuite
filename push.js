const shell = require('shelljs')

shell.exec('git add -A')

shell.exec('git commit -am "gyc updated"')

shell.exec('git push')