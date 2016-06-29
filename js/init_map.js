        var map = L.map('map').setView([50.85, -8.04], 2);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 0,
            maxZoom: 4,
            attribution: 'ITP Map by /u/pauix',
            tms: false,
			noWrap: true,
			maxBoundsViscosity: 1.0
        }).addTo(map);
		  
		/*This function gives you Lat Long of what you click on */
		/*
		function onMapClick(e) {
			if(confirm("ADD MARKER HERE=?")){
				var mrk = prompt("Marker (SL,CL,Dorne,II,North,NotWesteros,RL,TrueNorth,Vale,Wall,West):")
				var txt = prompt("Text")
				m_icon = L.icon({iconUrl: 'img/marker/'+mrk+'.png',iconSize: [32, 74]})
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: m_icon}).bindPopup(txt);
				map.addLayer(mark)
	
				$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+","+mrk+",\""+txt+"\"],\n")
	
			}

		};
		map.on('click', onMapClick);
		*/

		
		//Loop through the SL markers (declared on marker.js) array and add markers to layer
		var arrSLMarkers = []
         for (var i=0; i<markers_SL.length; i++) {
           
            var lat = markers_SL[i][0];
            var lon = markers_SL[i][1];
			var icn = markers_SL[i][2];
            var popupText = markers_SL[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrSLMarkers.push(marker)
         }
		var markerLayerSL = L.layerGroup(arrSLMarkers).addTo(map);
		
		
		//Loop through the CL markers (declared on marker.js) array and add markers to layer
		var arrCLMarkers = []
         for (var i=0; i<markers_CL.length; i++) {
           
            var lat = markers_CL[i][0];
            var lon = markers_CL[i][1];
			var icn = markers_CL[i][2];
            var popupText = markers_CL[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrCLMarkers.push(marker)
         }
		var markerLayerCL = L.layerGroup(arrCLMarkers).addTo(map);

		//Loop through the Vale markers (declared on marker.js) array and add markers to layer
		var arrValeMarkers = []
         for (var i=0; i<markers_Vale.length; i++) {
           
            var lat = markers_Vale[i][0];
            var lon = markers_Vale[i][1];
			var icn = markers_Vale[i][2];
            var popupText = markers_Vale[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrValeMarkers.push(marker)
         }
		var markerLayerVale = L.layerGroup(arrValeMarkers).addTo(map);
		
		
		//Loop through the North markers (declared on marker.js) array and add markers to layer
		var arrNorthMarkers = []
         for (var i=0; i<markers_North.length; i++) {
           
            var lat = markers_North[i][0];
            var lon = markers_North[i][1];
			var icn = markers_North[i][2];
            var popupText = markers_North[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrNorthMarkers.push(marker)
         }
		var markerLayerNorth = L.layerGroup(arrNorthMarkers).addTo(map);		

		//Loop through the Dorne markers (declared on marker.js) array and add markers to layer
		var arrDorneMarkers = []
         for (var i=0; i<markers_Dorne.length; i++) {
           
            var lat = markers_Dorne[i][0];
            var lon = markers_Dorne[i][1];
			var icn = markers_Dorne[i][2];
            var popupText = markers_Dorne[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrDorneMarkers.push(marker)
         }
		var markerLayerDorne = L.layerGroup(arrDorneMarkers).addTo(map);	
		

		//Loop through the Reach markers (declared on marker.js) array and add markers to layer
		var arrReachMarkers = []
         for (var i=0; i<markers_Reach.length; i++) {
           
            var lat = markers_Reach[i][0];
            var lon = markers_Reach[i][1];
			var icn = markers_Reach[i][2];
            var popupText = markers_Reach[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrReachMarkers.push(marker)
         }
		var markerLayerReach = L.layerGroup(arrReachMarkers).addTo(map);			
		
		//Loop through the II markers (declared on marker.js) array and add markers to layer
		var arrIIMarkers = []
         for (var i=0; i<markers_II.length; i++) {
           
            var lat = markers_II[i][0];
            var lon = markers_II[i][1];
			var icn = markers_II[i][2];
            var popupText = markers_II[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrIIMarkers.push(marker)
         }
		var markerLayerII = L.layerGroup(arrIIMarkers).addTo(map);	

		
		//Loop through the RL markers (declared on marker.js) array and add markers to layer
		var arrRLMarkers = []
         for (var i=0; i<markers_RL.length; i++) {
           
            var lat = markers_RL[i][0];
            var lon = markers_RL[i][1];
			var icn = markers_RL[i][2];
            var popupText = markers_RL[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrRLMarkers.push(marker)
         }
		var markerLayerRL = L.layerGroup(arrRLMarkers).addTo(map);	
		
		//Loop through the West markers (declared on marker.js) array and add markers to layer
		var arrWestMarkers = []
         for (var i=0; i<markers_West.length; i++) {
           
            var lat = markers_West[i][0];
            var lon = markers_West[i][1];
			var icn = markers_West[i][2];
            var popupText = markers_West[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrWestMarkers.push(marker)
         }
		var markerLayerWest = L.layerGroup(arrWestMarkers).addTo(map);	

		//Loop through the NonWesteros markers (declared on marker.js) array and add markers to layer
		var arrNonWesterosMarkers = []
         for (var i=0; i<markers_NonWesteros.length; i++) {
           
            var lat = markers_NonWesteros[i][0];
            var lon = markers_NonWesteros[i][1];
			var icn = markers_NonWesteros[i][2];
            var popupText = markers_NonWesteros[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrNonWesterosMarkers.push(marker)
         }
		var markerLayerNonWesteros = L.layerGroup(arrNonWesterosMarkers).addTo(map);	
				
		
		// Hide markers if the user zooms out
		map.on('zoomend', function () {
			if (map.getZoom() < 2) {
				map.removeLayer(markerLayerSL);
				map.removeLayer(markerLayerCL);
				map.removeLayer(markerLayerVale);
				map.removeLayer(markerLayerNorth);
				map.removeLayer(markerLayerDorne);
				map.removeLayer(markerLayerReach);				
				map.removeLayer(markerLayerII);	
				map.removeLayer(markerLayerRL);
				map.removeLayer(markerLayerWest);	
				map.removeLayer(markerLayerNonWesteros);	
			}
			else
			{
				map.addLayer(markerLayerSL);
				map.addLayer(markerLayerCL);
				map.addLayer(markerLayerVale);
				map.addLayer(markerLayerNorth);
				map.addLayer(markerLayerDorne);
				map.addLayer(markerLayerReach);
				map.addLayer(markerLayerII);
				map.addLayer(markerLayerWest);
				map.addLayer(markerLayerRL);
				map.addLayer(markerLayerNonWesteros);
								
			}   
		}); 
		
		
		function toggleSLLayer(){
			if (map.hasLayer(markerLayerSL)) {
				map.removeLayer(markerLayerSL);
			}
			else
			{
				map.addLayer(markerLayerSL);
			}
		}
		
		function toggleCLLayer(){
			if (map.hasLayer(markerLayerCL)) {
				map.removeLayer(markerLayerCL);
			}
			else
			{
				map.addLayer(markerLayerCL);
			}
		}
		
		function toggleValeLayer(){
			if (map.hasLayer(markerLayerVale)) {
				map.removeLayer(markerLayerVale);
			}
			else
			{
				map.addLayer(markerLayerVale);
			}
		}
		
		function toggleNorthLayer(){
			if (map.hasLayer(markerLayerNorth)) {
				map.removeLayer(markerLayerNorth);
			}
			else
			{
				map.addLayer(markerLayerNorth);
			}
		}				

		function toggleDorneLayer(){
			if (map.hasLayer(markerLayerDorne)) {
				map.removeLayer(markerLayerDorne);
			}
			else
			{
				map.addLayer(markerLayerDorne);
			}
		}	

		function toggleReachLayer(){
			if (map.hasLayer(markerLayerReach)) {
				map.removeLayer(markerLayerReach);
			}
			else
			{
				map.addLayer(markerLayerReach);
			}
		}	

		function toggleIILayer(){
			if (map.hasLayer(markerLayerII)) {
				map.removeLayer(markerLayerII);
			}
			else
			{
				map.addLayer(markerLayerII);
			}
		}			

		function toggleRLLayer(){
			if (map.hasLayer(markerLayerRL)) {
				map.removeLayer(markerLayerRL);
			}
			else
			{
				map.addLayer(markerLayerRL);
			}
		}	
		
		function toggleWestLayer(){
			if (map.hasLayer(markerLayerWest)) {
				map.removeLayer(markerLayerWest);
			}
			else
			{
				map.addLayer(markerLayerWest);
			}
		}			

		function toggleNonWesterosLayer(){
			if (map.hasLayer(markerLayerNonWesteros)) {
				map.removeLayer(markerLayerNonWesteros);
			}
			else
			{
				map.addLayer(markerLayerNonWesteros);
			}
		}					