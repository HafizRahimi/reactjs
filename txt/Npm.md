# Npm

[NPM][linkAddress]

[linkAddress]: https://www.npmjs.com/ "npmjs.com"

## Show version Node and NPM:
        node -v
	    npm -v

## **About** Node Package Manager (npm):

- ### Show **Version** of package:
        packageName -v

- ### Show **Version Global** :
	    npm view GlobalPackageName version

- ### Show **List Global** Packages :
	    npm ls --global 

- ### **Ckeck For Update** packages:
        npm outdated

- ### **Update All** packages:
        npm update

- ### **Update a** package:
        npm i packageName@latest

## **Install** package:

- ### **Install All** packages:
        npm i

- ### **Dependencies**:
    	npm install packageName               
    	npm i packageName                     
                  
- ### **DevDependencies**:
    	npm install --save-dev packageName    
    	npm i -D packageName                  

- ### **Global**:
    	npm install -g packageName            
    	npm i -g packageName   

- ### With **version**:
    	npm i packageName@4.43.0           
    	npm i -D packageName@4.43.0           
    	npm i -g packageName@4.43.0           

- ### With version **Latest**:
        npm i packageName@latest
        npm i -D packageName@latest
        npm i -g packageName@latest


## **Uninstall** package:

- ### **Dependencies ro DevDependencies**:
    	npm uninstall packageName     
    	npm un packageName

- ### **Global**:
		npm uninstall -g packageName
    	npm  un -g  packageName       

