(function(global){
  'use strict';
  // Review

  // 문서객체모델 API
  // DOM Lv0, Lv1, Lv2, Lv3, Lv4

  // W3C에서 제정된 DOM API를 사용하여
  // HTML 문서를 JavaScript를 사용하여
  // 객체를 생성하거나, 제거하거나, 조작하는 것을 말한다.

  ////////////////////
  // Node Interface //
  ////////////////////

  // window.document 객체는 노드의 집합

  // 각 노드는 유형이 구분
  // 1 요소노드(ElementNode)
  // 2 속성노드(AttributeNode)
  // 3 텍스트노드(TextNode)
  // 8 주석노드(CommentNode)
  // 문서유형정의노드(DoctypeNode)

  // 노드의 속성
  // DOM Lv0에서 사용되던 오래된 속성은 아래와 같은 방법으로 접근이 가능하다.
  // HTML DOM 방식 [Getter | Setter]
  // .id
  // .title
  // .className
  // 반면 새롭게 등장한 속성들은 XML DOM 방식으로 속성 값을 가져와야 한다.
  // [Getter] .getAttribute(key),
  // [Setter] .setAttribute(key, value)
  // .getAttribute('aria-labelledby');
  // .getAttribute('data-ng-app');

  // --------------------------------------------------------------------------------

  // 문서에서 id 속성으로 객체를 찾는(선택하는) 방법(Method)
  var page, main;
  page = document.getElementById('page');
  main = document.getElementById('main');

  // 문서에서 요소 객체를 요소이름으로 찾는 방법 (집합)
  var headings2, paragraphs;
  headings2 = document.getElementsByTagName('h2');
  paragraphs = document.getElementsByTagName('p');

  // 문서에서 클래스 속성으로 요소를 찾는 방법 (집합)
  var issues, issue_contents;
  issues = document.getElementsByClassName('issue');
  issue_contents = document.getElementsByClassName('issue-content');

  // 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (단수, 노드)
  var issue = document.querySelector('.issue');
  // 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (집합, 노드리스트)
  var all_in_issue = issue.querySelectorAll('*');

  console.log('id 속성으로 찾은 문서 요소 객체');
  console.log('page:', page);
  console.log('main:', main);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('요소(태그)이름으로 찾은 문서 요소 객체들');
  console.log('headings2:', headings2);
  console.log('paragraphs:', paragraphs);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('클래스 속성 이름으로 찾은 문서 요소 객체들');
  console.log('issues:', issues);
  console.log('issue_contents:', issue_contents);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('CSS 선택자로 찾은 문서 요소 객체 또는 객체들');
  console.log('issue:', issue);
  console.log('all_in_issue:', all_in_issue);
}); // (this)

(function(global){
  'use strict';

  var document = global.document,      page,
      main,
      brand,
      slogan,
      issues,
      issue_headlines = [],
      issue_contents = [];

  page   = document.querySelector('#page');
  main   = document.querySelector('#main');
  brand  = page.querySelector('.brand');
  slogan = page.querySelector('.slogan');
  issues = main.querySelectorAll('.issue');

  // for ( var i=0, l=issues.length; i<l; i++ ) {
  //   issue_headlines.push( issues[i].querySelectorAll('.issue-headline') );
  //   issue_contents.push( issues[i].querySelectorAll('.issue-content') );
  // }
  // Depth 1
  for ( var i=0, l=issues.length; i<l; i++ ) {
    var issue = issues[i];
    var _issue_headlines = issue.querySelectorAll('.issue-headline');
    var _issue_contents  = issue.querySelectorAll('.issue-content');
    // Depth 2
    for ( var ii=0, ll=_issue_headlines.length; ii<ll; ii++ ) {
      var _issue_headline = _issue_headlines[ii];
      var _issue_content  = _issue_contents[ii];
      issue_headlines.push(_issue_headline);
      issue_contents.push(_issue_content);
    }
  }

   console.log('issue_headlines:', issue_headlines);
   console.log('issue_contents:', issue_contents);
 
}); //(this)

(function(global){
  'use strict';

  // 동적으로 아래 HTML 구조화를 생성해본다.
  // <div id="page"></div>
  
  // 요소노드를 생성해보자.
  // create Element Node
  // document.createElement()
  var page_div = document.createElement('div');

  // 생성된 요소노드에 속성을 추가해보자.
  // Create Attribute (비효율적임)
  // var page_div_id = document.createAttribute('id');
  // page_div_id.value = 'page';
  // console.log(page_div_id);

  // Add(Set) Attribute
  // NODE.setAttribute(key, value);
  page_div.setAttribute('id', 'page');

  var page_brand = document.createElement('h1');
  page_brand.setAttribute('class', 'brand');

  // create Text Node
  // document.createTextNode()
  var page_brand_text = document.createTextNode('JavaScript Future')

  // 자식노드로 텍스트노드를 요소노드에 추가
  // Append Child
  // ELEMENT_NODE.appendChild(NODE)
  page_brand.appendChild(page_brand_text);

  var page_slogan = document.createElement('p');
  page_slogan.setAttribute('class', 'slogan');

  var page_slogan_text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, in.');

  page_slogan.appendChild(page_slogan_text);

  page_div.appendChild(page_brand);
  page_div.appendChild(page_slogan);

  console.log('page_div: ', page_div);

  var body = document.querySelector('body');

  body.appendChild(page_div);

}); //(this)

(function(global){
  'use strict';

  // 모달 윈도우 생성
  // 버튼 이벤트 핸들링

  // .create-modal-button 요소 변수에 참조
  var body = document.body,
      createDim, 
      createModal,
      createModalLayer,
      create_modal_btn, 
      createModalWindow, 
      createModalContent,
      createModalHeadline,
      createModalCloseButton,
      removeDimModal;

  create_modal_btn = document.querySelector('.create-modal-button');

  createModalWindow = function() {
    createDim();
    createModal();
  };

  // 모달 레이어 제거
  removeDimModal = function() {
    // var modal_window = this.parentNode;
    var modal_window  = document.querySelector('.modal-window');
    var dim_layer     = document.querySelector('.dim');
   
    dim_layer.setAttribute('class', dim_layer.getAttribute('class') + ' out');
    modal_window.setAttribute('class', modal_window.getAttribute('class') + ' out');

    setTimeout(function() {
      dim_layer.parentNode.removeChild(dim_layer);
      modal_window.parentNode.removeChild(modal_window);
    }, 300);
  };

  // dim 레이어를 생성
  createDim = function() { 
    var dim_layer = document.createElement('div');
    dim_layer.setAttribute('class', 'dim');
    body.appendChild(dim_layer);
    dim_layer.onclick = removeDimModal;
  };
  // modal 레이어를 생성 
  createModal = function() { 
    var container = createModalLayer();
    var headline  = createModalHeadline();
    var paragraph = createModalContent();
    var button    = createModalCloseButton();

    container.appendChild(headline);
    container.appendChild(paragraph);
    container.appendChild(button);
    body.appendChild(container);

    // 생성된 버튼에 모달 닫기 이벤트 연결
    button.onclick = removeDimModal;
  };
  // 모달 윈도우 레이어 생성
  createModalLayer = function() {
    var modal_layer = document.createElement('div');
    modal_layer.setAttribute('class', 'modal-window');

    return modal_layer;
  };
  // 모달 헤드라인 생성
  createModalHeadline = function() {
    var headline = document.createElement('h3');
    headline.setAttribute('class', 'modal-headline');

    var headline_text = document.createTextNode('Modal UI Component');
    headline.appendChild(headline_text);

    return headline;
  };
  // 모달 콘텐츠 생성
  createModalContent = function() {
    var contents = document.createElement('p');
    contents.setAttribute('class', 'modal-contents');

    var contents_text = document.createTextNode('Modal Window is Popular Component of Web Design. consectetur hic nesciunt non esse maxime voluptates repudiandae a, placeat deserunt quae?');
    contents.appendChild(contents_text);

    return contents;
  };
  // 모달 클로즈 버튼 생성
  createModalCloseButton = function() {
    var button = document.createElement('button');
    button.setAttribute('type'      , 'button');
    button.setAttribute('class'     , 'modal-close-button');
    button.setAttribute('aria-label', 'Close Modal');

    var button_text = document.createTextNode('x');
    button.appendChild(button_text);

    return button;
  };

  // 버튼 요소 객체에 이벤트 연결
  create_modal_btn.onclick = createModalWindow;    

})(this); //(this)

// DOM API : Insertion + remove
(function(global){
  'use strict';

  // DOM API Standard Method
  // 어떤 노드를 목표가 되는 노드 앞에 삽입한다.
  // insertBefore()
  // target_node.parentNode.insertBefore(insert_node, target_node);

  // Helper(Utility) Function
  function createEl(element_name) {
    if ( typeof element_name !== 'string' ) { throw new Error('인자는 문자열로!'); }
    return document.createElement(element_name);
  }

  // var div   = createEl('div');
  // var ul    = createEl('ul');
  // var li    = createEl('li');
  // var a     = createEl('a');
  // var span  = createEl('span');

  // console.log('div: ', div);
  // console.log('ul: ', ul);
  // console.log('li: ', li);
  // console.log('a: ', a);
  // console.log('span: ', span);
  
  var main        = document.querySelector('#main');
  var main_parent = main.parentNode;
  // var divider     = createEl('hr');

  // main 요소노드 앞에 divider 요소노드를 삽입하자.
  // main_parent.insertBefore(divider, main);

  var issue, divider;
  var issues        = document.querySelectorAll('.issue');
  var issues_count  = issues.length;

  while ( issue = issues[--issues_count] ) {
    if ( issues_count === 0 ) { break; }
    divider = createEl('hr');
    issue.parentNode.insertBefore(divider, issue);
  }

  // for ( var i = 0, l = issues_count; i < l; i++ ) {
  //   if ( i === 0 ) { continue; }
  //   issue = issues[i]
  //   divider = createEl('hr');
  //   issue.parentNode.insertBefore(divider, issue); 
  // }
  
  var remove_divider_button = document.querySelector('.remove-divider-button');

  remove_divider_button.onclick = function() {
    var dividers = document.querySelectorAll('hr');
    var dividers_length = dividers.length;
    for ( var divider, i = 0; i < dividers_length; i++ ) {
      divider = dividers[i]; 
      divider.parentNode.removeChild(divider);      
    }
    this.setAttribute('disabled', 'disabled');
  };

})(this); //

