  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var SL = L.icon({iconUrl: 'img/marker/SL.png',iconSize: [32, 74]})
var SLcapitol = L.icon({iconUrl: 'img/marker/SLcapitol.png',iconSize: [32, 74]})
var SLfort = L.icon({iconUrl: 'img/marker/SLfort.png',iconSize: [32, 74]})
var SLtown = L.icon({iconUrl: 'img/marker/SLtown.png',iconSize: [32, 74]})

var CL = L.icon({iconUrl: 'img/marker/CL.png',iconSize: [32, 74]})
var CLtown = L.icon({iconUrl: 'img/marker/CLtown.png',iconSize: [32, 74]})
var CLcity = L.icon({iconUrl: 'img/marker/CLcity.png',iconSize: [32, 74]})
var CLfort = L.icon({iconUrl: 'img/marker/CLfort.png',iconSize: [32, 74]})

var Dorne = L.icon({iconUrl: 'img/marker/Dorne.png',iconSize: [32, 74]})

var II = L.icon({iconUrl: 'img/marker/II.png',iconSize: [32, 74]})
var IItown = L.icon({iconUrl: 'img/marker/IItown.png',iconSize: [32, 74]})
var IIcapitol = L.icon({iconUrl: 'img/marker/IIcapitol.png',iconSize: [32, 74]})

var North = L.icon({iconUrl: 'img/marker/North.png',iconSize: [32, 74]})
var NorthCity = L.icon({iconUrl: 'img/marker/NorthCity.png',iconSize: [32, 74]})
var NorthTown = L.icon({iconUrl: 'img/marker/NorthTown.png',iconSize: [32, 74]})
var NorthCapitol = L.icon({iconUrl: 'img/marker/NorthCapitol.png',iconSize: [32, 74]})
var NorthFort = L.icon({iconUrl: 'img/marker/NorthFort.png',iconSize: [32, 74]})

var Essos = L.icon({iconUrl: 'img/marker/NotWesteros.png',iconSize: [32, 74]})
var EssosFort = L.icon({iconUrl: 'img/marker/EssosFort.png',iconSize: [32, 74]})
var EssosRuin = L.icon({iconUrl: 'img/marker/EssosRuin.png',iconSize: [32, 74]})
var EssosTown = L.icon({iconUrl: 'img/marker/EssosTown.png',iconSize: [32, 74]})
var EssosCity = L.icon({iconUrl: 'img/marker/EssosCity.png',iconSize: [32, 74]})
var EssosBigCity = L.icon({iconUrl: 'img/marker/EssosBigCity.png',iconSize: [32, 74]})

var ValyriaRuin = L.icon({iconUrl: 'img/marker/ValyriaRuin.png',iconSize: [32, 74]})
var ValyriaCity = L.icon({iconUrl: 'img/marker/ValyriaCity.png',iconSize: [32, 74]})

var SothoryosRuin = L.icon({iconUrl: 'img/marker/SothoryosRuin.png',iconSize: [32, 74]})

var Rhoynish = L.icon({iconUrl: 'img/marker/Rhoynish.png',iconSize: [32, 74]})

var SICity = L.icon({iconUrl: 'img/marker/SICity.png',iconSize: [32, 74]})
var SITown = L.icon({iconUrl: 'img/marker/SITown.png',iconSize: [32, 74]})

var Reach = L.icon({iconUrl: 'img/marker/Reach.png',iconSize: [32, 74]})
var ReachFort = L.icon({iconUrl: 'img/marker/ReachFort.png',iconSize: [32, 74]})
var ReachTown = L.icon({iconUrl: 'img/marker/ReachTown.png',iconSize: [32, 74]})
var ReachCity = L.icon({iconUrl: 'img/marker/ReachCity.png',iconSize: [32, 74]})
var ReachCapitol = L.icon({iconUrl: 'img/marker/ReachCapitol.png',iconSize: [32, 74]})

var RL = L.icon({iconUrl: 'img/marker/RL.png',iconSize: [32, 74]})
var RLtown = L.icon({iconUrl: 'img/marker/RLtown.png',iconSize: [32, 74]})
var RLfort = L.icon({iconUrl: 'img/marker/RLfort.png',iconSize: [32, 74]})
var RLcapitol = L.icon({iconUrl: 'img/marker/RLcapitol.png',iconSize: [32, 74]})

var TrueNorth = L.icon({iconUrl: 'img/marker/TrueNorth.png',iconSize: [32, 74]})

var Vale = L.icon({iconUrl: 'img/marker/Vale.png',iconSize: [32, 74]})
var Valecapitol = L.icon({iconUrl: 'img/marker/Valecapitol.png',iconSize: [32, 74]})
var Valecity = L.icon({iconUrl: 'img/marker/Valecity.png',iconSize: [32, 74]})
var Valetown = L.icon({iconUrl: 'img/marker/Valetown.png',iconSize: [32, 74]})
var Valefort = L.icon({iconUrl: 'img/marker/Valefort.png',iconSize: [32, 74]})

var Wall = L.icon({iconUrl: 'img/marker/Wall.png',iconSize: [32, 74]})

var West = L.icon({iconUrl: 'img/marker/West.png',iconSize: [32, 74]})
var WestTown = L.icon({iconUrl: 'img/marker/WestTown.png',iconSize: [32, 74]})
var WestCity = L.icon({iconUrl: 'img/marker/WestCity.png',iconSize: [32, 74]})
var WestCapitol = L.icon({iconUrl: 'img/marker/WestCapitol.png',iconSize: [32, 74]})

// Define the markers
var markers_SL = [
[-31.428663117358596,-114.697265625,SL,"Lover's Hill"],
[-32.76880048488168,-116.27929687499999,SL,"Nightsong"],
[-29.228890030194215,-107.841796875,SL,"Harvest Hall"],
[-30.524413269923986,-101.6015625,SL,"Blackhaven"],
[-25.562265014427492,-96.328125,SL,"Summerhall"],
[-21.37124437061831,-98.525390625,SL,"Broad Arch"],
[-25.720735134412095,-89.912109375,SL,"Grandview"],
[-31.503629305773018,-90.87890625,SL,"Stonehelm"],
[-29.305561325527712,-87.5390625,SL,"Crow's Nest"],
[-25.40358497318669,-82.96875,SL,"Griffin's Roost"],
[-28.613459424004414,-71.015625,SL,"Rain House"],
[-32.175612478499325,-73.740234375,SL,"Holywater"],
[-33.28461996888768,-77.6953125,SL,"Mistwood"],
[-36.17335693522159,-78.134765625,SLtown,"Weeping Town"],
[-35.02999636902566,-71.103515625,SL,"Greenstone"],
[-20.961439614096825,-69.78515625,SL,"Evenfall Hall"],
[-22.187404991398775,-78.22265625,SLcapitol,"Storm's End"],
[-15.876809064146757,-74.091796875,SL,"Parchments"],
[-12.811801316582606,-80.068359375,SL,"Haystack Hall"],
[-17.056784609942554,-82.44140625,SL,"Bronzegate"],
[-18.062312304546726,-92.10937499999999,SL,"Felwood"],
[-13.838079936422462,-93.955078125,SL,"Fawnton"],
[-33.06392419812064,-100.8984375,SLfort,"Caelen's Reach"],
[-11.350796722383672,-76.552734375,SLfort,"Durran's Grief"],
[-11.95334939364343,-86.923828125,SLfort,"Forrestwatch"],
[-29.228890030194215,-97.646484375,SL,"Gallowsgrey"]]


var markers_Vale = [
[27.21555620902969,-88.06640625,Vale,"Gates of the Moon"],
[28.844673680771795,-87.71484375,Valecapitol,"The Eyrie"],
[25.085598897064777,-92.197265625,Vale,"The Bloody Gate"],
[15.623036831528264,-79.453125,Valetown,"Wickendon"],
[25.085598897064777,-67.67578124999999,Valecity,"Gulltown"],
[26.980828590472107,-61.52343749999999,Vale,"Witch Isle"],
[27.761329874505233,-66.181640625,Vale,"Runestone"],
[29.611670115197406,-71.982421875,Vale,"Old Anchor"],
[33.211116472416855,-71.89453125,Vale,"Longbow Hall"],
[38.548165423046584,-66.09375,Vale,"Champion's Hall"],
[34.016241889667015,-83.75976562499999,Vale,"Heart's Home"],
[37.85750715625203,-80.15625,Vale,"Snakewood"],
[41.77131167976407,-77.431640625,Vale,"Coldwater Burn"],
[46.37725420510028,-69.60937499999999,Vale,"The Paps"],
[45.767522962149904,-78.134765625,Vale,"Pebble"],
[45.02695045318546,-83.84765625,Vale,"The Fingers"],
[47.754097979680026,-90,Valetown,"Three Sisters"],
[41.83682786072714,-88.59374999999999,Vale,"Ninestars"],
[41.64007838467894,-94.833984375,Valefort,"The Bite's Teeth"],
[34.66935854524545,-94.130859375,Vale,"Strongsong"],
[38.61687046392973,-85.60546875,Vale,"Newkeep"],
[31.728167146023935,-76.904296875,Vale,"Cloudspire"],
[28.14950321154457,-79.89257812499999,Vale,"Ironoaks"],
[25.878994400196202,-77.6953125,Vale,"Grey Glen"],
[24.367113562651276,-81.474609375,Vale,"Redfort"],
[21.94304553343818,-78.046875,Valefort,"Little Redfort"],
[27.371767300523047,-83.583984375,Vale,"Hardhold"]]

var markers_North = [
[47.040182144806664,-112.763671875,North,"Greywater Watch"],
[51.45400691005982,-107.40234375,North,"Moat Cailin"],
[50.56928286558243,-94.39453125,North,"Oldcastle"],
[56.12106042504407,-98.525390625,NorthCity,"White Harbor"],
[58.44773280389084,-80.947265625,North,"Ramsgate"],
[57.27904276497778,-67.8515625,North,"Widow's Watch"],
[62.59334083012024,-94.306640625,North,"Sheepshead Hills"],
[64.35893097894458,-90.17578124999999,North,"Hornwood"],
[68.33437594128185,-87.5390625,North,"The Dreadfort"],
[70.61261423801925,-70.400390625,North,"Karhold"],
[73.47848507889992,-91.93359375,North,"Last Hearth"],
[75.47513069090051,-70.48828125,North,"Kingshouse"],
[74.47290269579455,-109.6875,North,"Nothern Mountains"],
[71.60828252210263,-108.28125,North,"Highpoint"],
[67.30597574414466,-108.984375,NorthCapitol,"Winterfell"],
[63.66576033778838,-106.25976562499999,North,"Castle Cerwyn"],
[62.71446210149774,-123.22265625000001,North,"Tallhart Square"],
[56.41390137600676,-119.00390625,North,"Goldgrass"],
[57.562995459387146,-124.27734374999999,NorthTown,"Barrowton"],
[59.933000423746336,-142.03125,North,"The Rills"],
[66.58321725728175,-130.078125,North,"Bypine"],
[71.35706654962706,-142.03125,North,"Sea Dragon Point"],
[70.58341752317065,-124.71679687499999,North,"Deepwood Motte"],
[71.32895017791999,-117.94921874999999,North,"Ironrath"],
[73.89811065820952,-128.759765625,North,"Bear Island"],
[47.45780853075031,-138.779296875,North,"Flint's Finger"],
[53.69670647530323,-134.47265625,NorthFort,"Ironguard"]]

var markers_CL = [
[0.9667509997666425,-73.916015625,CL,"Sharp Point"],
[-1.4061088354351468,-72.50976562499999,CL,"Stonedance"],
[-6.839169626342808,-81.2109375,CLtown,"Wendwater Town"],
[-10.40137755454354,-92.021484375,CL,"Kingswood Hall"],
[7.27529233637217,-73.388671875,CL,"Dragonstone"],
[5.266007882805511,-76.46484375,CLtown,"Driftmark"],
[4.477856485570586,-78.134765625,CLfort,"Aelinorfort"],
[12.382928338487408,-73.740234375,CL,"Dyre Den"],
[14.349547837185375,-68.291015625,CL,"Claw Isle"],
[4.653079918274051,-80.68359375,CL,"Sweetport Sound"],
[8.494104537551882,-82.353515625,CL,"Rook's Rest"],
[6.751896464843375,-87.1875,CL,"Axefall"],
[9.795677582829743,-92.548828125,CL,"Antlers"],
[2.460181181021018,-85.60546875,CLtown,"Duskendale"],
[-1.9332268264771106,-86.396484375,CL,"Knight's Shore"],
[14.774882506516272,-74.35546875,CL,"Brownhollow"],
[2.6357885741666065,-93.955078125,CL,"Stokeworth"],
[-0.7031073524364783,-95.361328125,CL,"Hayford"],
[-1.5818302639606328,-91.49414062499999,CL,"Rosby"],
[-4.915832801313164,-99.31640625,CLfort,"Fort Rosby"],
[-4.8282597468669755,-94.21875,CLcity,"King's Landing"]]
//Reach

var markers_Reach = [
[-4.12728532324537,-106.083984375,Reach,"Darkdell"],
[-10.487811882056695,-105.029296875,ReachTown,"Tumbleton"],
[-7.18810087117902,-116.630859375,Reach,"The Ring"],
[-13.923403897723334,-110.0390625,ReachTown,"Bitterbridge"],
[-17.30868788677001,-109.77539062499999,Reach,"Grassfield Keep"],
[-10.574222078332806,-124.01367187499999,Reach,"Coldmoat"],
[-16.55196172197251,-130.341796875,Reach,"Goldengrove"],
[-14.179186142354169,-138.69140625,Reach,"Red Lake"],
[-18.396230138028812,-146.337890625,Reach,"Old Oak"],
[-22.024545601240327,-137.197265625,Reach,"Appleton"],
[-25.085598897064763,-141.064453125,ReachTown,"Shield Islands"],
[-25.48295117535531,-134.208984375,Reach,"New Barrel"],
[-20.550508894195637,-116.27929687499999,Reach,"Longtable"],
[-27.059125784374054,-113.5546875,ReachTown,"Ashford"],
[-24.206889622398023,-120.84960937499999,Reach,"Cider Hall"],
[-29.228890030194215,-130.078125,ReachCapitol,"Highgarden"],
[-32.175612478499325,-124.01367187499999,Reach,"Starpike"],
[-36.38591277287651,-130.166015625,Reach,"Horn Hill"],
[-33.65120829920497,-148.88671874999997,Reach,"Bandallon"],
[-34.74161249883172,-140.361328125,Reach,"Brightwater Keep"],
[-38.06539235133248,-140.9765625,Reach,"Honeyholt"],
[-40.78054143186031,-138.427734375,Reach,"Uplands"],
[-41.771311679764054,-143.7890625,ReachCity,"Oldtown"],
[-51.39920565355377,-142.646484375,Reach,"Sunhouse"],
[-43.771093817756494,-148.798828125,Reach,"Blackcrown"],
[-51.67255514839674,-150.556640625,ReachTown,"The Arbor"],
[-45.89000815866183,-148.18359375,Reach,"Three Towers"]]
//Iron Islands
var markers_II = [
[33.211116472416855,-138.33984375,II,"Blacktyde Hall"],
[31.203404950917395,-135.87890625,II,"Volmark"],
[27.527758206861886,-137.28515624999997,II,"Grey Garden"],
[30.977609093348686,-140.888671875,II,"Orkmont"],
[30.600093873550072,-145.72265625,II,"Castle Drumm"],
[31.728167146023935,-147.91992187499997,II,"Carved Keep"],
[30.90222470517144,-149.677734375,II,"Reaver's Rest"],
[29.152161283318915,-143.7890625,II,"Pebbleton Tower"],
[27.371767300523047,-141.943359375,II,"Iron Holt"],
[25.878994400196202,-144.228515625,IItown,"Lordsport"],
[26.03704188651584,-146.42578125,II,"Saltcliffe"],
[31.203404950917395,-175.25390624999997,II,"Lonely Light"],
[29.53522956294847,-136.7578125,II,"Skyshatter"],
[28.92163128242129,-134.736328125,II,"Twenty Towers"],
[30.600093873550072,-139.482421875,II,"Nettle's Scourge"],
[26.03704188651584,-142.11914062499997,II,"Pyke"],
[29.611670115197406,-148.271484375,IIcapitol,"Hammerhorn"],
[28.613459424004414,-146.513671875,II,"Depth's Lamment"]]

var markers_Dorne = [
[-36.31512514748051,-99.66796875,Dorne,"Wyl"],
[-36.31512514748051,-106.61132812499999,Dorne,"Vulture's Roost"],
[-39.571822237343724,-115.400390625,Dorne,"Kingsgrave"],
[-43.32517767999295,-113.5546875,Dorne,"Skyreach"],
[-43.19716728250127,-102.83203125,Dorne,"Yronwood"],
[-40.51379915504413,-95.712890625,Dorne,"Gallowsgrey"],
[-45.33670190996812,-88.59374999999999,Dorne,"The Tor"],
[-46.01222384063236,-71.806640625,Dorne,"Ghost Hill"],
[-48.80686346108517,-68.291015625,Dorne,"Spottswood"],
[-50.736455137010644,-71.806640625,Dorne,"Sunspear"],
[-53.4357192066942,-78.75,Dorne,"Lemonwood"],
[-49.439556958940834,-86.1328125,Dorne,"Godsgrace"],
[-48.74894534343292,-92.10937499999999,Dorne,"Scorched Rock"],
[-53.067626642387374,-89.12109375,Dorne,"Salt Shore"],
[-50.34546040860479,-96.85546875,Dorne,"Vaith"],
[-50.62507306341435,-109.86328125,Dorne,"Hellholt"],
[-50.457504020420565,-122.87109375,Dorne,"Sandstone"],
[-40.44694705960048,-126.03515625,Dorne,"Blackmont"],
[-43.644025847699496,-126.03515625,Dorne,"High Hermitage"],
[-47.5172006978394,-129.375,Dorne,"Starfall"]]

//Riverlands
var markers_RL = [
[40.58058466412764,-101.513671875,RLfort,"San Freycisco"],
[33.7243396617476,-119.970703125,RLtown,"Seagard"],
[39.50404070558415,-108.45703125,RLfort,"Wolfswatch"],
[36.527294814546245,-114.43359375,RLcapitol,"The Crossing"],
[30.221101852485987,-110.21484375,RL,"Castle Lychester"],
[30.14512718337613,-116.71874999999999,RL,"Hag's Mire"],
[25.562265014427492,-116.806640625,RL,"Raventree Hall"],
[26.352497858154,-110.56640625,RLtown,"Fairmarket"],
[25.48295117535531,-103.88671875,RL,"Cylene Tower"],
[20.138470312451155,-100.546875,RLtown,"Lord Harroway's Town"],
[17.14079039331665,-93.8671875,RLtown,"Saltpans"],
[13.15437605541853,-89.384765625,RLtown,"Maidenpool"],
[10.228437266155943,-97.998046875,RL,"The Spike"],
[15.114552871944102,-98.349609375,RLfort,"Fort Terminus"],
[13.581920900545844,-101.865234375,RL,"Harrenhal"],
[10.574222078332806,-105.908203125,RL,"Willow Wood"],
[6.839169626342808,-102.39257812499999,RL,"Briarwhite"],
[3.162455530237848,-108.369140625,RL,"Atranta"],
[1.9332268264771233,-112.32421875,RLfort,"Rose Red"],
[10.660607953624762,-110.390625,RLtown,"Wendish Town"],
[6.140554782450308,-115.927734375,RLtown,"Stoney Sept"],
[12.12526421833159,-119.970703125,RL,"Pinkmaiden"],
[12.297068292853805,-115.75195312499999,RL,"Acorn Hall"],
[18.396230138028827,-113.37890625,RL,"Stone Hedge"],
[22.024545601240337,-109.599609375,RLtown,"Pennytree"],
[19.062117883514667,-104.150390625,RL,"Darry"],
[19.642587534013046,-117.42187500000001,RL,"Riverrun"],
[19.559790136497398,-120.498046875,RL,"Sherrer"],
[16.88865978738161,-121.728515625,RL,"Wayfarer's Rest"],
[10.833305983642491,-101.77734374999999,RLfort,"Isle of Ashes"]]

var markers_West = [
//Westerlands
[22.674847351188536,-138.69140625,West,"Banefort"],
[20.385825381874263,-128.671875,West,"Goldford"],
[14.689881366618774,-124.8046875,West,"Golden Tooth"],
[17.727758609852284,-134.38476562499997,West,"Castamere"],
[17.978733095556183,-138.69140625,West,"The Crag"],
[11.26461221250444,-145.1953125,West,"Faircastle"],
[10.401377554543553,-138.779296875,West,"Riverspring"],
[14.519780046326085,-132.890625,West,"Ashemark"],
[10.833305983642491,-134.38476562499997,West,"Sarsfield"],
[7.27529233637217,-135.87890625,West,"Pitfall"],
[5.878332109674327,-150.29296875,WestTown,"Kayce"],
[2.0210651187669897,-151.962890625,West,"Feastfires"],
[4.214943141390651,-143.876953125,WestCapitol,"Casterly Rock"],
[7.623886853120036,-128.84765625,West,"Hornvale"],
[2.986927393334876,-126.21093749999999,West,"Deep Den"],
[2.1088986592431382,-132.275390625,West,"Silverhill"],
[-1.2303741774326018,-140.44921875,West,"Clegane's Keep"],
[-8.233237111274553,-148.53515625,West,"Crakehall"],
[-5.9657536710655235,-132.5390625,West,"The Bower"],
[-6.664607562172573,-138.8671875,West,"Cornfield"],
[2.6357885741666065,-143.876953125,WestCity,"Lannisport"]
]

// Wall
var markers_NonWesteros = [
[77.3318091852135,-93.95507879555225,Wall,"Castle Black"],
[77.35106958476409,-85.16601629555225,Wall,"Eastwatch"],
[77.2544787022853,-103.00781317055225,Wall,"Shadow Tower"],



// Free Cities
[41.3108238809182,-44.12109374999999,EssosBigCity,"Braavos"],
[-2.7235830833483856,-43.681640625,EssosBigCity,"Pentos"],
[14.093957177836224,-15.205078125,EssosBigCity,"Norvos"],
[-2.0210651187669897,11.337890625,EssosBigCity,"Qohor"],
[-29.91685223307016,-33.57421875,EssosBigCity,"Myr"],
[-50.95842672335992,-42.01171875,EssosBigCity,"Lys"],
[-33.797408767572485,-54.404296875,EssosBigCity,"Tyrosh"],
[36.24427318493909,-21.97265625,EssosBigCity,"Lorath"],
[-51.72702815704775,5.625,EssosBigCity,"Volantis"],

//// Rest of Essos
[1.3182430568620136,-28.125,EssosRuin,"Ghoyan Drohe"],
[-7.536764322084078,-12.480468749999998,EssosRuin,"Ny Sar"],
[60.71619779357716,144.22851495444772,EssosCity,"Port of Ibben"],
[68.52823492039876,149.06249932944772,EssosTown,"Ib Nor"],
[50.401515322782366,170.15624932944775,EssosTown,"Ib Saar"],
[43.51668853502909,157.67578057944775,EssosRuin,"Ibbish"],
[47.39834920035926,143.61328057944775,EssosTown,"New Ibbish"],
[33.50475906922606,54.75585870444774,EssosRuin,"Sarys"],
[38.548165423046584,49.13085870444774,EssosCity,"Morosh"],
[31.87755764334002,39.814452454447746,EssosCity,"Saath"],
[-0.7031073524364783,33.925780579447746,EssosRuin,"Essaria"],
[-6.577303118123875,62.929686829447746,EssosRuin,"Sarnath"],
[-2.3723687086440504,80.85937432944775,EssosRuin,"Kasath"],
[-6.402648405963884,93.51562432944775,EssosRuin,"Sathar"],
[10.228437266155943,86.48437432944775,EssosRuin,"Sallosh"],
[3.7765593098768635,90.96679620444775,EssosRuin,"Gornath"],
[-20.797201434306984,83.05663995444775,EssosRuin,"Hazdahn No"],
[10.487811882056683,140.88867120444775,EssosTown,"Vaes Dothrak"],
[-40.78054143186031,-64.423828125,EssosFort,"Bloodstone (T1 Fort and T1 Port)"],
[-51.835777520452474,52.82226495444774,EssosCity,"Tolos"],
[-66.687783861162,82.61718682944775,EssosRuin,"Old Ghis"],
[-73.022591571473,86.57226495444775,EssosBigCity,"New Ghis"],
[-57.32652122521709,78.57421807944775,EssosBigCity,"Astapor"],
[-45.95114968669139,82.52929620444775,EssosBigCity,"Yunkai"],
[-40.913512576127566,89.64843682944775,EssosBigCity,"Meereen"],
[-66.6181218846659,166.99218682944775,EssosBigCity,"Qarth"],
[-62.71446210149774,155.47851495444775,EssosRuin,"Vaes Qosar"],
[-57.23150299147891,144.66796807944775,EssosRuin,"Vaes Tolorro"],
[-61.81466389468391,138.60351495444775,EssosRuin,"Vaes Shirosi"],
[-63.430860212678105,129.19921807944775,EssosRuin,"Vaes Orvik"],
[-66.08936427047087,127.35351495444773,EssosTown,"Port Yhos"],
[-64.92354174306496,147.91992120444775,EssosTown,"Qarkash"],
[-41.64007838467892,127.44140557944775,EssosCity,"Kosrak"],
[-30.902224705171427,160.83984307944775,EssosRuin,"Adakhakileki"],
[-26.509904531413927,166.37695245444775,EssosRuin,"Vaes Jini (Yinishar)"],
[-21.616579336740593,135.08788995444775,EssosRuin,"Vaes Efe"],
[-28.381735043223095,129.19921807944775,EssosRuin,"Vaes Mejhah"],
[-29.305561325527712,119.26757745444775,EssosRuin,"Qhardaq"],
[-41.70572851523751,108.01757745444775,EssosCity,"Hesh"],
[-49.667627822621924,115.57617120444775,EssosCity,"Lhazosh"],
[-28.226970038918328,-7.207031920552255,EssosRuin,"The Sorrows"],
[-40.380028402511826,-4.218750670552254,EssosTown,"Selhorys"],
[-45.151053265563384,-4.218750670552254,EssosTown,"Valysar"],
[-48.6909603909255,-2.0214850455522537,EssosTown,"Volon Therys"],
// Moraq
[-76.43460358351301,158.3789049088955,EssosTown,"Vahar"],
[-73.52839948765174,161.3671861588955,EssosTown,"Faros"],
[-80.61842419685506,179.1210924088955,EssosTown,"Port Moraq"],

// Summer Islands

[-77.80477074199555,-46.757813170552254,SITown,"Tall Trees Town"],
[-76.41397301513199,-56.601563170552254,SICity,"Lotus Port"],
[-74.54332982677904,-65.39062567055225,SITown,"Last Lament"],

//Valyria
[-47.57652571374621,40.517577454447746,ValyriaCity,"Mantarys"],
[-47.04018214480664,30.49804620444775,ValyriaRuin,"Ruins"],
[-48.63290858589533,21.181639954447746,ValyriaRuin,"Ruins"],
[-52.908902047770255,46.142578125,ValyriaRuin,"Elyria"],
[-61.8146638946839,60.99609375,ValyriaRuin,"Velos"],
[-57.23150299147891,59.32617187499999,ValyriaRuin,"Ghozai"],
[-67.67608458198097,35.68359375,ValyriaRuin,"Tyria"],
[-68.91100484562018,21.533203125,ValyriaRuin,"Oros"],
[-71.01695975726373,31.904296874999996,ValyriaRuin,"Valyria"],

// Sothoryos 

[-80.8588748843299,74.619140625,SothoryosRuin,"Zamettar"],
[-83.03688198552364,81.5625,SothoryosRuin,"Yeen"],
[-82.48333497678894,62.75390625,SothoryosRuin,"Gogossos"],
[-79.68718415450823,132.099609375,SothoryosRuin,"Gorosh"]]