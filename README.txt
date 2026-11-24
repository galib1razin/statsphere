STATSPHERE – HOW TO USE
1. Host free: go to https://app.netlify.com/drop and drag this whole folder (unzipped) onto the page.
2. Edit your email: open data/config.js in Notepad, change feedbackEmail.
3. Add Drive folder links: open data/courses.js, paste a folder link between the quotes after  drive:
4. Add quiz questions: copy a line in data/quizzes.js. Add topics in data/topics.js. Practice in data/practice.js.
After editing, upload the folder to Netlify again (Deploys > drag folder).

NEW (1st & 4th year): course lists are in data/courses.js (leave drive: "" until the folder is ready; the site shows "Drive link coming soon").
Curriculum page data: data/curriculum.js. New topics/quizzes/mocks: data/new-1-*.js and data/new-4-*.js. New graphs: js/visuals.js.

MATH (KaTeX): math is written as LaTeX inside \( ... \) (inline) or \[ ... \] (display) in data/*.js. In normal JS strings write each backslash twice, e.g. "\\(\\frac{a}{b}\\)", or use a template literal with String.raw. KaTeX files are local in lib/katex/ (no internet needed); js/math.js re-renders math after every page change.
