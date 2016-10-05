;(function(window){

	'use strict';


	function simpleAlert(message){

		this.message = message;
		this._init();

	}

	simpleAlert.prototype._init = function(){

		this.component = document.getElementById("component");
		this.box = document.createElement("div");
		this.box.className = "simpleAlert";
		this.box.innerHTML = this.message;
		this.component.appendChild(this.box);		


	}

	window.simpleAlert = simpleAlert;

	var elm = document.getElementById("default");

	elm.addEventListener('click', function(){

		var newalert = new simpleAlert("This is a default message");

	})




})(window)