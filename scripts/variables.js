"use strict";

let itemaname;
let itembname;
let itemcname;
let itemdname;
let itemename;
let itemfname;
let itemgname;
let itemhname;
let iteminame;
let itemjname;

let itemaamount;
let itembamount;
let itemcamount;
let itemdamount;
let itemeamount;
let itemfamount;
let itemgamount;
let itemhamount;
let itemiamount;
let itemjamount;

let itematotal = 0;
let itembtotal = 0;
let itemctotal = 0;
let itemdtotal = 0;
let itemetotal = 0;
let itemftotal = 0;
let itemgtotal = 0;
let itemhtotal = 0;
let itemitotal = 0;
let itemjtotal = 0;

let itemadisplayname;
let itembdisplayname;
let itemcdisplayname;
let itemddisplayname;
let itemedisplayname;
let itemfdisplayname;
let itemgdisplayname;
let itemhdisplayname;
let itemidisplayname;
let itemjdisplayname;

let itemadisplaynumber;
let itembdisplaynumber;
let itemcdisplaynumber;
let itemddisplaynumber;
let itemedisplaynumber;
let itemfdisplaynumber;
let itemgdisplaynumber;
let itemhdisplaynumber;
let itemidisplaynumber;
let itemjdisplaynumber;

const itemanameel = document.getElementById('itemanameel');
const itembnameel = document.getElementById('itembnameel');
const itemcnameel = document.getElementById('itemcnameel');
const itemdnameel = document.getElementById('itemdnameel');
const itemenameel = document.getElementById('itemenameel');
const itemfnameel = document.getElementById('itemfnameel');
const itemgnameel = document.getElementById('itemgnameel');
const itemhnameel = document.getElementById('itemhnameel');
const iteminameel = document.getElementById('iteminameel');
const itemjnameel = document.getElementById('itemjnameel');

const itemaamountel = document.getElementById('itemaamountel');
const itembamountel = document.getElementById('itembamountel');
const itemcamountel = document.getElementById('itemcamountel');
const itemdamountel = document.getElementById('itemdamountel');
const itemeamountel = document.getElementById('itemeamountel');
const itemfamountel = document.getElementById('itemfamountel');
const itemgamountel = document.getElementById('itemgamountel');
const itemhamountel = document.getElementById('itemhamountel');
const itemiamountel = document.getElementById('itemiamountel');
const itemjamountel = document.getElementById('itemjamountel');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const itemadisplayrowel = document.getElementById('itemadisplayrowel');
const itembdisplayrowel = document.getElementById('itembdisplayrowel');
const itemcdisplayrowel = document.getElementById('itemcdisplayrowel');
const itemddisplayrowel = document.getElementById('itemddisplayrowel');
const itemedisplayrowel = document.getElementById('itemedisplayrowel');
const itemfdisplayrowel = document.getElementById('itemfdisplayrowel');
const itemgdisplayrowel = document.getElementById('itemgdisplayrowel');
const itemhdisplayrowel = document.getElementById('itemhdisplayrowel');
const itemidisplayrowel = document.getElementById('itemidisplayrowel');
const itemjdisplayrowel = document.getElementById('itemjdisplayrowel');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const itemadisplaynameel = document.getElementById('itemadisplaynameel');
const itembdisplaynameel = document.getElementById('itembdisplaynameel');
const itemcdisplaynameel = document.getElementById('itemcdisplaynameel');
const itemddisplaynameel = document.getElementById('itemddisplaynameel');
const itemedisplaynameel = document.getElementById('itemedisplaynameel');
const itemfdisplaynameel = document.getElementById('itemfdisplaynameel');
const itemgdisplaynameel = document.getElementById('itemgdisplaynameel');
const itemhdisplaynameel = document.getElementById('itemhdisplaynameel');
const itemidisplaynameel = document.getElementById('itemidisplaynameel');
const itemjdisplaynameel = document.getElementById('itemjdisplaynameel');

const itemadisplayamountel = document.getElementById('itemadisplayamountel');
const itembdisplayamountel = document.getElementById('itembdisplayamountel');
const itemcdisplayamountel = document.getElementById('itemcdisplayamountel');
const itemddisplayamountel = document.getElementById('itemddisplayamountel');
const itemedisplayamountel = document.getElementById('itemedisplayamountel');
const itemfdisplayamountel = document.getElementById('itemfdisplayamountel');
const itemgdisplayamountel = document.getElementById('itemgdisplayamountel');
const itemhdisplayamountel = document.getElementById('itemhdisplayamountel');
const itemidisplayamountel = document.getElementById('itemidisplayamountel');
const itemjdisplayamountel = document.getElementById('itemjdisplayamountel');

// SETTINGS & DISPLAY VARIABLES END 

let counterrowa = 0;
let counterrowb = 0;
let counterrowc = 0;
let counterrowd = 0;
let counterrowe = 0;
let counterrowf = 0;
let counterrowg = 0;
let counterrowh = 0;
let counterrowi = 0;
let counterrowj = 0;

// A-1 thru J-10 checkbox rows A- J 
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
// B-2 checkbox row B
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
// C-3 checkbox row C
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
// D-4 checkbox row 
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
// E-5 checkbox row E
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');
const e5 = document.getElementById('e5');
const e6 = document.getElementById('e6');
// F-6 checkbox row F
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
// G-7 checkbox row G
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');
const g6 = document.getElementById('g6');
// H-8 checkbox row H
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
// I-9 checkbox row I
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
const i5 = document.getElementById('i5');
const i6 = document.getElementById('i6');
// J-10 checkbox row J
const j1 = document.getElementById('j1');
const j2 = document.getElementById('j2');
const j3 = document.getElementById('j3');
const j4 = document.getElementById('j4');
const j5 = document.getElementById('j5');
const j6 = document.getElementById('j6');

const counterrowael = document.getElementById('counterrowael');
const counterrowbel = document.getElementById('counterrowbel');
const counterrowcel = document.getElementById('counterrowcel');
const counterrowdel = document.getElementById('counterrowdel');
const counterroweel = document.getElementById('counterroweel');
const counterrowfel = document.getElementById('counterrowfel');
const counterrowgel = document.getElementById('counterrowgel');
const counterrowhel = document.getElementById('counterrowhel');
const counterrowiel = document.getElementById('counterrowiel');
const counterrowjel = document.getElementById('counterrowjel');

let counterproducetotal = 0;
                        
const counterproducetotalel = document.getElementById('counterproducetotalel');

// Buttons UNCHECK All, top & bottom
const uncheckalltop = document.getElementById('uncheckalltop');
const uncheckallbtm = document.getElementById('uncheckallbtm');

const rowaarray = [a1, a2, a3, a4, a5, a6, counterrowa, counterrowael, itemadisplayrowel];
const rowbarray = [b1, b2, b3, b4, b5, b6, counterrowb, counterrowbel, itembdisplayrowel];
const rowcarray = [c1, c2, c3, c4, c5, c6, counterrowc, counterrowcel, itemcdisplayrowel];
const rowdarray = [d1, d2, d3, d4, d5, d6, counterrowd, counterrowdel, itemddisplayrowel];
const rowearray = [e1, e2, e3, e4, e5, e6, counterrowe, counterroweel, itemedisplayrowel];
const rowfarray = [f1, f2, f3, f4, f5, f6, counterrowf, counterrowfel, itemfdisplayrowel];
const rowgarray = [g1, g2, g3, g4, g5, g6, counterrowg, counterrowgel, itemgdisplayrowel];
const rowharray = [h1, h2, h3, h4, h5, h6, counterrowh, counterrowhel, itemhdisplayrowel];
const rowiarray = [i1, i2, i3, i4, i5, i6, counterrowi, counterrowiel, itemidisplayrowel];
const rowjarray = [j1, j2, j3, j4, j5, j6, counterrowj, counterrowjel, itemjdisplayrowel];
const allcheckboxesarray = [a1, a2, a3, a4, a5, a6, b1, b2, b3, b4, b5, b6, c1, c2, c3, c4, c5, c6, d1, d2, d3, d4, d5, d6, e1, e2, e3, e4, e5, e6, f1, f2, f3, f4, f5, f6, g1, g2, g3, g4, g5, g6, h1, h2, h3, h4, h5, h6, i1, i2, i3, i4, i5, i6, j1, j2, j3, j4, j5, j6];

let viewdivtitleel = document.getElementById('viewdivtitleel');


