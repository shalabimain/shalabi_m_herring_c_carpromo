
(()=>{

  const vm = new Vue({
      el: '#car',

      data: {
       text : ""
          
      },

      created : function() {
        console.log("hg");
          this.fetchData();
  },

      methods : {
          fetchData() {
              let targetURL = './includes/connect.php'; // this will be a number (id)

       
              fetch(targetURL) // pass in the one or many query
              .then(res => res.json())
              .then(data => {
                      //this.textData(data[0]);
                      this.text =  data;
                  })
                      .catch(function(error) {
                      console.error(error);
                    
              });
            }
        
            }
  });

})();



