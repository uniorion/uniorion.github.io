(function(global){
  'use strict';

  // 우리의 목표
  // 문서객체 모델 접근(선택), 탐색, 조작, 이벤트
  
  //-----------------------------------------------------------------
  
  // document {}를 참조
  var document  = global.document; 
  // 잠조된 document {}를 통해 documentElement 객체를 참조
  var html      = document.documentElement;
  var head, body;
  head = document.head;
  body = document.body;

  // 문서에서 <p> 요소의 집합
  // HTML 문서에서 찾은 요소노드의 집합 => 유사 배열
  var p_element = document.getElementsByTagName('p');
  var first_p = p_element.item(0);

  var strong_element = first_p.firstChild;      // <strong> element node
  var last_text_in_first_p = first_p.lastChild; // text node

  // console.log('strong_element:', strong_element);
  // console.log('last_text_in_first_p:', last_text_in_first_p);

  strong_element.parentNode; // <p>
  last_text_in_first_p.parentNode; // <p>

  // 부모 노드에서 자식을 찾을 때
  // .firstChild, .lastChild
  // 자식 노드에서 부모를 찾을 때
  // .parentNode
  // 형제 노드 사이 서로를 찾을 때
  // .nextSibling
  // .previousSibling
  
  console.log( strong_element.nextSibling === last_text_in_first_p );     // true
  console.log( last_text_in_first_p.previousSibling === strong_element ); // true



  function addTitle(node, content) {
    if ( typeof content !== 'string' ) { throw new Error(); }
    if ( node.nodeType !== 1 ) { throw new Error(); }

    // HTML DOM 방식
    node.title = content;
    // XML DOM 방식
    node.setAttribute('title', content);
  }

  function addDataAttr(node, data, value) {
    if ( typeof data !== 'string' ) { throw new Error(); }
    if ( node.nodeType !== 1 ) { throw new Error(); }

    // HTML DOM 방식
    // node.title = content;
    // XML DOM 방식
    node.setAttribute('data-' + data, value);
  }




})(this);