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
<<<<<<< HEAD
app.use(require("./routes/cedad"));
=======
app.use(require("./routes/dias"));
>>>>>>> 9b299708918e7cb0889a3a00efb97a9f056b7433




//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Server on port $(4000)');
});
