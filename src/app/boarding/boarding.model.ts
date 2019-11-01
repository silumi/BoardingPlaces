export class Boarding {
public Price: string;
public mobile: string;
public address: string;
public distance: string;
public description: string;
public imagePath: string;
public keyMoney: string;
public owner: string;

constructor(price: string, phone: string, address: string, distance: string, desc: string, imgPath: string, key: string, owner: string) {
this.Price = price;
this.mobile = phone;
this.address = address;
this.distance = distance;
this.description = desc;
this.imagePath = imgPath;
this.keyMoney = key;
this.owner = owner;
}
}
