# This sample app shows how to use btp-fn-plotter in plain html file without any tooling setup

# just grab the cdn for the npm package `btp-fn-plotter` 
# `https://unpkg.com/btp-fn-plotter@1.0.7/dist/main.js`



# include in the script and call any of the two functions
# 1. drawFromData - 
    if the config file is a JS object
    `tag` is the HTML tag where the graph will be rendered
    drawFromData(object, "#tag")   // <div id="tag"></div>

# 2. drawFromPath - 
    if the config file is a JSON (provide the path of the file)
    `tag` is the HTML tag where the graph will be rendered
    drawFromPath('./value.json', "#tag")   // <div id="tag"></div>