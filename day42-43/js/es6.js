// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
  class Restaurant {
    constructor(obj) {
      this.cash = obj.cash;
      this.seats = obj.seats;
      this.staff = obj.staff;
    }
    hire(employee){
      this.staff.push(employee.name);
      employee.id = this.staff.indexOf(employee.name)+1;
    }
    fire(employee){
      if(this.staff.indexOf(employee.name) !== -1){
        this.staff.splice(this.staff.indexOf(employee.name),1)
        console.log(employee.name + " was fired! ");
        
      }else {
        console.log("不存在该员工！");
      }
    }
  }
// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
  class Employee{
    constructor(name,wage){
      this.id = '';
      this.name = name;
      this.wage = wage;
    }
    complateWork(){
      console.log("work done!")
    }
  }
// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
class Waiter extends Employee{
  constructor(name,wage){
    super(name,wage);
    this.foodlist = [];
  }
  complateWork(food){
    if(food instanceof Array){
      for(var i = 0;i<food.length;i++){
        this.foodlist.push(food[i].name);
      }
    }else{
      console.log("上菜！");
    }
  }
}
// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
class Cook extends Employee{
  constructor(name,wage){
    super(name,wage);
  }
  complateWork(food){
    console.log("烹饪出菜品:" + food.name);
  } 
}
// 顾客类
// 方法：点菜，吃
class Customer{
  order(food){
    console.log("点了" + food.name +"消费了" + food.price + "元。")
  }
  eat(food){
    console.log("吃了" + food.name);
  }
}
// 菜品类
// 属性：名字、烹饪成本、价格
class Food{
  constructor(name,cost,price){
    this.name = name;
    this.cost = cost;
    this.price = price;
  } 
}