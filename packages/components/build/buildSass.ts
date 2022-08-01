import cpy from 'cpy'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import sass from "sass"
import glob from "fast-glob"
const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../dist/lib')
//es文件目录
const targetEs = resolve(__dirname, '../dist/es')

//src目录

const srcDir = resolve(__dirname, '../src')

const buildSass = async () => {
  //直接将less文件复制到打包后目录
  await cpy(`${sourceDir}/**/*.scss`, targetLib)
  await cpy(`${sourceDir}/**/*.scss`, targetEs)

  //获取打包后.less文件目录(lib和es一样)
  const sassFils = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true })

  //遍历含有less的目录
  for (let path in sassFils) {

    const filePath = `${srcDir}/${sassFils[path]}`
    //获取less文件字符串
    // const lessCode = await fs.readFile(filePath, 'utf-8')
    //将less解析成css

    const code = await sass.compile(filePath)

    //拿到.css后缀path
    const cssPath = sassFils[path].replace('.scss', '.css')


    //将css写入对应目录
    await fs.writeFile(resolve(targetLib, cssPath), code.css)
    await fs.writeFile(resolve(targetEs, cssPath), code.css)
  }
}
buildSass()