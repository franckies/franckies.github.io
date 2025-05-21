function draw_ball(){
  var vert5 = [[0.0, 1.0,0.0]];
	var norm5 = [[0.0, 1.0,0.0]];
	///// Creates vertices
	k = 1;
	t = 0;
	for(let j = 1; j < 18; j++) {
		for(let i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			norm5[k] = [x, y, z];
			vert5[k++] = [x, y, z];
		}
	}
	lastVert = k;
	norm5[k] = [0.0,-1.0,0.0];
	vert5[k++] = [0.0,-1.0,0.0];

	k=0;
	var uv = [];
	for(let i=0; i<=lastVert; i++){
		x = vert5[i][0];
		y = vert5[i][1];
		z = vert5[i][2];
		u = 0.5 + Math.atan2(x,z)/(2*Math.PI);
		v = 0.5 - Math.asin(y)/Math.PI;
		uv[k++] = u;
		uv[k++] = v;
	}

	////// Creates indices
	var ind5 = [];
	k = 0;
	///////// Lateral part
	for(let i = 0; i < 36; i++) {
		for(let j = 1; j < 17; j++) {
			ind5[k++] = i + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}
	//////// Upper Cap
	for(let i = 0; i < 36; i++) {
		ind5[k++] = 0;
		ind5[k++] = i + 1;
		ind5[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(let i = 0; i < 36; i++) {
		ind5[k++] = lastVert;
		ind5[k++] = (i + 1) % 36 + 541;
		ind5[k++] = i + 541;
	}

	var color5 = [0.8, 0.8, 1.0];
  return [vert5.flat(1), norm5.flat(1), ind5.flat(1), uv];
}
