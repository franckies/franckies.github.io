var fontInfo = {
  maxX : 320,
  maxY: 200,
  glyphInfos: {
    '0': { x: 0, y: 100},
    '1': { x: 64, y: 100},
    '2': { x: 128, y: 100},
    '3': { x: 192, y: 100},
    '4': { x: 256, y: 100},
    '5': { x: 0, y: 0},
    '6': { x:  64, y: 0},
    '7': { x:  128, y: 0},
    '8': { x: 192, y: 0},
    '9': { x: 256, y: 0},
  },
};

//Function that given a texture dictionary and a string returns the uv mapping with the wanted character
function getUVfromString(fontInfo, s){
  var len = s.length;
  var textUvs = [];
  var maxX = fontInfo.maxX;
  var maxY = fontInfo.maxY;
  for(let i = 0; i< len; i++){
    let letter = s[i];
    var u1 = fontInfo.glyphInfos[letter].x;
    var v1 = fontInfo.glyphInfos[letter].y;
    var u2 = u1+64;
    var v2 = v1+100;
    textUvs.push(u1/maxX, v1/maxY, u2/maxX, v1/maxY, u1/maxX, v2/maxY, u2/maxX, v2/maxY);
  }
  return textUvs;
}

var uv2 = getUVfromString(fontInfo, "00000000");

//Functions drawing squares
function draw_square(x){
  var normals2 = [
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0
  ];
  var new_vertices = [
      x*2, 0.0, 0.0,
      x*2+2.0, 0.0, 0.0,
      x*2, 2.0, 0.0,
      x*2+2.0, 2.0, 0.0
  ];
  var new_indices = [
      0+x*4, 1+x*4, 2+x*4,
      1+x*4, 2+x*4, 3+x*4
  ];
  return [new_vertices, new_indices, normals2, uv2];
}

function draw_squares(n){
    var v = [];
    var ind = [];
    var nor = [];
    for (let i=0; i < n; i++){
        let tmp = draw_square(i);
        v = v.concat(tmp[0]);
        ind = ind.concat(tmp[1]);
        nor = nor.concat(tmp[2]);
    }
    return [v,nor,ind,uv2];
}
