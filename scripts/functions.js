





function checkbox1of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id1.checked == true) {
		counterrow = 1;

		counterrowel.innerHTML = counterrow;

	} else if (id1.checked == false && id2.checked == true) {
		counterrow=1;

		id3.checked = false;
		id1.checked= true;
		id4.checked = false;
		id2.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;

	} else {
		counterrow=0;
		counterrowel.innerHTML = counterrow;
	}
	//addrows();
	//counterproducetotalel.innerHTML = counterproducetotal;
}

function checkbox2of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id2.checked == true) {
		id1.checked = true;
		counterrow=2;

		counterrowel.innerHTML = counterrow;

	} else if (id2.checked == false && id3.checked == true ) {
		counterrow=2;

		id2.checked=true;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;

	} else {
		counterrow = 0;

		id1.checked = false;
		counterrowel.innerHTML = counterrow;
	}
	addrows();
}

function checkbox3of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id3.checked == true) {
		counterrow=3;

		id1.checked = true;
		id2.checked = true; 
		counterrowel.innerHTML = counterrow;

	} else if (id3.checked == false && id4.checked == true ) {
		counterrow=3;

		id3.checked=true;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;

	} else {
		counterrow=0;

		id1.checked = false;
		id2.checked = false; 
		counterrowel.innerHTML = counterrow;
	}
	addrows();
}
function checkbox4of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id4.checked == true) {
		counterrow=4;

		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		counterrowel.innerHTML = counterrow;

	} else if (id4.checked == false && id5.checked == true ) {
		counterrow=4;

		id4.checked = true;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;

	} else {
		counterrow = 0;

		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		counterrowel.innerHTML = counterrow;
	}
	addrows();

}
function checkbox5of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id5.checked == true) {
		counterrow=5;

		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		counterrowel.innerHTML = counterrow;

	} else if (id5.checked == false && id6.checked == true ) {
		counterrow=5;

		id5.checked = true;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;

	} else {
  counterrow = 0;

		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		counterrowel.innerHTML = counterrow;
	}
	addrows();

}
function checkbox6of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel) {
	if (id6.checked == true) {
		counterrow=6;

		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		id5.checked = true;
		counterrowel.innerHTML = counterrow;

	} else {
		counterrow = 0;

		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		counterrowel.innerHTML = counterrow;
	}
	addrows();

}

function uncheckallloop() {
	for (var i = 0; i < allcheckboxesarray.length; i++) {
		allcheckboxesarray[i].checked = false;
		if (i == allcheckboxesarray.length - 1) {
			counterrow = 0;
			counterproducetotal = 0;
			counterrowael.innerHTML = counterrow;
			counterrowbel.innerHTML = counterrow;
			counterrowcel.innerHTML = counterrow;
			counterrowdel.innerHTML = counterrow;
			counterroweel.innerHTML = counterrow;
			counterrowfel.innerHTML = counterrow;
			counterrowgel.innerHTML = counterrow;
			counterrowhel.innerHTML = counterrow;
			counterrowiel.innerHTML = counterrow;
			counterrowjel.innerHTML = counterrow;
			counterproducetotalel.innerHTML = counterproducetotal;
		}
	}
}

/*
UNCHECK ALL STATEMENTS
function uncheckall() {
  a1.checked = false;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		b1.checked = false;
		b2.checked = false;
		b3.checked = false;
		b4.checked = false;
		b5.checked = false;
		b6.checked = false;
		c1.checked = false;
		c2.checked = false;
		c3.checked = false;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
		d1.checked = false;
		d2.checked = false;
		d3.checked = false;
		d4.checked = false;
		d5.checked = false;
		d6.checked = false;
		e1.checked = false;
		e2.checked = false;
		e3.checked = false;
		e4.checked = false;
		e5.checked = false;
		e6.checked = false;
		f1.checked = false;
		f2.checked = false;
		f3.checked = false;
		f4.checked = false;
		f5.checked = false;
		f6.checked = false;
		g1.checked = false;
		g2.checked = false;
		g3.checked = false;
		g4.checked = false;
		g5.checked = false;
		g6.checked = false;
		h1.checked = false;
		h2.checked = false;
		h3.checked = false;
		h4.checked = false;
		h5.checked = false;
		h6.checked = false;
		i1.checked = false;
		i2.checked = false;
		i3.checked = false;
		i4.checked = false;
		i5.checked = false;
		i6.checked = false;
		j1.checked = false;
		j2.checked = false;
		j3.checked = false;
		j4.checked = false;
		j5.checked = false;
		j6.checked = false;
}
*/
