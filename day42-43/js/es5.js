// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
function Restaurant(obj){
	this.cash = obj.cash;
	this.seats = obj.seats;
	this.staffs = obj.staff;
}
Restaurant.prototype.hire = function(staff){
	this.staffs.push(staff.name);
	staff.id = this.staffs.length;
	console.log("hire " + staff.name + ",id is " + staff.id);
};
Restaurant.prototype.fire = function(staff){
	if(this.staffs.indexof(staff) !== -1){
		this.staffs.splice(this.staffs.indexof(staff),1)
		console.log(staff.name + " was fired! ");
	}
	
};
// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
function Staff(name,wage){
	this.id = '';
	this.name = name;
	this.wage = wage;
}
Staff.prototype.complateWork = function(){
	console.log("完成了一次工作!"); 
};

// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
function Waiter(name,wage){
	Staff.call(this,name,wage);
	this.foodlist = [];
}
Waiter.prototype.complateWork = function(food){
	if(food instanceof Array){
		for(var i =0;i< food.length;i++){
			this.foodlist.push(food[i]);
		}
	}else{
		console.log("Dinner is" + food.name + "来了!");
	}
};

// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
function Cook(name,wage){
	Staff.call(this,name,wage);
}
Cook.prototype.complateWork = function(food){
	console.log("烹饪出菜品:" + food.name); 
};

// 顾客类
// 方法：点菜，吃
function Customer(){
	
}
Customer.prototype.order = function(food){
	console.log("点了" + food.name +"消费了" + food.price + "元。")
};
Customer.prototype.eat = function(food){
	console.log("吃了" + food.name);
};

// 菜品类
// 属性：名字、烹饪成本、价格
function Food(name,cost,price){
	this.name = name;
	this.cost = cost;
	this.price = price;
}



