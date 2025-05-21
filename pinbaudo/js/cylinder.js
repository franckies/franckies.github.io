	// Draws a Cylinder --- Already done, just for inspiration
///// Creates vertices
function draw_cyl(){
var vert3 = [[0.0, 1.0, 0.0]];
var norm3 = [[0.0, 1.0, 0.0]];
for(let i = 0; i < 36; i++) {
	vert3[i+1] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
	norm3[i+1] = [0.0, 1.0, 0.0];
	vert3[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
	norm3[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
	vert3[i+73] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI)];
	norm3[i+73] = [Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
	vert3[i+109] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI)];
	norm3[i+109] = [0.0, -1.0, 0.0];
}
vert3[145] = [0.0, -1.0, 0.0];
norm3[145] = [0.0, -1.0, 0.0];
////// Creates indices
var ind3 = [];
//////// Upper part
j = 0;
for(let i = 0; i < 36; i++) {
	ind3[j++] = 0;
	ind3[j++] = i + 1;
	ind3[j++] = (i + 1) % 36 + 1;
}
//////// Lower part
for(let i = 0; i < 36; i++) {
	ind3[j++] = 145;
	ind3[j++] = (i + 1) % 36 + 109;
	ind3[j++] = i + 109;
}
//////// Mid part
for(let i = 0; i < 36; i++) {
	ind3[j++] = i + 73;
	ind3[j++] = (i + 1) % 36 + 37;
	ind3[j++] = i + 37;

	ind3[j++] = (i + 1) % 36 + 37;
	ind3[j++] = i + 73;
	ind3[j++] = (i + 1) % 36 + 73;
}

var uv = [];
k = 0
for (let i = 0; i < 146; i++){
	let x = vert3[i][0];
	let y = vert3[i][1];
	let z = vert3[i][2];
	let theta = Math.atan2(x,z);
	let rawU = theta/(2*Math.PI);
	let u = 1 - (rawU + 0.5);
	let v = y % 1;
	uv[k++] = u;
	uv[k++] = v;
}

var color3 = [1.0, 0.0, 1.0];

return [vert3.flat(1), norm3.flat(1), ind3.flat(1), uv, color3];
}
