module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "default": {
          "hover": "rgba(255, 244, 150, 1)",
          "background": "rgba(0, 0, 0, 1)",
          "active": "rgba(203, 255, 152, 1)",
          "warmwhite": "rgba(255, 253, 239, 1)"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "FiveUnits": "80px",
        "Unit": "16px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "SixUnits": "96px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px",
        "Round": "50%"
      },
      "scale": {
        "Large": "144px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "XLarge": "192px",
        "Medium": "96px",
        "XXLarge": "288px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}