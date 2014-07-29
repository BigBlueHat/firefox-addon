var self = require("sdk/self");
var tabs = require("sdk/tabs");
var { ToggleButton } = require("sdk/ui/button/toggle");
var btn_config = {};
var btn;

var loadH = "var d=document, s=d.createElement('script'); s.setAttribute('src','https://hypothes.is/embed.js'); d.body.appendChild(s);";

function tabToggle(tab) {
  if (btn.state('window').checked) {
    tab.attach({
      contentScript: loadH
    });
  } else {
    tab.attach({
      contentScriptFile: self.data.url('destroy.js')
    });
  }
}

btn_config = {
  id: "hypothesis",
  label: "Annotate",
  contentURL: "http://hypothes.is/wp-content/uploads/2012/12/favicon1.ico",
  icon: {
    "18": './18.png',
    "32": './32.png',
    "36": './36.png',
    "64": './64.png'
  },
  onClick: function(state) {
    tabToggle(tabs.activeTab)
  }
};

if (undefined === ToggleButton) {
  btn = require("sdk/widget").Widget(btn_config);
} else {
  btn = ToggleButton(btn_config);
}

tabs.on('open', function(tab) {
  tab.on('activate', tabToggle);
  tab.on('pageshow', tabToggle);
});
