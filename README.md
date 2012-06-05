# Routil-cookie

Cookie manipulation on req and res

## Example

    var routilCookie = require("routil-cookie"),
        getCookie = routilCookie.getCookie,
        setCookie = routilCookie.setCookie,
        http = require("http")

    http.createServer(function (req, res) {
        var value = getCookie(req, name)

        setCookie(res, name, value, options)
    })