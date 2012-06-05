var assert = require("assert"),
    routilCookie = require("../index"),
    setCookie = routilCookie.setCookie,
    getCookie = routilCookie.getCookie,
    sinon = require("sinon")

describe("Unit tests", function () {
    describe("getCookie", function () {
        it("should return null if no headers", function () {
            var value = getCookie({
                headers: {}
            })
            assert.equal(value, null, "value is not null")
        })

        it("should return null if value is undefined", function () {
            var value = getCookie({
                headers: {
                    cookie: ""
                }
            }, "name")
            assert.equal(value, null, "value is not null")
        })

        it("should return the value of the cookie", function () {
            var value = getCookie({
                headers: {
                    cookie: "foo=bar"
                }
            }, "foo")
            assert.equal(value, "bar", "value is not bar")
        })
    })

    describe("setCookie", function () {
        it("should set header to a serialized value", function () {
            var res = createResponse(),
                setHeader = res.setHeader

            setCookie(res, "foo", "bar")

            assert.ok(setHeader.calledOnce, "setHeader was not called")
            assert.ok(setHeader.calledWith("set-cookie", "foo=bar"),
                "setHeader was not called correctly")
        })

        it("should set headers properly with an object", function () {
            var res = createResponse(),
                setHeader = res.setHeader

            setCookie(res, { 
                foo: "bar"
            })

            assert.ok(setHeader.calledOnce, "setHeader was not called")
            assert.ok(setHeader.calledWith("set-cookie", ["foo=bar"]),
                "setHeader was not called correctly")
        })
    })
})

function createResponse() {
    var setHeader = sinon.spy()
    return {
        setHeader: setHeader
    }
}