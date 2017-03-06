---
layout: post
title:  "A Proof for N-th Order Directional Derivatives"
date:   2017-03-06 12:22:00 -0500
location: "Tampa, FL"
category: math
tags: mathematics differentiation edge-detection vector-calculus
---

A few weeks ago I wrote a [post](/math/2017/02/10/nth-order-directional-derivatives.html) about N-th order directional derivatives.
At the time of writing, I'd established a rule for directly computing the N-th order directional derivative of a 2D function, but left it without proof.
This post is a more rigorous proof of that rule.

<strong>Theorem</strong>
Let
$ f: \\mathbb{R}^2 \\to \\mathbb{R}, \\left( x,y \\right) \\mapsto f\\left( x, y \\right) $ and let $n \\in \\mathbb{N}$.
The $n$-th order directional derivative, defined recursively as
$ D_\\vec{u}^{n} = \\vec{\\nabla} \\left( D_\\vec{u}^{n-1} \\right) \\cdot \\vec{u} $ with
$ D_\\vec{u}^1 = \\vec{\\nabla} \\left( f \\right) \\cdot \\vec{u} $, can be directly computed as

<span class="equation">
\\[
\\boxed{
  D^n_\\vec{u} f
  = \\left( u_x \\frac{\\partial}{\\partial x} + u_y \\frac{\\partial}{\\partial y} \\right)^n f
  \\text{ .}
}
\\]
</span>

<strong>Notes</strong>
Here, several notational conventions have been adopted.
The gradient of the function $f$, $\\vec{\\nabla} f$, is written as $\\left( \\hat{i}\\frac{\\partial}{\\partial x} + \\hat{j}\\frac{\\partial}{\\partial y} \\right) f $, where $\\hat{i}$ and $\\hat{j}$ refer to the unit vectors in the $x$- and $y$-directions, respectively.
Additionally, the vector $\\vec{u}$ is written with its $x$- and $y$- components as $\\vec{u} = \\hat{i} u_x + \\hat{j} u_y$.

<strong>Proof</strong>
The goal is to prove this by induction.
This will come in two parts: (1), to show that the result holds for $n=1$; and (2), to show that if it holds for $n$, then it holds for $n+1$.

<strong>(1)</strong> From the definition of the directional derivative,
\\[
\\begin{align}
D_{\\vec{u}}^1 & \\equiv \\vec{\\nabla} f \\cdot \\vec{u} \\\\\\
& = \\left( \\hat{i}\\frac{\\partial}{\\partial x} + \\hat{j}\\frac{\\partial}{\\partial y} \\right) f \\cdot \\left( \\hat{i} u_x + \\hat{j} u_y \\right) \\\\\\
& = \\left( u_x \\frac{\\partial}{\\partial x} + u_y \\frac{\\partial}{\\partial y} \\right) f \\\\\\
& = \\left( u_x \\frac{\\partial}{\\partial x} + u_y \\frac{\\partial}{\\partial y} \\right)^1 f
\\end{align}
\\]


<strong>(2)</strong> First, we assume that the boxed equation from above holds, that is
\\[
\\begin{align}
D^n_\\vec{u} f & = \\left( u_x \\frac{\\partial}{\\partial x} + u_y \\frac{\\partial}{\\partial y} \\right)^n f \\\\\\
& = \\left[ \\sum_{k=0}^n \\binom{n}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{k} \\right] f \\text{.}
\\end{align}
\\]

Using the iterative definition of the directional derivative, we can write $D_{\\vec{u}}^{n+1}$ as
\\[
\\begin{align}
D_{\\vec{u}}^{n+1} & = \\vec{\\nabla} \\left( D_{\\vec{u}^n f}\\right) \\cdot \\vec{u} \\\\\\
& = \\Bigg[ \\left( \\hat{i}\\frac{\\partial}{\\partial x} + \\hat{j}\\frac{\\partial}{\\partial y} \\right) \\Big[ \\sum_{k=0}^n \\binom{n}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{k} \\Big] f \\Bigg] \\cdot \\left( \\hat{i}u_x + \\hat{j}u_y \\right) \\\\\\
& = \\Bigg[ \\hat{i} \\sum_{k=0}^n \\binom{n}{k} \\left( u_x \\right)^{n-k} \\left( \\frac{\\partial}{\\partial x} \\right)^{n-k+1} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k + \\hat{j} \\sum_{l=0}^n \\binom{n}{l} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-l} \\left( u_y \\right)^l \\left( \\frac{\\partial}{\\partial y} \\right)^{l+1} \\Bigg] \\cdot \\left( \\hat{i}u_x + \\hat{j}u_y \\right) f \\\\\\
& = \\Bigg[ \\sum_{k=0}^n \\binom{n}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-k+1} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k + \\sum_{l=0}^n \\binom{n}{l} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-l} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{l+1} \\Bigg] f \\\\\\
& = \\Bigg[ \\binom{n}{0} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1} + \\Big[ \\sum_{k=1}^n \\left( \\binom{n}{k} + \\binom{n}{k-1} \\right) \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k \\Big] + \\binom{n}{n} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{n+1} \\Bigg] f \\\\\\
& = \\Bigg[ \\binom{n}{0} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1} + \\Big[ \\sum_{k=1}^n \\binom{n+1}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k \\Big] + \\binom{n}{n} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{n+1} \\Bigg] f \\\\\\
& = \\Bigg[ \\binom{n+1}{0} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1} + \\Big[ \\sum_{k=1}^n \\binom{n+1}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k \\Big] + \\binom{n+1}{n+1} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{n+1} \\Bigg] f \\\\\\
D_{\\vec{u}}^{n+1} & = \\Bigg[ \\sum_{k=0}^{n+1} \\binom{n+1}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n+1-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^k \\Bigg] f
\\end{align}
\\]

Then, given $D_{\\vec{u}}^n$, the definition of $D_{\\vec{u}}^{n+1}$ holds. $\\blacksquare$
