 (function(){
  "use strict";

  var Routes = {
    Root: require("./Root"),
    Weekly: require("./Weekly"),
    Login: require("./Login"),
    Signup: require("./Signup"),
    Logout: require("./Logout"),
    Setup: require("./Setup"),
    Event: require("./Event")
  };

  // route, function, mongo, auth level, methods
  // auth level: 0 = not required, 1 = required
  var routeList = [
    ["/signup",          Routes.Signup,       1, 0, ["get", "post"          ]],
    ["/",                Routes.Root,         0, 0, ["get"                  ]],
    ["/weekly/:offset?", Routes.Weekly,       1, 1, ["get"                  ]],
    ["/login",           Routes.Login,        1, 0, ["get", "post"          ]],
    ["/logout",          Routes.Logout,       0, 1, ["get"                  ]],
    ['/setup',           Routes.Setup,        1, 1, ["get", "post"          ]],
    ["/event/:eventId", Routes.Event,        1, 1, [       "post", "delete"]]
  ];

  exports.list = routeList;
}());
