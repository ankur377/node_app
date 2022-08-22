const app = require('./app');

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('Your app is listening on port http://localhost:' + listener.address().port)
})