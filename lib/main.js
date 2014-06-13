var self = require("sdk/self");

var loadH = "var d=document, s=d.createElement('script'); s.setAttribute('src','https://hypothes.is/embed.js'); d.body.appendChild(s);";


var btn_config = {
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
    if (state.checked) {
      // and inject h into the current tab
      tabs.activeTab.attach({
        contentScript: loadH
      });
    } else {
      // remove h from the current tab
      tabs.activeTab.attach({
        contentScriptFile: self.data.url('destroy.js')
      });
    }
  }
};

var tabs = require("sdk/tabs");

var { ToggleButton } = require("sdk/ui/button/toggle");
var btn;
if (undefined === ToggleButton) {
  btn = require("sdk/widget").Widget(btn_config);
} else {
  btn = ToggleButton(btn_config);
}
