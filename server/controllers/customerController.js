


// Get Homepage
exports.homepage = async (req, res) => {


        // res.send('Hello World');

        const locals = {
            title: "NodeJs", //
            description: "Free description"
        };
        res.render("index", locals);


}