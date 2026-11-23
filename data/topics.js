/* ============ TOPIC EXPLANATIONS ============
   To add a topic: copy one { title, body } block inside a subject and edit it.
   body is simple HTML:  <p>, <ul><li>, <div class="formula">, <div class="note">
   To add a new subject: copy a whole { id, name, topics:[...] } block.
*/
const TOPICS = [
{ id:"stoch", name:"Stochastic Processes", topics:[
 { title:"What is a Stochastic Process?", body:`
  <p>A <b>stochastic process</b> is a collection of random variables {X(t), t ∈ T} defined on the same probability space, indexed by a parameter t (usually time). Each X(t) takes values in the <b>state space</b> S.</p>
  <ul><li><b>Discrete time, discrete state:</b> e.g. a Markov chain (daily weather: sunny/rainy).</li>
  <li><b>Continuous time, discrete state:</b> e.g. Poisson process (number of calls by time t).</li>
  <li><b>Continuous time, continuous state:</b> e.g. Brownian motion.</li></ul>
  <div class="note">Exam tip: always identify the index set T and state space S first. This classifies the process.</div>`},
 { title:"Markov Chains: basics", body:`
  <p>A discrete-time process {Xₙ} is a <b>Markov chain</b> if the future depends on the past only through the present (Markov property):</p>
  <div class="formula">P(Xₙ₊₁ = j | Xₙ = i, Xₙ₋₁, …, X₀) = P(Xₙ₊₁ = j | Xₙ = i) = pᵢⱼ</div>
  <p>The one-step <b>transition matrix</b> P = [pᵢⱼ] has non-negative entries and every row sums to 1 (a stochastic matrix).</p>
  <p><b>Chapman–Kolmogorov equations:</b></p>
  <div class="formula">pᵢⱼ⁽ⁿ⁺ᵐ⁾ = Σₖ pᵢₖ⁽ⁿ⁾ pₖⱼ⁽ᵐ⁾  &nbsp;⇒&nbsp; P⁽ⁿ⁾ = Pⁿ</div>
  <p>If the initial distribution is the row vector π₀, then the distribution at time n is π₀Pⁿ.</p>`},
 { title:"Classification of States", body:`
  <ul>
  <li><b>Accessible:</b> j is accessible from i if pᵢⱼ⁽ⁿ⁾ &gt; 0 for some n ≥ 0. If i and j are accessible from each other they <b>communicate</b>.</li>
  <li><b>Irreducible chain:</b> all states communicate (one class).</li>
  <li><b>Period</b> of i: d(i) = gcd{n : pᵢᵢ⁽ⁿ⁾ &gt; 0}. If d = 1 the state is <b>aperiodic</b>.</li>
  <li><b>Recurrent</b> state: return probability fᵢᵢ = 1. <b>Transient</b>: fᵢᵢ &lt; 1.</li>
  <li>Recurrent iff Σₙ pᵢᵢ⁽ⁿ⁾ = ∞; transient iff the sum is finite.</li>
  <li><b>Positive recurrent</b>: mean return time μᵢ &lt; ∞. <b>Null recurrent</b>: μᵢ = ∞.</li>
  <li><b>Absorbing</b> state: pᵢᵢ = 1.</li></ul>
  <div class="note">Recurrence, transience and period are class properties: all states in one communicating class share them. A finite irreducible chain is always positive recurrent.</div>`},
 { title:"Stationary Distribution", body:`
  <p>A probability vector π is <b>stationary</b> if it does not change after one step:</p>
  <div class="formula">π = πP, &nbsp; Σᵢ πᵢ = 1</div>
  <p>For an irreducible, aperiodic, positive recurrent chain, the stationary distribution is unique and is also the <b>limiting distribution</b>: pᵢⱼ⁽ⁿ⁾ → πⱼ = 1/μⱼ as n → ∞.</p>
  <p><b>Example:</b> P = [[0.7, 0.3],[0.4, 0.6]]. Solve π₁ = 0.7π₁ + 0.4π₂ ⇒ 0.3π₁ = 0.4π₂ ⇒ π₁ : π₂ = 4 : 3. So π = (4/7, 3/7).</p>`},
 { title:"Poisson Process", body:`
  <p>A counting process {N(t), t ≥ 0} is a <b>Poisson process with rate λ</b> if:</p>
  <ul><li>N(0) = 0;</li><li>it has independent increments;</li><li>the number of events in any interval of length t is Poisson(λt).</li></ul>
  <div class="formula">P(N(t) = n) = e^(−λt) (λt)ⁿ / n!,&nbsp; E[N(t)] = Var[N(t)] = λt</div>
  <p><b>Inter-arrival times</b> are i.i.d. Exponential(λ) with mean 1/λ. The time of the n-th event Sₙ follows Gamma(n, λ).</p>
  <p><b>Superposition:</b> sum of independent Poisson processes with rates λ₁, λ₂ is Poisson with rate λ₁+λ₂. <b>Thinning:</b> if each event is kept with probability p, the kept events form a Poisson process with rate λp.</p>
  <div class="note">Memoryless property: P(T &gt; s+t | T &gt; s) = P(T &gt; t) for exponential T.</div>`},
 { title:"Birth–Death Processes & Queues", body:`
  <p>A <b>birth–death process</b> moves only to neighbouring states: n → n+1 at rate λₙ (birth) and n → n−1 at rate μₙ (death).</p>
  <p>Balance equations give the stationary distribution:</p>
  <div class="formula">πₙ = π₀ · (λ₀λ₁…λₙ₋₁) / (μ₁μ₂…μₙ)</div>
  <p><b>M/M/1 queue</b> (arrival rate λ, service rate μ, ρ = λ/μ &lt; 1):</p>
  <div class="formula">πₙ = (1 − ρ)ρⁿ,&nbsp; L = ρ/(1−ρ),&nbsp; W = 1/(μ−λ),&nbsp; Lq = ρ²/(1−ρ)</div>
  <p>Little's law: L = λW.</p>`},
 { title:"Branching Process & Gambler's Ruin", body:`
  <p><b>Gambler's ruin:</b> start with i units, win 1 w.p. p, lose 1 w.p. q = 1−p, stop at 0 or N. Probability of reaching N:</p>
  <div class="formula">p = ½: Pᵢ = i/N &nbsp;&nbsp; p ≠ ½: Pᵢ = (1 − (q/p)ⁱ) / (1 − (q/p)ᴺ)</div>
  <p><b>Galton–Watson branching process:</b> each individual produces ξ offspring independently with mean m = E[ξ]. The population dies out with probability 1 if m ≤ 1. If m &gt; 1, the extinction probability is the smallest root in [0,1] of s = G(s), where G is the probability generating function of ξ.</p>`}
]},
{ id:"inf", name:"Statistical Inference", topics:[
 { title:"Estimation: Properties of Good Estimators", body:`
  <ul><li><b>Unbiased:</b> E[θ̂] = θ.</li>
  <li><b>Consistent:</b> θ̂ₙ → θ in probability as n → ∞.</li>
  <li><b>Efficient:</b> smallest variance among unbiased estimators (attains the Cramér–Rao lower bound).</li>
  <li><b>Sufficient:</b> contains all information about θ in the sample. <i>Factorization theorem:</i> f(x;θ) = g(T(x);θ)·h(x).</li></ul>
  <div class="formula">Cramér–Rao: Var(θ̂) ≥ 1 / (n I(θ)),&nbsp; I(θ) = E[(∂ ln f/∂θ)²]</div>
  <p>Mean squared error: MSE(θ̂) = Var(θ̂) + Bias(θ̂)².</p>`},
 { title:"Maximum Likelihood Estimation (MLE)", body:`
  <p>The MLE maximizes the likelihood L(θ) = Πf(xᵢ;θ), usually by solving d ln L/dθ = 0.</p>
  <p><b>Example (Exponential with mean 1/λ):</b> ln L = n ln λ − λΣxᵢ ⇒ λ̂ = n/Σxᵢ = 1/x̄.</p>
  <p><b>Example (Normal):</b> μ̂ = x̄, σ̂² = (1/n)Σ(xᵢ − x̄)² (biased; the unbiased version divides by n−1).</p>
  <div class="note">Invariance: if θ̂ is the MLE of θ then g(θ̂) is the MLE of g(θ). Under regularity conditions the MLE is consistent and asymptotically Normal with variance 1/(nI(θ)).</div>`},
 { title:"Hypothesis Testing Basics", body:`
  <ul><li><b>Type I error (α):</b> reject H₀ when it is true.</li>
  <li><b>Type II error (β):</b> accept H₀ when it is false.</li>
  <li><b>Power</b> = 1 − β.</li>
  <li><b>p-value:</b> probability, under H₀, of a result at least as extreme as observed. Reject H₀ if p &lt; α.</li></ul>
  <p><b>Neyman–Pearson Lemma:</b> for simple H₀: θ=θ₀ vs H₁: θ=θ₁, the most powerful test of size α rejects when</p>
  <div class="formula">L(θ₁)/L(θ₀) &gt; k</div>
  <p><b>Likelihood Ratio Test:</b> Λ = sup_{H₀} L / sup L. Under H₀, −2 ln Λ → χ² with df = difference in number of free parameters.</p>`},
 { title:"Common Tests (z, t, χ², F)", body:`
  <ul>
  <li><b>z-test</b> for mean, σ known: z = (x̄ − μ₀)/(σ/√n).</li>
  <li><b>t-test</b> for mean, σ unknown: t = (x̄ − μ₀)/(s/√n), df = n−1.</li>
  <li><b>Two-sample t</b> (equal variances): t = (x̄₁ − x̄₂)/(sₚ√(1/n₁+1/n₂)), df = n₁+n₂−2.</li>
  <li><b>χ² test for variance:</b> (n−1)s²/σ₀² ~ χ²ₙ₋₁.</li>
  <li><b>F-test</b> for equality of variances: F = s₁²/s₂² ~ F(n₁−1, n₂−1).</li>
  <li><b>χ² goodness of fit:</b> Σ(O−E)²/E, df = k − 1 − (number of estimated parameters).</li></ul>`},
 { title:"Confidence Intervals", body:`
  <p>A 100(1−α)% confidence interval for μ (σ unknown):</p>
  <div class="formula">x̄ ± t(α/2, n−1) · s/√n</div>
  <p>Interpretation: if we repeated the sampling many times, about 100(1−α)% of such intervals would contain the true μ. It is <b>not</b> "the probability that μ is in this particular interval".</p>
  <p>For a proportion: p̂ ± z(α/2)√(p̂(1−p̂)/n). For variance: [(n−1)s²/χ²(α/2), (n−1)s²/χ²(1−α/2)].</p>`}
]},
{ id:"reg", name:"Regression Analysis", topics:[
 { title:"Simple Linear Regression", body:`
  <p>Model: yᵢ = β₀ + β₁xᵢ + εᵢ, with εᵢ ~ (0, σ²) independent.</p>
  <p>Least squares estimates minimise Σ(yᵢ − β₀ − β₁xᵢ)²:</p>
  <div class="formula">β̂₁ = Sxy/Sxx = Σ(xᵢ−x̄)(yᵢ−ȳ)/Σ(xᵢ−x̄)²,&nbsp; β̂₀ = ȳ − β̂₁x̄</div>
  <p>Unbiased estimate of variance: σ̂² = MSE = SSE/(n−2). Var(β̂₁) = σ²/Sxx.</p>
  <p><b>Gauss–Markov:</b> OLS estimators are the Best Linear Unbiased Estimators (BLUE) under the assumptions of zero mean, constant variance and uncorrelated errors.</p>`},
 { title:"ANOVA and R²", body:`
  <div class="formula">SST = SSR + SSE &nbsp;&nbsp; R² = SSR/SST = 1 − SSE/SST</div>
  <p>F-test for the regression (simple case): F = MSR/MSE ~ F(1, n−2) under H₀: β₁ = 0, and F = t² for the slope.</p>
  <p>R² is the proportion of variability in y explained by the model. <b>Adjusted R²</b> = 1 − (SSE/(n−p−1))/(SST/(n−1)) penalises extra predictors; R² never decreases when adding variables, adjusted R² can.</p>`},
 { title:"Multiple Regression in Matrix Form", body:`
  <div class="formula">y = Xβ + ε &nbsp;⇒&nbsp; β̂ = (XᵀX)⁻¹Xᵀy, &nbsp; Var(β̂) = σ²(XᵀX)⁻¹</div>
  <p>Hat matrix H = X(XᵀX)⁻¹Xᵀ gives fitted values ŷ = Hy and residuals e = (I − H)y. H is symmetric and idempotent; trace(H) = p+1.</p>
  <p>Test for a single coefficient: t = β̂ⱼ / se(β̂ⱼ) with df = n − p − 1.</p>`},
 { title:"Checking Assumptions & Problems", body:`
  <ul>
  <li><b>Non-constant variance (heteroscedasticity):</b> residual-vs-fitted plot funnels out; fix with transformation or weighted least squares.</li>
  <li><b>Autocorrelation:</b> Durbin–Watson statistic d ≈ 2(1−r); d near 2 means no first-order autocorrelation.</li>
  <li><b>Multicollinearity:</b> predictors highly correlated. Detect with VIF; VIFⱼ = 1/(1−Rⱼ²), values above 10 are a concern.</li>
  <li><b>Non-normal errors:</b> check Q–Q plot.</li>
  <li><b>Outliers / influential points:</b> studentised residuals, leverage hᵢᵢ, Cook's distance.</li></ul>`}
]},
{ id:"real", name:"Real Analysis", topics:[
 { title:"Supremum, Infimum & Completeness", body:`
  <p>For a non-empty set S ⊂ ℝ bounded above, the <b>supremum</b> sup S is the least upper bound. The <b>Completeness Axiom</b> says every non-empty set bounded above has a supremum in ℝ (this is what separates ℝ from ℚ).</p>
  <p><b>Characterisation:</b> s = sup S iff s is an upper bound and for every ε &gt; 0 there is x ∈ S with x &gt; s − ε.</p>
  <p><b>Archimedean property:</b> for any x ∈ ℝ there is n ∈ ℕ with n &gt; x. Hence ℚ is dense in ℝ.</p>`},
 { title:"Sequences and Convergence", body:`
  <p>aₙ → L if for every ε &gt; 0 there exists N such that |aₙ − L| &lt; ε for all n ≥ N.</p>
  <ul><li>Convergent sequences are bounded and have unique limits.</li>
  <li><b>Monotone Convergence Theorem:</b> a bounded monotone sequence converges.</li>
  <li><b>Bolzano–Weierstrass:</b> every bounded sequence has a convergent subsequence.</li>
  <li><b>Cauchy criterion:</b> a sequence converges iff it is Cauchy (|aₙ − aₘ| &lt; ε for n,m ≥ N).</li>
  <li><b>Squeeze theorem:</b> if aₙ ≤ bₙ ≤ cₙ and aₙ, cₙ → L, then bₙ → L.</li></ul>`},
 { title:"Series Convergence Tests", body:`
  <ul>
  <li><b>Divergence test:</b> if aₙ does not → 0, then Σaₙ diverges.</li>
  <li><b>Geometric series</b> Σrⁿ converges iff |r| &lt; 1, with sum 1/(1−r) from n=0.</li>
  <li><b>p-series</b> Σ1/nᵖ converges iff p &gt; 1.</li>
  <li><b>Comparison test:</b> 0 ≤ aₙ ≤ bₙ; Σbₙ converges ⇒ Σaₙ converges.</li>
  <li><b>Ratio test:</b> L = lim |aₙ₊₁/aₙ|; L &lt; 1 converges absolutely, L &gt; 1 diverges, L = 1 inconclusive.</li>
  <li><b>Root test:</b> L = lim |aₙ|^(1/n), same rule.</li>
  <li><b>Alternating series test:</b> if aₙ decreases to 0, Σ(−1)ⁿaₙ converges.</li></ul>
  <div class="note">Absolute convergence ⇒ convergence, but not the other way (e.g. alternating harmonic series).</div>`},
 { title:"Continuity and Differentiability", body:`
  <p>f is continuous at c if for every ε &gt; 0 there is δ &gt; 0 such that |x − c| &lt; δ ⇒ |f(x) − f(c)| &lt; ε.</p>
  <ul><li><b>Intermediate Value Theorem:</b> f continuous on [a,b], y between f(a) and f(b) ⇒ ∃c with f(c) = y.</li>
  <li><b>Extreme Value Theorem:</b> continuous on [a,b] ⇒ attains max and min.</li>
  <li><b>Uniform continuity:</b> δ depends only on ε; continuous on a closed bounded interval ⇒ uniformly continuous.</li>
  <li>Differentiable ⇒ continuous (not conversely, e.g. |x| at 0).</li>
  <li><b>Mean Value Theorem:</b> f continuous on [a,b], differentiable on (a,b) ⇒ ∃c: f′(c) = (f(b) − f(a))/(b − a).</li></ul>`},
 { title:"Riemann Integration", body:`
  <p>f bounded on [a,b] is Riemann integrable if upper and lower Darboux sums agree: U(f) = L(f), where U(f) = inf over partitions of U(f,P) and L(f) = sup of L(f,P).</p>
  <ul><li>Continuous functions are integrable. Monotone functions are integrable.</li>
  <li>A bounded function with finitely many discontinuities is integrable.</li>
  <li><b>Fundamental Theorem of Calculus:</b> if F′ = f continuous, then ∫ₐᵇ f = F(b) − F(a).</li></ul>`}
]}
];
