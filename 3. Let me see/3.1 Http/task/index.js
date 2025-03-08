const http = require('http');



function getEloZelo(){  
    const currentDate = new Date()
    const minutes = currentDate.getMinutes()
    
    const eloZelo = Array(minutes).fill('Elo Zelo').join('\n');
    
    return eloZelo;
    }


http.createServer((req, res) => {
    res.write(getEloZelo());
    res.end()
}).listen(1234);