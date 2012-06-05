# Routil-cookie 
[![build status][1]][2]

Cookie manipulation on req and res

## Example

    var routilCookie = require("routil-cookie"),
        getCookie = routilCookie.getCookie,
        setCookie = routilCookie.setCookie,
        http = require("http")

    http.createServer(function (req, res) {
        var value = getCookie(req, name)

        setCookie(res, name, value, options)
        setCookie(res, {
            name: value
        }, options)
    })

## Installation

`npm install routil-cookie`

## Tests

`make test`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/routil-cookie.png
  [2]: http://travis-ci.org/Raynos/routil-cookie