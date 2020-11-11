function postData(url,params){
  return fetch(url,{
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
}

function getData(url,params){
  return fetch(url,{
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  });
}