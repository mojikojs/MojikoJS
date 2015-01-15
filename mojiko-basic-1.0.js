/*************************************************
 * MojikoJS - Basic action plugin.
 * Copyright (c) 2014,2015 Queue Sakura-Shiki
 * Released under the MIT license
 */

/*************************
 * Background Actions
 */

MJK.bgActions["black"] = {
	begin : function(_) {
		_( 0,"opacity:0;background-color:rgba(0,0,0,1.0);");
		_(30,"opacity:1");
		return 30;
	}, end : function(_) {
		_( 0,"opacity:1;background-color:rgba(0,0,0,1.0);");
		_(30,"opacity:0");
		return 30;
	}
};
MJK.bgActions["white"] = {
	begin : function(_) {
		_( 0,"opacity:0;background-color:rgba(255,255,255,1.0);");
		_(30,"opacity:1");
		return 30;
	}, end : function(_) {
		_( 0,"opacity:1;background-color:rgba(255,255,255,1.0);");
		_(30,"opacity:0");
		return 30;
	}
};
MJK.bgActions["dusky"] = {
	begin : function(_) {
		_( 0,"opacity:0;background-color:rgba(0,0,0,1.0);");
		_(30,"opacity:0.5");
		return 30;
	}, end : function(_) {
		_( 0,"opacity:0.5;background-color:rgba(0,0,0,1.0);");
		_(30,"opacity:0");
		return 30;
	}
};
MJK.bgActions["flush"] = function(_) {
	_( 0,"opacity:0;background-color:rgba(255,255,255,1.0);");
	_( 3,"opacity:1");
	_(20,"opacity:0");
	return 20;
};

/*************************
 * Actor's action
 */
MJK.chActions["leaping"] = function(_) {
	_( 0,"top[sin]:0%;");
	_(10,"top[cos]:-5%;");
	_(20,"top:0%;");
	return 20;
};
MJK.chActions["hoping"] = function(_) {
	_( 0,"top[sin]:0%;");
	_( 8,"top[cos]:-5%;");
	_(16,"top[sin]:0%;");
	_(24,"top[sin]:0%;");
	_(32,"top[cos]:-5%;");
	_(40,"top:0%;");
	return 40;
};
MJK.chActions["droping"] = function(_) {
	_( 0,"top[sin]:0%;");
	_(20,"top[cos]:5%;");
	_(28,"top:0%;");
	return 28;
};
MJK.chActions["shocking"] = function(_) {
	_( 0,"margin-left:0%;");
	_( 1,"margin-left:1%;");
	_( 3,"margin-left:-1%;");
	_( 4,"margin-left:0%;");
	return 4;
};
MJK.chActions["waving"] = function(_) {
	var frame = 0;
	_(frame,"margin-left:0%;");
	frame ++;
	for( var i=0 ; i< 6 ; i++ ) {
		_(frame,"margin-left:1%;");
		frame += 2;
		_(frame,"margin-left:-1%;");
		frame += 2;
	}
	_(frame,"margin-left:0%;");
	return frame;
};
MJK.chActions["arounding"] = function(_) {
	_( 0,"top:0%;");
	_( 3,"top:-2%;margin-left:-4%;");
	_( 6,"top:0%;margin-left:0%;");
	_( 9,"top:-2%;margin-left:4%;");
	_(12,"top:0%;margin-left:0%;");
	_(15,"top:-2%;margin-left:-4%;");
	_(18,"top:0%;margin-left:0%;");
	_(21,"top:-2%;margin-left:4%;");
	_(24,"top:0%;margin-left:0%;");
  return 25;
};
MJK.chActions["hentai"] = function(_) {
	var frame = 0;
	frame += 10;
	_( frame,"top:0%;");
	frame ++;
	for( var i=0 ; i< 13 ; i++ ) {
		_( frame,"top:3%;");
		frame += 2;
		_( frame,"top:-3%;");
		frame += 2;
	}
	frame += 1;
	_( frame, "top:0%;");
	return frame;
};

