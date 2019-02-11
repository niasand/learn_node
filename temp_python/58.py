# -*- coding:utf-8 -*-
# @Script: 58.py
# @Author: zhiwei.yang
# @Email: zhiwei.yang@shopee.com
# @Create At: 2019-02-11 14:44:11
# @Last Modified By: zhiwei.yang
# @Last Modified At: 2019-02-11 14:44:11
# @Description: This is description.


from selenium import webdriver
import time
#cookie：浏览器cookie

def get_driver(cookie):
	pattern = re.compile(r'(.*?)=(.*?);')
	cook = re.findall(pattern, cookie)
	cookies = {}
	for c in cook:
		cookies[str(c[0])] = c[1]
	driver = webdriver.PhantomJS()
	driver.get('https://employer.58.com/')
	driver.delete_all_cookies()
	for c in cookies:
		try:
			driver.add_cookie({'name': str(c), 'value': str(cookies[c])})
		except:
			pass
	time.sleep(1)
	driver.refresh()
	return driver

def get_secure_code(url, driver):
	driver.get(url)
	time.sleep(1)
	script = 'console.log(window.____lobal.pageJson.phoneProtect.number);'
	driver.execute_script(script)
	secCode = list(driver.get_log('browser'))[0]['message']
	html = driver.page_source
	basrStr = re.search(r'src:url\(data:application/font-woff;charset=utf-8;base64,(.*?)\)', html).groups()[0]
	return secCode, basrStr

if __name__ == '__main__':
	print get_driver()
