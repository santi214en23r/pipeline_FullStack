const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/api/products",
  method: "GET"
};

const req = http.request(options, (res) => {
  if (res.statusCode === 403 || res.statusCode === 401) {
    console.log("Test OK, la API protegio la ruta correctamente");
    process.exit(0);
    } else {
    console.log(`Test Failed`);
    process.exit(1);
  }
});

req.on("error", (error) => {
  console.log(`Error en la solicitud: ${error.message}`);
  process.exit(1);
});


//Comentario prueba para ver cambios en el repositorio
req.end();