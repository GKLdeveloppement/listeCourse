function Api() {
    function getData(){
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
          console.log(response)
          return response.json();
        });
    }

}

export default Api;
