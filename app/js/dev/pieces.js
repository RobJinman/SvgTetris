// Copyright Rob Jinman 2014
//
// This file is part of SvgTetris.
//
// SvgTetris is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// SvgTetris is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with SvgTetris.  If not, see <http://www.gnu.org/licenses/>.


var cmn = require('./common');
var utils = require('./utils');
var math = require('./math');
var Piece = require('./Piece');


//===========================================
// APiece
//===========================================
var APiece = function(name, blockSz) {
  APiece.super_.call(this, name, cmn.PIECE_A_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  // Set cells to match pattern 1. Subsequent rotations should keep
  // piece congruent with respective pattern.
  var a = this.setCell(1, 0);
  var b = this.setCell(1, 1);
  var c = this.setCell(2, 1);
  var d = this.setCell(1, 2);

  this.patterns = [
    math.t([
      [0, a, 0, 0],
      [0, b, c, 0],
      [0, d, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, c, 0, 0],
      [a, b, d, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, d, 0, 0],
      [c, b, 0, 0],
      [0, a, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [d, b, a, 0],
      [0, c, 0, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [1.5, 1.5];
};

utils.inherits(APiece, Piece);


//===========================================
// BPiece
//===========================================
var BPiece = function(name, blockSz) {
  BPiece.super_.call(this, name, cmn.PIECE_B_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(1, 0);
  var b = this.setCell(1, 1);
  var c = this.setCell(1, 2);
  var d = this.setCell(1, 3);

  this.patterns = [
    math.t([
      [0, a, 0, 0],
      [0, b, 0, 0],
      [0, c, 0, 0],
      [0, d, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [a, b, c, d],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, d, 0],
      [0, 0, c, 0],
      [0, 0, b, 0],
      [0, 0, a, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [d, c, b, a],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [2, 2];
};

utils.inherits(BPiece, Piece);


//===========================================
// CPiece
//===========================================
var CPiece = function(name, blockSz) {
  CPiece.super_.call(this, name, cmn.PIECE_C_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(1, 1);
  var b = this.setCell(2, 1);
  var c = this.setCell(1, 2);
  var d = this.setCell(2, 2);

  this.patterns = [
    math.t([
      [0, 0, 0, 0],
      [0, a, b, 0],
      [0, c, d, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, b, d, 0],
      [0, a, c, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, d, c, 0],
      [0, b, a, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, c, a, 0],
      [0, d, b, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [2, 2];
};

utils.inherits(CPiece, Piece);


//===========================================
// DPiece
//===========================================
var DPiece = function(name, blockSz) {
  DPiece.super_.call(this, name, cmn.PIECE_D_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(1, 1);
  var b = this.setCell(1, 2);
  var c = this.setCell(1, 3);
  var d = this.setCell(2, 3);

  this.patterns = [
    math.t([
      [0, 0, 0, 0],
      [0, a, 0, 0],
      [0, b, 0, 0],
      [0, c, d, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, 0, d, 0],
      [a, b, c, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [d, c, 0, 0],
      [0, b, 0, 0],
      [0, a, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [c, b, a, 0],
      [d, 0, 0, 0]
    ])
  ];

  this.pivot = [1.5, 2.5];
};

utils.inherits(DPiece, Piece);


//===========================================
// EPiece
//===========================================
var EPiece = function(name, blockSz) {
  EPiece.super_.call(this, name, cmn.PIECE_E_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(1, 1);
  var b = this.setCell(1, 2);
  var c = this.setCell(1, 3);
  var d = this.setCell(0, 3);

  this.patterns = [
    math.t([
      [0, 0, 0, 0],
      [0, a, 0, 0],
      [0, b, 0, 0],
      [d, c, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [a, b, c, 0],
      [0, 0, d, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, c, d, 0],
      [0, b, 0, 0],
      [0, a, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [d, 0, 0, 0],
      [c, b, a, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [1.5, 2.5];
};

utils.inherits(EPiece, Piece);


//===========================================
// FPiece
//===========================================
var FPiece = function(name, blockSz) {
  FPiece.super_.call(this, name, cmn.PIECE_F_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(1, 0);
  var b = this.setCell(1, 1);
  var c = this.setCell(2, 1);
  var d = this.setCell(2, 2);

  this.patterns = [
    math.t([
      [0, a, 0, 0],
      [0, b, c, 0],
      [0, 0, d, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, c, d, 0],
      [a, b, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [d, 0, 0, 0],
      [c, b, 0, 0],
      [0, a, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [0, b, a, 0],
      [d, c, 0, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [1.5, 1.5];
};

utils.inherits(FPiece, Piece);


//===========================================
// GPiece
//===========================================
var GPiece = function(name, blockSz) {
  GPiece.super_.call(this, name, cmn.PIECE_G_FILL_COLOUR, cmn.PIECE_STROKE_COLOUR, blockSz);

  var a = this.setCell(2, 0);
  var b = this.setCell(2, 1);
  var c = this.setCell(1, 1);
  var d = this.setCell(1, 2);

  this.patterns = [
    math.t([
      [0, 0, a, 0],
      [0, c, b, 0],
      [0, d, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [a, b, 0, 0],
      [0, c, d, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, d, 0, 0],
      [b, c, 0, 0],
      [a, 0, 0, 0],
      [0, 0, 0, 0]
    ]),
    math.t([
      [0, 0, 0, 0],
      [d, c, 0, 0],
      [0, b, a, 0],
      [0, 0, 0, 0]
    ])
  ];

  this.pivot = [1.5, 1.5];
};

utils.inherits(GPiece, Piece);


module.exports = {
  APiece: APiece,
  BPiece: BPiece,
  CPiece: CPiece,
  DPiece: DPiece,
  EPiece: EPiece,
  FPiece: FPiece,
  GPiece: GPiece
};

