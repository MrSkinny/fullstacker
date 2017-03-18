module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "no-underscore-dangle": 0,
        "object-shorthand": 0,
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "no-trailing-spaces": 0,
        "array-bracket-spacing": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "prefer-arrow-callback": 0,
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4]
    }
};
