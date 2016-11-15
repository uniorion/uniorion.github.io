(function(global, Ajax){
  'use strict';

  global.addEventListener('DOMContentLoaded', loadPrevPage);

  function loadPrevPage() {
    var page = global.location.hash.replace(/#!/, '');

    if ( page !== '' ) {
      var button;
      
      switch(page) {
        case 'txt':
          button = buttons[0];
          break;
        case 'html':
          button = buttons[1];
          break;
        case 'xml':
          button = buttons[2];
          break;
        case 'json':
          button = buttons[3];
          break;
        default:
          break;
      }
      requestData.call(button);
    }
  }

  var document = global.document;
  var buttons = document.querySelectorAll(".call-ajax-data");
  var print_el = document.querySelector(".ajax-data-result");
 
  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', requestData);
  });

  function requestData() {
    var ajax        = new Ajax(); 
    var method      = "GET",
        requestUrl  = null,
        async       = true;

    requestUrl = './data/' + (this.classList.item(1)).replace('-', ".");

    ajax.open(method, requestUrl, async);
    ajax.addEventListener('readystatechange', printData.bind(ajax, requestUrl));
    ajax.send();
  }

  function printData(url) {
    url = url.split('.');
    var type = url[url.length - 1];
    if ( this.status === 200 && this.readyState === 4 ) {
      switch(type) {
        case 'txt':
        case 'html':
          print_el.innerHTML = this.responseText;
          break;
        case 'xml':
          // print_el.innerHTML = 'print xml data type';
          var xml_doc = this.responseXML;
          var people = xml_doc.getElementsByTagName('person');
          var html_template = '';
          for ( var i = 0, l = people.length; i < l; i++ ) {
            var person = people[i];
            // var person_name = person.getElementsByTagName('name')[0].firstChild.nodeValue;
            // var person_tel = person.getElementsByTagName('tel')[0].firstChild.nodeValue;
            // var person_name = person.getElementsByTagName('name')[0].firstChild.nodeValue;
            var person_tel = person.querySelector('tel').textContent;
            var person_mail = person.querySelector('mail').textContent;
            var person_name = person.querySelector('name').textContent;
            html_template += '<ul>';
            html_template +=    '<li>' + person_name + '</li>';
            html_template +=    '<li>' + person_mail + '</li>';
            html_template +=    '<li>' + person_tel + '</li>';
            html_template += '</ul>';
          }
          print_el.innerHTML = html_template;
          break;
        case 'json':
          // print_el.innerHTML = this.responseText;
          var txt2json_obj = global.JSON.parse(this.response);
          // var html_template = "";
          //  html_template += "<table>"
          //   html_template +=  "<caption>user info table</caption>"
          //   html_template +=  "<thead>"
          //   html_template +=    "<tr>"
          //   html_template +=      "<th>picture</th>"
          //   html_template +=      "<th>name</th>"
          //   html_template +=      "<th>gender</th>"
          //   html_template +=      "<th>phone</th>"
          //   html_template +=      "<th>registered</th>"
          //   html_template +=    "</tr>"
          //   html_template +=  "</thead>"
          //   html_template +=  "<tbody>"
          var json_html_template = [];
          json_html_template.push(`
            <table>
              <caption>user info table</caption>
              <thead>
                <tr>
                  <th>picture</th>
                  <th>name</th>
                  <th>gender</th>
                  <th>phone</th>
                  <th>registered</th>
                </tr>
              </thead>
              <tbody>
          `);
          txt2json_obj.results.forEach( function(obj){
            json_html_template.push(`
            <tr>
              <td><img src='${obj.picture.thumbnail}'></td>
              <td>${obj.name.first} ${obj.name.last}</td>
              <td>${obj.gender}</td>
              <td>${obj.phone}</td>
              <td>${obj.registered}</td>
            </tr>
            `);
          });
          json_html_template.push(`
              </tbody>
            </table>
          `);

          // html_template +=  "</tbody>"
          // html_template += "</table>"
          // print_el.innerHTML = html_template;
          print_el.innerHTML = json_html_template.join('');
          break;
        default:
          break;
      }
    }
    // page Hash 설정
    global.location.hash = "!" + type; // "!" hashbang
  }

})(this, this.XMLHttpRequest);