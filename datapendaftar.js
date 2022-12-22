$(document).ready(() => {
 
    const $showData = $('#show-data');
    const $showAyah = $('#show-ayah');
   
    //const $raw = $('pre');
      // get json di endpoint
      $.getJSON('http://localhost/ppsb2/datapendaftar.php', (respon) => {
        // console.log(respon.code);
        // console.log(respon.status);
       
        // mengatur ulang format respon dari json menjadi html
        const markup = respon
          .map(item => `<tr>
          
                  <td width="30" class="id" style="text-align:center;" id="${item.id}" scope="row" id="no">${item.id}</td>   
                  <td width="50" class="nama" id="${item.nama}" scope="row" nama="no">${item.nama}</td>
                  <td width="200" class="ttl" id="${item.ttl}" scope="row" ttl="no">${item.ttl}</td>  
                           
              </tr>`)
          .join('');
        const list = $('<table border="1" class="table" />').html(markup);
        // tampilkan di kolom ke dua
        $showData.html(list);
       
        $('.surat').on('click', function (event) {
          var id = $(event.target).data("nomer");
          $.getJSON(`http://localhost/ppsb2/datapendaftar.php/${id}ppsb&table=ppsb`, function (respon2) {
              console.log(respon2);
              const markup = respon2.data.ayahs
                .map(item => ` <tr style="background-color:#dad3b6;"><td style="white-space: normal;" scope="row">⊙ ${item.text}</td></tr> `)
                .join('');
       
              const list = $('<table class="table"/>').html(markup);
       
              // tampilkan di kolom ke dua
              $showAyah.html(list);
          });
        });
  
      });
     
   
  });
  