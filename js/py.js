var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="py.data";var REMOTE_PACKAGE_BASE="py.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","py",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_code",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_io",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_vendored_packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_path",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_log",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/py","_process",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","py-1.5.4-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:153087,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1286,2144,3088,4256,5282,6446,7501,8715,10151,11320,12475,13849,15130,16387,17688,18778,19595,20411,21335,22277,23307,24522,25991,27270,28301,29421,30561,31836,33135,34411,35712,36955,38119,39273,40501,41748,42889,44003,45074,46248,47369,48477,49401,50343,51660,52773,53713,54515,55412,56549,57816,58976,60222,61439,62269,63397,64806,65969,67239,68486,69545,70518,71675,72850,73794,75011,76255,77244,78399,79589,80839,81982,83182,84204,85321,86420,87586,88631,89558,90622,91833,92969,94177,95199,96431,97543,98502,99743,101007,102247,103289,104535,105775,106987,108203,109317,110464,111556,112824,113913,115159,116283,117627,118702,119680,120666,121602,122880,124130,125423,126484,127482,128719,129850,131045,132132,133438,134574,135609,136824,137847,139060,140482,141736,142982,144167,145294,146537,147601,148807,150128,151396,152389],sizes:[1286,858,944,1168,1026,1164,1055,1214,1436,1169,1155,1374,1281,1257,1301,1090,817,816,924,942,1030,1215,1469,1279,1031,1120,1140,1275,1299,1276,1301,1243,1164,1154,1228,1247,1141,1114,1071,1174,1121,1108,924,942,1317,1113,940,802,897,1137,1267,1160,1246,1217,830,1128,1409,1163,1270,1247,1059,973,1157,1175,944,1217,1244,989,1155,1190,1250,1143,1200,1022,1117,1099,1166,1045,927,1064,1211,1136,1208,1022,1232,1112,959,1241,1264,1240,1042,1246,1240,1212,1216,1114,1147,1092,1268,1089,1246,1124,1344,1075,978,986,936,1278,1250,1293,1061,998,1237,1131,1195,1087,1306,1136,1035,1215,1023,1213,1422,1254,1246,1185,1127,1243,1064,1206,1321,1268,993,698],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_py.data")}Module["addRunDependency"]("datafile_py.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/py/__init__.py",start:0,end:6022,audio:0},{filename:"/lib/python3.7/site-packages/py/_error.py",start:6022,end:8939,audio:0},{filename:"/lib/python3.7/site-packages/py/_builtin.py",start:8939,end:15460,audio:0},{filename:"/lib/python3.7/site-packages/py/_xmlgen.py",start:15460,end:23824,audio:0},{filename:"/lib/python3.7/site-packages/py/__metainfo.py",start:23824,end:23879,audio:0},{filename:"/lib/python3.7/site-packages/py/_version.py",start:23879,end:23995,audio:0},{filename:"/lib/python3.7/site-packages/py/test.py",start:23995,end:24217,audio:0},{filename:"/lib/python3.7/site-packages/py/_std.py",start:24217,end:24848,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/assertion.py",start:24848,end:28022,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/__init__.py",start:28022,end:28068,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/_assertionold.py",start:28068,end:45937,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/_py2traceback.py",start:45937,end:48702,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/source.py",start:48702,end:62752,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/code.py",start:62752,end:90244,audio:0},{filename:"/lib/python3.7/site-packages/py/_code/_assertionnew.py",start:90244,end:101694,audio:0},{filename:"/lib/python3.7/site-packages/py/_io/__init__.py",start:101694,end:101723,audio:0},{filename:"/lib/python3.7/site-packages/py/_io/saferepr.py",start:101723,end:104206,audio:0},{filename:"/lib/python3.7/site-packages/py/_io/capture.py",start:104206,end:115846,audio:0},{filename:"/lib/python3.7/site-packages/py/_io/terminalwriter.py",start:115846,end:129332,audio:0},{filename:"/lib/python3.7/site-packages/py/_vendored_packages/iniconfig.py",start:129332,end:134540,audio:0},{filename:"/lib/python3.7/site-packages/py/_vendored_packages/__init__.py",start:134540,end:134540,audio:0},{filename:"/lib/python3.7/site-packages/py/_vendored_packages/apipkg.py",start:134540,end:140960,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/cacheutil.py",start:140960,end:144293,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/__init__.py",start:144293,end:144325,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/local.py",start:144325,end:179651,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/svnwc.py",start:179651,end:223476,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/common.py",start:223476,end:238102,audio:0},{filename:"/lib/python3.7/site-packages/py/_path/svnurl.py",start:238102,end:252817,audio:0},{filename:"/lib/python3.7/site-packages/py/_log/__init__.py",start:252817,end:252891,audio:0},{filename:"/lib/python3.7/site-packages/py/_log/warning.py",start:252891,end:255456,audio:0},{filename:"/lib/python3.7/site-packages/py/_log/log.py",start:255456,end:261459,audio:0},{filename:"/lib/python3.7/site-packages/py/_process/__init__.py",start:261459,end:261499,audio:0},{filename:"/lib/python3.7/site-packages/py/_process/forkedfunc.py",start:261499,end:265191,audio:0},{filename:"/lib/python3.7/site-packages/py/_process/cmdexec.py",start:265191,end:267005,audio:0},{filename:"/lib/python3.7/site-packages/py/_process/killproc.py",start:267005,end:267653,audio:0},{filename:"/lib/python3.7/site-packages/py-1.5.4-py3.7.egg-info/dependency_links.txt",start:267653,end:267654,audio:0},{filename:"/lib/python3.7/site-packages/py-1.5.4-py3.7.egg-info/top_level.txt",start:267654,end:267657,audio:0},{filename:"/lib/python3.7/site-packages/py-1.5.4-py3.7.egg-info/PKG-INFO",start:267657,end:270729,audio:0},{filename:"/lib/python3.7/site-packages/py-1.5.4-py3.7.egg-info/not-zip-safe",start:270729,end:270730,audio:0},{filename:"/lib/python3.7/site-packages/py-1.5.4-py3.7.egg-info/SOURCES.txt",start:270730,end:274285,audio:0}],remote_package_size:157183,package_uuid:"683974fe-563e-4446-8895-6f2d8753a107"})})();