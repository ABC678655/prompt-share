/* 静态站渐进增强：复制 + 灯箱（没有 JS 也能正常浏览） */
(function(){
  function toast(m){var t=document.getElementById('toast');if(!t)return;t.textContent=m;t.style.display='block';
    clearTimeout(t._t);t._t=setTimeout(function(){t.style.display='none';},1600);}
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-copy]');
    if(b){
      var el=document.getElementById(b.getAttribute('data-copy'));
      if(!el)return;
      var text=el.textContent;
      var done=function(){toast('提示词已复制');};
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done,function(){toast('复制失败，请手动选择');});}
      else{var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();
        try{document.execCommand('copy');done();}catch(err){toast('复制失败，请手动选择');}ta.remove();}
    }
  });
})();
