var elem = document.getElementById("message");
var content = document.getElementById("content");
var hashs = {};
var searchs = {};

function userinfo_call(){
    var bearer = 'Bearer ' + hashs.access_token;
    return do_post('https://inct4j07g.auth.ap-northeast-1.amazoncognito.com/oauth2/userInfo', [], bearer )
    .then(result =>{
        if( result.error ){
            elem.innerText = 'userinfo_call Error:' + result.error;
            return;
        }
        elem.innerText = 'userinfo_call OK';
        content.innerText = JSON.stringify(result);
    })
    .catch(error=>{
        elem.innerText = 'userinfo_call Error:' + error;
    });
}

function do_post(url, body, authorize ) {
    const headers = new Headers( { "Content-type" : "application/json", 'Authorization': authorize } );
    return fetch(url, {
        method : 'POST',
        body : JSON.stringify(body),
        headers: headers
    })
    .then((response) => {
        return response.json();
    });
}

function do_post_urlencode(url, params, authorize) {
    var data = new URLSearchParams();
    for( var name in params )
        data.append(name, params[name]);

    const headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization' : authorize } );
    return fetch(url, {
        method : 'POST',
        body : data,
        headers: headers
    })
    .then((response) => {
        return response.json();
    });
}

function proc_load() {
    var content = document.getElementById("hashs");
    hashs = parse_url_vars(location.hash);
    content.innerText = 'hashs=' + JSON.stringify(hashs);

    content = document.getElementById("searchs");
    searchs = parse_url_vars(location.search);
    content.innerText = 'querys=' + JSON.stringify(searchs);
}

function parse_url_vars(param){
    if( param.length < 1 )
        return {};

    var hash = param;
    if( hash.slice(0, 1) == '#' || hash.slice(0, 1) == '?' )
        hash = hash.slice(1);
    var hashs  = hash.split('&');
    var vars = {};
    for( var i = 0 ; i < hashs.length ; i++ ){
        var array = hashs[i].split('=');
        vars[array[0]] = array[1];
    }

    return vars;
}