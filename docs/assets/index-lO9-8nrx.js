(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();var w={exports:{}};(function(m){let o=200,d="";typeof SNOWFLAKES_COUNT<"u"&&(o=SNOWFLAKES_COUNT),typeof BASE_CSS<"u"&&(d=BASE_CSS);let l=null,t=null;function r(){l=document.body.offsetHeight,t=100*l/window.innerHeight}function s(){var n;const e=document.getElementById("snow");o=Number(((n=e==null?void 0:e.dataset)==null?void 0:n.count)||o)}function $(e){e?document.getElementById("snow").style.display="block":document.getElementById("snow").style.display="none"}function C(e=200){e-=1;const n=document.getElementById("snow");n.innerHTML="";for(let i=0;i<e;i++){let a=document.createElement("div");a.className="snowflake",n.appendChild(a)}}function M(){let e=document.getElementById("psjs-css");return e||(e=document.createElement("style"),e.id="psjs-css",document.head.appendChild(e),e)}function b(e){const n=M();n.innerHTML=e,document.head.appendChild(n)}function v(e=100){return Math.floor(Math.random()*e)+1}function O(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}function A(e,n){return Math.random()*(n-e)+e}function I(e=200){let n="snowflake",i=d;for(let a=1;a<e;a++){let c=Math.random()*100,h=Math.random()*10,L=c+h,N=c+h/2,y=A(.3,.8),B=y*t,u=Math.random(),Y=O(10,t/10*3),x=v(t/10*3)*-1,F=Math.random();i+=`
      .${n}:nth-child(${a}) {
        opacity: ${F};
        transform: translate(${c}vw, -10px) scale(${u});
        animation: fall-${a} ${Y}s ${x}s linear infinite;
      }
      @keyframes fall-${a} {
        ${y*100}% {
          transform: translate(${L}vw, ${B}vh) scale(${u});
        }
        to {
          transform: translate(${N}vw, ${t}vh) scale(${u});
        }
      }
    `}b(i)}function p(){r(),s(),I(o),C(o)}window.addEventListener("resize",p),m.exports={createSnow:p,showSnow:$}})(w);var S=w.exports;const g=[`
  Merry Christmas
       ${new Date().getFullYear()}

        ★
      ／&＼
     ／ @ ＼
    ／     ＼
   ／       ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `,`
  Merry Christmas
       ${new Date().getFullYear()}

        ★
      ／&＼
     ／p@i＼
    ／  &  ＼
   ／       ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `,`
  Merry Christmas
       ${new Date().getFullYear()}

        ★
      ／&＼
     ／p@i＼
    ／ ｡&i*＼
   ／   @   ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `,`
  Merry Christmas
       ${new Date().getFullYear()}

        ★
      ／&＼
     ／p@i＼
    ／ ｡&i*＼
   ／i  @  *＼
  ／  @ ** i ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `],H=document.getElementById("ascii-art");let f=0;function E(){H.textContent=g[f],f=(f+1)%g.length}S.createSnow();S.showSnow(!0);E();setInterval(E,1e3);
