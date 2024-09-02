const http = require("http");
http
  .createServer((request, response) => {
    const curDate = new Date();
    const minutes = curDate.getMinutes();
    for (let i = 0; i < minutes; i++) {
      response.write("Elo zelo!\n");
    }
    response.end();
  })
  .listen(1234);
