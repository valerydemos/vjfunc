module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + userid + ":" + (req.query.name || req.body.name)
        };
    }
    else {
        res = {
            status: 400,
            body: "Please " + userid + " pass a name on the query string or in the request body"
        };
    }
    context.done(null, res);
};