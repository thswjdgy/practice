// exp(경험치), money(돈) 파라미터를 추가했습니다.
function Monster(name, hp, attack, exp, money){
	this.name = name;
	this.hp = hp;
	this.max_hp = hp;
	this.attack = attack;
    
    // 전달받은 경험치와 돈을 저장하는 코드를 추가했습니다.
    this.exp = exp;      
    this.money = money;

	this.info = function(){
		document.write("["+this.name+"("+this.hp+ " / "+this.max_hp+")]");
	}
}

function Character(){
    // (Character 부분은 그대로 두셔도 됩니다)
	this.name;
	this.hp;
	this.max_hp;
	this.attack;
	this.exp;
	this.next_exp;

	this.info = function(){
		document.write("["+this.name+"(💖"+this.hp+ " / "+this.max_hp+")]"+"(exp: "+this.exp+"/"+this.next_exp+")");
	}
}