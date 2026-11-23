const $ = s => document.querySelector(s);
const app = $("#app");
document.getElementById("yr").textContent = new Date().getFullYear();
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");

const driveId = u => { const m = (u||"").match(/folders\/([\w-]+)/) || (u||"").match(/[?&]id=([\w-]+)/); return m ? m[1] : null; };
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
let timerHandle = null;

const routes = {
  home, library, topics, quizzes, practice, about,
};

function router() {
  clearInterval(timerHandle);
  const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
  const fn = routes[parts[0]] || home;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + parts[0]));
  $("#nav").classList.remove("open");
  fn(parts.slice(1));
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", router);
router();

/* ---------- HOME ---------- */
function home() {
  app.innerHTML = `
  <section class="hero">
    <div class="by">${SITE.by}</div>
    <h1>Stat<span>Sphere</span></h1>
    <p>${SITE.tagline}</p>
    <a class="btn" href="#/library">Browse Resources</a><a class="btn alt" href="#/quizzes">Take a Quiz</a>
  </section>
  <div class="grid">
    <a class="card" href="#/library"><div class="ico">📚</div><h3>Resource Library</h3><p>Notes, slides, books and past questions for every course, organised by year and semester.</p></a>
    <a class="card" href="#/topics"><div class="ico">💡</div><h3>Topic Explanations</h3><p>Clear, exam-focused explanations with formulas and examples.</p></a>
    <a class="card" href="#/quizzes"><div class="ico">✅</div><h3>Quizzes &amp; MCQs</h3><p>Auto-graded quizzes with instant score and explanations.</p></a>
    <a class="card" href="#/practice"><div class="ico">📝</div><h3>Practice &amp; Mock Tests</h3><p>Practice problems with hide/show answers and timed mock tests.</p></a>
    <a class="card" href="#/about"><div class="ico">👤</div><h3>About &amp; Feedback</h3><p>Who made this, and how to send suggestions.</p></a>
  </div>`;
}

/* ---------- LIBRARY ---------- */
function library(p) {
  if (p[0]) return libSemester(p[0], p[1]);
  let h = `<h1>📚 Resource Library</h1><p>Choose your year and semester. All files are stored in Google Drive and open in a new tab.</p>`;
  LIBRARY.forEach(y => {
    h += `<h2>${y.year}</h2><div class="grid">` + y.semesters.map(s =>
      `<a class="card" href="#/library/${s.code}"><span class="tag">Semester ${s.code}</span><h3>${s.courses.length} items</h3><p>${s.courses.filter(c=>!/question|previous|tables/i.test(c.name)).map(c=>esc(c.name)).slice(0,3).join(", ")}…</p></a>`).join("") + `</div>`;
  });
  h += `<a class="btn alt" target="_blank" rel="noopener" href="${SITE.driveRoot}">Open the full Drive folder ↗</a>`;
  app.innerHTML = h;
}
function libSemester(code, ci) {
  let sem, yr;
  LIBRARY.forEach(y => y.semesters.forEach(s => { if (s.code === code) { sem = s; yr = y; } }));
  if (!sem) return library([]);
  if (ci !== undefined && sem.courses[ci]) {
    const c = sem.courses[ci], link = c.drive || sem.drive || SITE.driveRoot, id = driveId(c.drive);
    app.innerHTML = `<div class="crumb"><a href="#/library">Library</a> › <a href="#/library/${code}">${code}</a> › ${esc(c.name)}</div>
      <h1>${esc(c.name)}</h1>${c.note?`<p>${esc(c.note)}</p>`:""}
      ${c.drive ? "" : `<div class="note">This course has no direct folder link yet, so the button opens the main Drive folder. Open "${esc(sem.folder)}" there and find this course.</div>`}
      <a class="btn" target="_blank" rel="noopener" href="${link}">Open in Google Drive ↗</a>
      ${id ? `<iframe class="drive" src="https://drive.google.com/embeddedfolderview?id=${id}#list"></iframe>` : ""}`;
    return;
  }
  app.innerHTML = `<div class="crumb"><a href="#/library">Library</a> › ${yr.year} › ${code}</div><h1>Semester ${code}</h1>
    <div class="grid">${sem.courses.map((c,i)=>`<a class="card" href="#/library/${code}/${i}"><h3>${esc(c.name)}</h3><p>${c.drive?"Folder linked ✓":"Open materials"}</p></a>`).join("")}</div>
    <a class="btn alt" target="_blank" rel="noopener" href="${sem.drive||SITE.driveRoot}">Open ${esc(sem.folder)} in Drive ↗</a>`;
}

/* ---------- TOPICS ---------- */
function topics(p) {
  if (p[0]) {
    const s = TOPICS.find(x => x.id === p[0]); if (!s) return topics([]);
    app.innerHTML = `<div class="crumb"><a href="#/topics">Topics</a> › ${s.name}</div><h1>${s.name}</h1>
      <input class="search" id="ts" placeholder="Search in this subject…">
      <div id="tl">${s.topics.map((t,i)=>`<details class="tp" ${i===0?"open":""}><summary>${t.title}</summary>${t.body}</details>`).join("")}</div>`;
    $("#ts").oninput = e => { const v = e.target.value.toLowerCase(); document.querySelectorAll(".tp").forEach(d => { const m = d.textContent.toLowerCase().includes(v); d.style.display = m ? "" : "none"; if (v && m) d.open = true; }); };
    return;
  }
  app.innerHTML = `<h1>💡 Topic Explanations</h1><p>Pick a subject. More topics are added regularly.</p>
    <div class="grid">${TOPICS.map(s=>`<a class="card" href="#/topics/${s.id}"><h3>${s.name}</h3><p>${s.topics.length} topics</p></a>`).join("")}</div>`;
}

/* ---------- QUIZZES ---------- */
function quizzes(p) {
  if (p[0] === "mock") return mock(p[1]);
  if (p[0]) return runQuiz(QUIZZES.find(x => x.id === p[0]));
  app.innerHTML = `<h1>✅ Quizzes &amp; MCQs</h1><p>Choose a subject. You get your score and an explanation for every answer.</p>
    <div class="grid">${QUIZZES.map(s=>`<a class="card" href="#/quizzes/${s.id}"><h3>${s.name}</h3><p>${s.questions.length} questions</p></a>`).join("")}</div>
    <h2>⏱ Mock Tests</h2><p>Timed tests with 10 random questions (20 minutes).</p>
    <div class="grid">${QUIZZES.map(s=>`<a class="card" href="#/quizzes/mock/${s.id}"><h3>Mock: ${s.name}</h3></a>`).join("")}
    <a class="card" href="#/quizzes/mock/all"><h3>Mock: Mixed</h3><p>Random from all subjects</p></a></div>`;
}
function mock(id) {
  let qs = id === "all" ? QUIZZES.flatMap(s => s.questions) : (QUIZZES.find(x => x.id === id) || {questions:[]}).questions;
  const name = id === "all" ? "Mixed Mock Test" : "Mock Test";
  runQuiz({ name, questions: shuffle(qs).slice(0, 10) }, 20 * 60);
}
function runQuiz(s, seconds) {
  if (!s) return quizzes([]);
  const qs = shuffle(s.questions), ans = {};
  let h = `<div class="crumb"><a href="#/quizzes">Quizzes</a> › ${s.name}</div><h1>${s.name}</h1>${seconds?`<div class="timer" id="tm"></div>`:""}`;
  qs.forEach((q, i) => { h += `<div class="q" data-i="${i}"><p class="t">${i+1}. ${q.q}</p>${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join("")}<div class="exp"></div></div>`; });
  h += `<button class="btn" id="sub">Submit &amp; see score</button><div id="res"></div>`;
  app.innerHTML = h;
  let done = false;
  app.querySelectorAll(".q").forEach(box => box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (done) return; box.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); ans[box.dataset.i] = +b.dataset.j; }));
  const finish = () => {
    if (done) return; done = true; clearInterval(timerHandle); let score = 0;
    app.querySelectorAll(".q").forEach(box => { const i = +box.dataset.i, q = qs[i], opts = box.querySelectorAll(".opt");
      opts[q.a].classList.add("right");
      if (ans[i] === q.a) score++; else if (ans[i] !== undefined) opts[ans[i]].classList.add("wrong");
      const e = box.querySelector(".exp"); e.classList.add("show"); e.innerHTML = (ans[i]===undefined?"<b>Not answered.</b> ":"") + "<b>Explanation:</b> " + q.e; });
    const pct = Math.round(100 * score / qs.length);
    $("#sub").style.display = "none";
    $("#res").innerHTML = `<div class="score">Your score: <b>${score} / ${qs.length}</b> (${pct}%) — ${pct>=80?"Excellent! 🎉":pct>=50?"Good, keep practising 👍":"Review the topics and try again 📖"}</div>
      <p><button class="btn" onclick="router()">Try again</button><a class="btn alt" href="#/topics">Review topics</a></p>`;
    $("#res").scrollIntoView({behavior:"smooth"});
  };
  $("#sub").onclick = finish;
  if (seconds) { let t = seconds; const tick = () => { $("#tm").textContent = "⏱ " + Math.floor(t/60) + ":" + String(t%60).padStart(2,"0"); if (t-- <= 0) finish(); }; tick(); timerHandle = setInterval(tick, 1000); }
}

/* ---------- PRACTICE ---------- */
function practice(p) {
  if (p[0]) {
    const s = PRACTICE.find(x => x.id === p[0]); if (!s) return practice([]);
    app.innerHTML = `<div class="crumb"><a href="#/practice">Practice</a> › ${s.name}</div><h1>${s.name} – Practice</h1><p>Try each problem on paper first, then reveal the answer.</p>
      ${s.items.map((it,i)=>`<div class="q"><p class="t">Q${i+1}. ${it.q}</p><details><summary>Show / hide answer</summary><p>${it.a}</p></details></div>`).join("")}
      <a class="btn" href="#/quizzes/${s.id}">Take the ${s.name} quiz</a>`;
    return;
  }
  app.innerHTML = `<h1>📝 Practice &amp; Self-Assessment</h1><p>Practice problems with hidden answers, plus timed mock tests.</p>
    <div class="grid">${PRACTICE.map(s=>`<a class="card" href="#/practice/${s.id}"><h3>${s.name}</h3><p>${s.items.length} problems</p></a>`).join("")}</div>
    <a class="btn" href="#/quizzes">Go to mock tests ⏱</a>`;
}

/* ---------- ABOUT ---------- */
function about() {
  const a = SITE.about, subj = encodeURIComponent("StatSphere feedback"), mail = `mailto:${SITE.feedbackEmail}?subject=${subj}`;
  app.innerHTML = `<h1>About StatSphere</h1>
   <div class="panel"><p>StatSphere is a free academic learning platform made for Statistics students of SUST. It brings notes, past questions, explanations, quizzes and practice together in one place.</p></div>
   <div class="panel"><h3>👤 ${a.name}</h3><p>${a.dept}<br>${a.level}<br>${a.uni}</p></div>
   <div class="panel"><h3>💬 Feedback</h3><p>Found a mistake or want a topic added? Tell us!</p>
    <a class="btn" href="${mail}">✉ Send feedback by email</a>
    ${SITE.feedbackForm?`<a class="btn alt" target="_blank" rel="noopener" href="${SITE.feedbackForm}">Open feedback form ↗</a>`:""}</div>`;
}
