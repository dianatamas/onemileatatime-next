module.exports = {
    "settings": {
      "import/resolver": {
        "alias": {
          "map": [
            ["~components", "./components"],
            ["~", "./"]
          ],
          "extensions": [ ".js", ".scss", ".json"]
        }
      }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "no-param-reassign": "off"
    },
    "extends": ["airbnb"]
  }