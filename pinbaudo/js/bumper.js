function draw_bumper(vertices) {
	var v = [];
	for (let i = 0; i < vertices.length/3; i++) {
		v[i * 3 + 0] = vertices[i * 3 + 0] * 4.0;
		v[i * 3 + 1] = vertices[i * 3 + 1] * 4.0;
		v[i * 3 + 2] = vertices[i * 3 + 2] * 4.0;
	}
	return v;
}
