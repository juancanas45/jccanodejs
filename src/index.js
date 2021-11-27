const express = require("express"); 
const app = express();

const morgan = require("morgan");

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json());



// settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


// routers
app.use(require("./routes/index"));
app.use(require("./routes/productos"));
app.use(require("./routes/movies"));
app.use(require("./routes/clientes"));
app.use(require("./routes/form"));
app.use(require("./routes/form2"));
app.use(require("./routes/cedad"));




//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Server on port $(4000)');
});
