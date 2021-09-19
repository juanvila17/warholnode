const express = require("express");
const path = require("path");
const bcrypt = require('bcrypt')

const app = express();


app.set("view engine", "ejs");


app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const usuarios = [];

// Define routes
app.get("/", function (req, res) {
  //Render using EJS
  res.render("inicio", {
    title: "Warhol",
  });
});

app.get("/register", function (req, res) {
  res.render("register", {
    title: "register",
  });
});

app.post("/register", async function (req, res) {
  const usuario = req.body;


  usuario.clave = await bcrypt.hash(req.body.clave, 10);

  usuarios.push(usuario);
  console.log(usuarios);

  res.render("login", {
    title: "login",
  });
});

app.get("/login", function (req, res) {
  res.render("login", {
    title: "Iniciar Sesion",
  });
});

app.post("/login", async function (req, res) {
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    let resultado = false;
    let usuarioObj = null;

    usuarios.forEach(function(usr){
        if(usr.usuario === usuario){
            usuarioObj = usr;
            
        }
    });
    
    if(usuarioObj !== null) {
        resultado = await bcrypt.compare(clave, usuarioObj.clave);
    }

    if(resultado){
      res.redirect('/');
      return;
    }

  });


const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
