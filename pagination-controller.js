module.exports = (app, page) => {
    ​
        app.get('/pages', (req, res) => {
            res.send('Working')
        })
    ​
        app.get('/pagination', (req, res) => {
            console.log(req.body)
            page.find({}, { skip: 0, limit: 30 }).
            exec().then((data, err) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({
                        code: 'failure'
                    })
                } else {
                    console.log(data);
                    res.status(200).json({
                        code: 'success',
                        data: data
                    });
                }
            }).catch(err => {
                res.status(400).json({
                    code: 'failure'
                })
            })
        })
    }    