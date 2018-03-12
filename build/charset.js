/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Mar 12 2018
 *  File : chart.js
 *******************************************/
const path = require('path')
const fs = require('fs')
var iconv = require('iconv-lite')



let htmlStr = fs.readFileSync(path.join(__dirname, '../dist/index.html'))
var encoded = iconv.encode(htmlStr, 'gbk')
fs.writeFile(path.join(__dirname, '../dist/index.shtml'), encoded, function () {
	var buf = fs.readFileSync(path.join(__dirname, '../dist/index.html'))
})

const jspath = path.join(__dirname, '../dist/')

explorer(jspath)

function explorer(jspath) {
	fs.readdir(jspath, function (err, files) {
		if (err) {
			console.log('error:\n' + err)
			return
		}
		files.forEach(function (file) {

			fs.stat(jspath + '/' + file, function (err, stat) {
				if (err) { 
					console.log(err) 
					return 
				}
				if (stat.isDirectory()) {
					console.log('-----------------------')
					console.log('跳过文件夹')
					console.log('-----------------------')
				} else {
					// 读出所有的文件		
					let flag = new RegExp('.js').test(file)
					if (flag) {
						let htmlStr = fs.readFileSync(path.join(__dirname, '../dist/' + file))
						var encoded = iconv.encode(htmlStr, 'gbk')
						fs.writeFile(path.join(__dirname, '../dist/' + file), encoded, function () {
							var buf = fs.readFileSync(path.join(__dirname, '../dist/' + file))
						})
						console.log('-----------------------')
						console.log('转码完成, webstorm自带服务器默认打开不支持GBK, 请在文件目录手动打开')
						console.log('-----------------------')
					}
				}
			})
		})
	})
}

