#1. 将伪数组转换为真数组  
    [].slice.call(lis):

# 2. 得到对象自身可枚举的属性名的数组
    Object.keys(obj)

# 3. 判断prop是否是obj自身的属性  
    obj.hasOwnProperty(prop)  

# 4. 给对象添加/修改属性(指定描述符) 
	Object.defineProperty(obj, propertyName, {}): 
		configurable: true/false  是否可以重新define
		enumerable: true/false 是否可以枚举(for..in / keys())
		value: 指定初始值
		writable: true/false value是否可以修改存取(访问)描述符
		get: 函数, 用来得到当前属性值
		set: 函数, 用来监视当前属性值的变化








