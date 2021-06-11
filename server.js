const path  = require('path');
const express = require('express');

const app = express();

app.user(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function (){
    console.log('listeningon port: ', server.address().port);
})

/* este servidor está entregando arquivos da pasta dist, que é a pasta onde fica o build da aplicação depois de compilada. Também repare que uso uma variável de ambiente para a porta, esta é uma exigência da Heroku, pois lá as portas são dinâmicas.*/