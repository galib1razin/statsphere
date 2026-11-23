/* ============ PRACTICE QUESTIONS (show/hide answer) ============
   Add more by copying one { q, a } block. a may contain HTML. */
const PRACTICE = [
{ id:"stoch", name:"Stochastic Processes", items:[
 { q:"A Markov chain has P = [[0.5, 0.5],[0.2, 0.8]]. Find the stationary distribution.", a:"Solve π = πP: π₁ = 0.5π₁ + 0.2π₂ ⇒ 0.5π₁ = 0.2π₂ ⇒ π₁:π₂ = 2:5. With π₁+π₂ = 1: <b>π = (2/7, 5/7)</b>." },
 { q:"Calls arrive as a Poisson process at rate 3 per hour. Find the probability of exactly 2 calls in 30 minutes.", a:"λt = 3 × 0.5 = 1.5. P = e^(−1.5)(1.5)²/2! = 0.2231 × 1.125 ≈ <b>0.251</b>." },
 { q:"In an M/M/1 queue, λ = 4/hour and μ = 6/hour. Find ρ, L and W.", a:"ρ = 4/6 = 2/3. L = ρ/(1−ρ) = <b>2</b> customers. W = L/λ = 2/4 = <b>0.5 hour</b> (= 1/(μ−λ))." },
 { q:"Gambler starts with Tk 3, plays a fair game, stops at 0 or 10. Probability of reaching 10?", a:"Fair game: P = i/N = <b>3/10 = 0.3</b>." },
 { q:"A branching process has offspring distribution P(0)=1/4, P(1)=1/4, P(2)=1/2. Find the extinction probability.", a:"G(s) = 1/4 + s/4 + s²/2. Mean m = 1/4 + 1 = 1.25 &gt; 1. Solve s = G(s): 2s² − 3s + 1 = 0 ⇒ s = 1/2 or 1. Smallest root: <b>1/2</b>." }
]},
{ id:"inf", name:"Statistical Inference", items:[
 { q:"Find the MLE of p for a sample x₁…xₙ from Bernoulli(p).", a:"ln L = Σxᵢ ln p + (n−Σxᵢ) ln(1−p). Setting derivative to 0 gives <b>p̂ = x̄</b> (the sample proportion)." },
 { q:"A sample of n=16 gives x̄ = 52, s = 8. Construct a 95% CI for μ. (t₀.₀₂₅,₁₅ = 2.131)", a:"Margin = 2.131 × 8/√16 = 4.262. CI = <b>(47.74, 56.26)</b>." },
 { q:"Show that the sample mean is a sufficient statistic for λ in Poisson(λ).", a:"f(x;λ) = Π e^(−λ)λ^(xᵢ)/xᵢ! = [e^(−nλ) λ^(Σxᵢ)] × [1/Πxᵢ!]. By the factorization theorem, Σxᵢ (hence x̄) is sufficient." },
 { q:"State and explain Type I and Type II errors for H₀: a new drug is no better than the old one.", a:"Type I: concluding the new drug is better when it is not (probability α). Type II: failing to detect a real improvement (probability β). Power = 1 − β." }
]},
{ id:"reg", name:"Regression Analysis", items:[
 { q:"Given n=5, Σx=15, Σy=40, Σx²=55, Σxy=130, find the least squares line.", a:"x̄=3, ȳ=8. Sxy = 130 − 15×40/5 = 10. Sxx = 55 − 15²/5 = 10. β̂₁ = 1, β̂₀ = 8 − 3 = 5. <b>ŷ = 5 + x</b>." },
 { q:"SSR = 90 and SSE = 10 in a regression with n = 12 and one predictor. Find R² and F.", a:"SST = 100, R² = <b>0.90</b>. F = MSR/MSE = 90/(10/10) = <b>90</b> with df (1,10)." },
 { q:"What is multicollinearity and how can you detect it?", a:"Strong linear relationships among predictors, which inflate the variances of coefficient estimates. Detect with VIF (&gt;10), high pairwise correlations, or a condition number of XᵀX." },
 { q:"Prove that OLS residuals sum to zero when the model has an intercept.", a:"The normal equation for β₀ is Σ(yᵢ − β̂₀ − β̂₁xᵢ) = 0, which is exactly Σeᵢ = 0." }
]},
{ id:"real", name:"Real Analysis", items:[
 { q:"Prove that the sequence aₙ = 1/n converges to 0.", a:"Given ε &gt; 0 choose N &gt; 1/ε (Archimedean property). For n ≥ N, |1/n − 0| = 1/n ≤ 1/N &lt; ε." },
 { q:"Does Σ 1/(n²+n) converge? Find its sum.", a:"1/(n(n+1)) = 1/n − 1/(n+1), telescoping. Partial sum Sₙ = 1 − 1/(n+1) → 1. <b>Converges to 1</b>." },
 { q:"Test Σ n!/nⁿ for convergence.", a:"Ratio: aₙ₊₁/aₙ = (n/(n+1))ⁿ → 1/e &lt; 1. <b>Converges</b> by the ratio test." },
 { q:"Is f(x) = 1/x uniformly continuous on (0,1)?", a:"<b>No.</b> Take xₙ = 1/n and yₙ = 1/(n+1): |xₙ − yₙ| → 0 but |f(xₙ) − f(yₙ)| = 1 for all n." }
]}
];
