/* ============ QUIZZES / MCQs ============
   q = question, o = options, a = index of correct option (0 = first), e = explanation.
   Add more by copying a { q, o, a, e } line. Add a new subject by copying a whole block. */
const QUIZZES = [
{ id:"stoch", name:"Stochastic Processes", questions:[
 { q:"In a Markov chain, the transition matrix P has the property that:", o:["Columns sum to 1","Rows sum to 1","All entries are equal","Its determinant is 1"], a:1, e:"Each row is a probability distribution over next states, so rows sum to 1." },
 { q:"The Chapman–Kolmogorov equation gives the n-step transition matrix as:", o:["nP","P + n","Pⁿ","P/n"], a:2, e:"P⁽ⁿ⁾ = Pⁿ, from repeated matrix multiplication." },
 { q:"A state i with pᵢᵢ = 1 is called:", o:["Transient","Absorbing","Periodic with period 2","Null recurrent"], a:1, e:"Once entered, an absorbing state is never left." },
 { q:"For a Poisson process with rate λ, the inter-arrival times follow:", o:["Normal","Uniform","Exponential(λ)","Binomial"], a:2, e:"Inter-arrival times are i.i.d. exponential with mean 1/λ." },
 { q:"For a Poisson process, Var[N(t)] equals:", o:["λt²","(λt)²","λt","λ/t"], a:2, e:"N(t) ~ Poisson(λt) so mean = variance = λt." },
 { q:"The stationary distribution π satisfies:", o:["π = Pπ","π = πP and Σπᵢ = 1","π = P²","πP = 0"], a:1, e:"π is a left eigenvector of P with eigenvalue 1, normalised to sum 1." },
 { q:"In an M/M/1 queue the condition for a steady state is:", o:["λ > μ","λ = μ","λ < μ","λ = 0"], a:2, e:"ρ = λ/μ must be less than 1, otherwise the queue grows without bound." },
 { q:"A Galton–Watson process dies out with probability 1 when the mean offspring m is:", o:["m > 1","m ≤ 1","m = 2","m ≥ 3"], a:1, e:"For m ≤ 1 (excluding the trivial case P(1)=1) extinction is certain." },
 { q:"Period of a state i is defined as:", o:["min{n : pᵢᵢ⁽ⁿ⁾ > 0}","max{n : pᵢᵢ⁽ⁿ⁾ > 0}","gcd{n : pᵢᵢ⁽ⁿ⁾ > 0}","Σ pᵢᵢ⁽ⁿ⁾"], a:2, e:"The period is the greatest common divisor of all possible return times." },
 { q:"A recurrent state i satisfies:", o:["Σₙ pᵢᵢ⁽ⁿ⁾ < ∞","Σₙ pᵢᵢ⁽ⁿ⁾ = ∞","pᵢᵢ = 0","fᵢᵢ < 1"], a:1, e:"Recurrent iff the expected number of returns is infinite." },
 { q:"Fair gambler's ruin: start with i, absorbing barriers 0 and N. P(reach N) =", o:["i/N","N/i","1/2","(N−i)/N"], a:0, e:"For p = 1/2 the probability is linear: i/N." },
 { q:"The memoryless property belongs to:", o:["Normal","Exponential","Uniform","Gamma(2)"], a:1, e:"P(T > s+t | T > s) = P(T > t) holds for the exponential distribution (and geometric in discrete case)." }
]},
{ id:"inf", name:"Statistical Inference", questions:[
 { q:"An estimator θ̂ is unbiased if:", o:["Var(θ̂)=0","E(θ̂)=θ","θ̂ = θ","θ̂ → θ"], a:1, e:"Unbiasedness means the expected value of the estimator equals the parameter." },
 { q:"The MLE of the Poisson mean λ from a random sample is:", o:["Σxᵢ","x̄","x̄²","n/Σxᵢ"], a:1, e:"ln L = −nλ + Σxᵢ ln λ ⇒ λ̂ = x̄." },
 { q:"Power of a test equals:", o:["α","β","1 − α","1 − β"], a:3, e:"Power = P(reject H₀ | H₁ true) = 1 − β." },
 { q:"Type I error is:", o:["Accepting a false H₀","Rejecting a true H₀","Rejecting a false H₀","Accepting a true H₀"], a:1, e:"Type I = rejecting H₀ when it is true; its probability is α." },
 { q:"The Cramér–Rao lower bound gives a lower bound for:", o:["Bias","Variance of unbiased estimators","p-value","Power"], a:1, e:"Any unbiased estimator has variance at least 1/(nI(θ))." },
 { q:"The Neyman–Pearson lemma gives the most powerful test for:", o:["Composite vs composite","Simple vs simple hypotheses","Two-sided alternatives","Any hypothesis"], a:1, e:"It applies to simple H₀ versus simple H₁ and uses the likelihood ratio." },
 { q:"The t-test for one mean with n observations has degrees of freedom:", o:["n","n+1","n−1","n−2"], a:2, e:"One degree of freedom is lost estimating the mean: df = n−1." },
 { q:"If the p-value is 0.03 and α = 0.05, we:", o:["Fail to reject H₀","Reject H₀","Accept H₁ with 97% probability","Cannot decide"], a:1, e:"p < α, so reject H₀." },
 { q:"MSE of an estimator equals:", o:["Variance + Bias","Variance + Bias²","Variance − Bias²","Bias²"], a:1, e:"MSE = Var + (Bias)²." },
 { q:"Factorization theorem is used to find:", o:["Unbiased estimators","Sufficient statistics","Confidence intervals","p-values"], a:1, e:"f(x;θ) = g(T(x);θ)h(x) iff T is sufficient." },
 { q:"The MLE is invariant, which means:", o:["It never changes with n","The MLE of g(θ) is g(θ̂)","It is always unbiased","It is always efficient"], a:1, e:"Functional invariance: MLE of g(θ) is g of the MLE." }
]},
{ id:"reg", name:"Regression Analysis", questions:[
 { q:"In simple linear regression, the least squares slope is:", o:["Sxx/Sxy","Sxy/Sxx","Sxy·Sxx","ȳ/x̄"], a:1, e:"β̂₁ = Sxy/Sxx." },
 { q:"R² represents:", o:["Probability the model is true","Proportion of variation in y explained","Slope of line","Error variance"], a:1, e:"R² = SSR/SST." },
 { q:"OLS estimators are BLUE under which theorem?", o:["Central limit theorem","Gauss–Markov","Bayes","Cramér–Rao"], a:1, e:"Gauss–Markov: best linear unbiased estimators under classical assumptions." },
 { q:"The OLS estimator in matrix form is:", o:["(XXᵀ)⁻¹y","(XᵀX)⁻¹Xᵀy","XᵀX y","X⁻¹y"], a:1, e:"β̂ = (XᵀX)⁻¹Xᵀy." },
 { q:"In simple regression with n observations, the degrees of freedom for SSE are:", o:["n","n−1","n−2","n−3"], a:2, e:"Two parameters estimated, so n−2." },
 { q:"A VIF greater than 10 suggests:", o:["Autocorrelation","Heteroscedasticity","Multicollinearity","Outliers"], a:2, e:"VIF measures inflation of variance due to correlation among predictors." },
 { q:"A Durbin–Watson statistic near 2 indicates:", o:["Positive autocorrelation","Negative autocorrelation","No first-order autocorrelation","Multicollinearity"], a:2, e:"d ≈ 2(1−r), so d ≈ 2 means r ≈ 0." },
 { q:"The hat matrix H = X(XᵀX)⁻¹Xᵀ is:", o:["Symmetric and idempotent","Skew-symmetric","Singular always","Diagonal"], a:0, e:"H² = H and Hᵀ = H; it projects y onto the column space of X." },
 { q:"Adding a variable to a regression model:", o:["Always lowers R²","Never lowers R²","Always raises adjusted R²","Never changes R²"], a:1, e:"R² never decreases; adjusted R² can fall." },
 { q:"When the error variance is not constant, the problem is called:", o:["Multicollinearity","Heteroscedasticity","Autocorrelation","Endogeneity"], a:1, e:"Heteroscedasticity: Var(εᵢ) depends on i." }
]},
{ id:"real", name:"Real Analysis", questions:[
 { q:"The Completeness Axiom states that every non-empty set bounded above has:", o:["A maximum","A supremum in ℝ","A rational upper bound","A minimum"], a:1, e:"Least upper bound exists in ℝ (but not necessarily in ℚ)." },
 { q:"A bounded monotone sequence:", o:["Diverges","Converges","Oscillates","Is Cauchy only if decreasing"], a:1, e:"Monotone Convergence Theorem." },
 { q:"Σ 1/nᵖ converges iff:", o:["p > 0","p ≥ 1","p > 1","p < 1"], a:2, e:"p-series test; p = 1 is the divergent harmonic series." },
 { q:"The Bolzano–Weierstrass theorem says every bounded sequence has:", o:["A limit","A convergent subsequence","A maximum","A Cauchy limit of 0"], a:1, e:"Bounded sequences in ℝ always contain a convergent subsequence." },
 { q:"If lim |aₙ₊₁/aₙ| = 2, the series Σaₙ:", o:["Converges absolutely","Diverges","Is inconclusive","Converges conditionally"], a:1, e:"Ratio test: L > 1 means divergence." },
 { q:"A continuous function on [a,b] is:", o:["Unbounded","Bounded and attains its max and min","Always monotone","Always differentiable"], a:1, e:"Extreme Value Theorem." },
 { q:"Which is true?", o:["Continuous ⇒ differentiable","Differentiable ⇒ continuous","Bounded ⇒ continuous","Integrable ⇒ differentiable"], a:1, e:"|x| is continuous but not differentiable at 0, but differentiability implies continuity." },
 { q:"A sequence is convergent in ℝ iff it is:", o:["Bounded","Monotone","Cauchy","Positive"], a:2, e:"Completeness of ℝ: Cauchy ⇔ convergent." },
 { q:"The Mean Value Theorem needs f to be:", o:["Continuous on [a,b] and differentiable on (a,b)","Differentiable at endpoints only","Integrable","Monotone"], a:0, e:"Both conditions are required to guarantee c with f′(c) = (f(b)−f(a))/(b−a)." },
 { q:"The alternating series Σ(−1)ⁿ/n:", o:["Diverges","Converges absolutely","Converges conditionally","Is not defined"], a:2, e:"Converges by the alternating series test, but Σ1/n diverges." }
]}
];
