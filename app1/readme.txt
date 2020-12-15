# Sample app developed with the modern tooling using npm packages and webpack bundler



# Source code is present in the 'src' folder
# index.html file is the base HTML file
# index.js is the main js file. You can create more files, the final code will be imported from index.js



# value.json is the json file generated from the app

# Run `npm install` to install all the dependencies
# Run `npm run server` which will bundle all the files and serve them on the specified port (default is 8001)


# 1. drawFromData - 
    if the config file is a JS object
    `tag` is the HTML tag where the graph will be rendered
    drawFromData(object, "#tag")   // <div id="tag"></div>

# 2. drawFromPath - 
    if the config file is a JSON (provide the path of the file)
    `tag` is the HTML tag where the graph will be rendered
    drawFromPath('./value.json', "#tag")   // <div id="tag"></div>

# note :-
    webpack automatically converts JSON file 'imports' into JS object, 
    hence you can only use drawFromData when importing JSON files 