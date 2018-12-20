# Practice Hooks

## Setup

In order to use hooks, you need to change the version of react in the package.json to use version 16.7 alpha

```json
"react": "^16.7.0-alpha.2",
"react-dom": "^16.7.0-alpha.2",
```

```json
{
	"name": "examples",
	"version": "0.1.0",
	"private": true,
	"dependencies": {
		"react": "^16.7.0-alpha.2",
		"react-dom": "^16.7.0-alpha.2",
		"react-scripts": "2.1.1"
	},
	"scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"eslintConfig": {
		"extends": "react-app"
	},
	"browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}
```

## Practice

-   Create a new component that does exactly what the PokeFetcher does but make it a functional component
-   Next Try and convert the Class component to a Functional Component without refering back to the Functional Component you made earlier
