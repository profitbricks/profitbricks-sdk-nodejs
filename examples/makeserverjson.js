#!/usr/bin/env node

// Generate json for a server

libpb=require('libprofitbricks')
	
	
var srv= new libpb.server({"name":"f", 
	                           "ram":"3192",
				   "cores":"1"}) // <--- props passed in

srv.show()
