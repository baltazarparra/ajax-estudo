(function() {
    
    'use strict';
    
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'api.json');
    ajax.send();
    
    console.log('carregando...');

    ajax.addEventListener('readystatechange', function() {
        if(isRequestOk() ) {
            try {
                console.log('Requisição Ok! Status =', ajax.readyState, 'Http Status = ', ajax.status);
                var data = JSON.parse(ajax.responseText);
                console.table(data.demons);                
            } catch(e) {
                console.log(e);
            }
        }
    }, false);
    
    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

})();