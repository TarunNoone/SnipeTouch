/************************************************************************************
 * Structure of Variables:															*
 *		It a list of:																*
 * 			actionables:															*
 * 				Each actionable has 1st index as type, 2nd index as Title 			*
 * 				and 3rd index as list of data.										*
 * Types used here: 																*
 * 		import: inserts the text at the top of active text field					*
 * 		url: opens url in chromium													*
 * 		apps: opens the app															*
 * 		folder: used only on client-side											*
 ************************************************************************************/

let pyimports = [["import", "PyImports", [
	"import numpy as np\n",
	"import matplotlib.plot as plt\n",
	"import time\n",
	"import random\n"
]]];

let webpages = [["url", "Websites", [
	["YouTube", "youtube.com"], 
	["Google", "google.com"],
	["Microsoft", "microsoft.com"]
]]];
	
let apps = [["apps", "Apps", [
	["Chromium", "chromium"],
	["Visual Studio Code", "code"]
]]];

let pysnips = [["text", "PySnips", [
	"t = int(input())\n",
	"for _ in range(t):\n",
	"for _ in range(1, t+1):\n",
	"for t in range(T):\n",
	"for t in range(1, T+1):\n",
	"n = int(input())\n",
	"(int(s) for s in input().split())",
	"for i in range(n):\n",
	"for i in range(n):\nprint(n)\n",
	"for j in range(m):\n"
]]];

let mainActions = [
	["folder", "Folder", [apps, webpages, pyimports, pysnips]],
	["url", "Websites", [["Wikipedia", "en.wikipedia.org"]]]
];