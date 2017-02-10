---
layout: post
title:  "A Rule for Higher Order Directional Derivatives"
date:   2017-02-10 14:42:17 -0500
category: math
tags: mathematics differentiation edge detection
---

I've spent the last few months at work on a project involving differential edge detection.
Working with images, the benefits of a good and robust edge detector are manifest: better object detection, better segmentation, better classification, overall a smarter algorithm.
The issue of edge detection goes back at least as far as 1968 when Irwin Sobel (and his partner Feldman) presented a gradient operator at the Stanford AI Lab (SAIL).
The field still has quite a bit of active work, with some of the more mathematically rich methods including filtering by a [Laplacian of Gaussian](http://homepages.inf.ed.ac.uk/rbf/HIPR2/log.htm) (Marr & Hildreth) or seeking maxima in directional derivatives ([Lindeberg](https://en.wikipedia.org/wiki/Edge_detection#Differential)).
One task that came up often was figuring out the *n*-th *directional* derivative of a 2D image, and this post talks about that problem and a useful computational rule.

First, it never hurts to clearly define what a directional derivative is, focusing on the 2D case.
Derivatives are pretty incredible tools for analysis, and they'll tell you a lot about a function of a single variable $f(x)$.
When you encounter a function of two (or more) variables,  think $z=g(x,y)$, you're faced with a choice of which *direction* to calculate the derivative in.
The picture below should illustrate this choice.

 <!-- picture of z = x^2 + y -->
<img src="/images/posts/plots/derivatives_mesh-all.jpg" class="two-third-width-img">

Taking a derivative in just the $x$-direction will give you a very different result than the a derivative in just the $y$-direction.
Queue the directional derivative, which is a method for taking the derivative in any direction (that is, a little bit in the $x$- and $y$-directions).
It's written
<span class="equation">
\\[ {D\_\\vec{u}} g(x,y) = \\vec{\\nabla} g \\cdot \\vec{u} = u\_x \\frac{\\partial f}{\\partial x} + u\_y \\frac{\\partial f}{\\partial y} \\text{ .}\\]
</span>
Note, the upside-down triangle $\\vec{\\nabla}$ which comes up a lot in vector calculus -- I call it "del" -- and here it's used to represent the [gradient](https://en.wikipedia.org/wiki/Gradient) of $g(x,y)$.
It's an important result to note that the direction that maximizes this expression, the *direction* where $g(x,y)$ is changing the most, is in fact the direction of the gradient $\\vec{\\nabla} g$.

Double back to edges, some methods (namely, Lindeberg's) require calculating the second-order directional derivative, specifically in the direction of the gradient.
Higher order directional derivatives can be computed 'by-hand' in an iterative process,

<span class="equation">
\\[ {D^1\_\\vec{u}} g(x,y) = \\vec{\\nabla} g \\cdot \\vec{u} \\text{ ,} \\]
</span>

<span class="equation">
\\[ {D^2\_\\vec{u}} g(x,y) = \\vec{\\nabla} \\left( {D^1\_\\vec{u}} g(x,y) \\right) \\cdot \\vec{u} \\text{ , and ...} \\]
</span>

<span class="equation">
\\[ {D^n\_\\vec{u}} g(x,y) = \\vec{\\nabla} \\left( D^{n-1}\_\\vec{u} g(x,y) \\right) \\cdot \\vec{u} \\text{ .} \\]
</span>

That, however requires computing all of the directional derivatives up to $n$, which can range from unpleasant to excruciating.

A shortcut, and the reason I wrote up this post, involves observing that the higher-order results behave according to the binomial expansion.
For example,

<span class="equation">
\\[ D^1_\\vec{u} g(x,y) = u_x \\frac{\\partial g}{\\partial x} + u_y \\frac{\\partial g}{\\partial y} \\text{ ,} \\]
</span>

<span class="equation">
\\[ D^2_\\vec{u} g(x,y) = \\vec{\\nabla} ( \\vec{\\nabla} g \\cdot \\vec{u}) \\cdot \\vec{u} =
u_x^2 \\frac{\\partial^2 g}{\\partial x^2} + 2 u_x u_y \\frac{\\partial^2 g}{\\partial x \\partial y} + u_y^2 \\frac{\\partial^2 g}{\\partial y^2}\\text{ , and} \\]
</span>

<span class="equation">
\\[ D^3_\\vec{u} g(x,y) = \\vec{\\nabla} \\left[ \\vec{\\nabla} ( \\vec{\\nabla} g \\cdot \\vec{u}) \\cdot \\vec{u} \\right] \\cdot \\vec{u} =
u_x^3 \\frac{\\partial^3 g}{\\partial x^3} + 3 u^2_x u_y \\frac{\\partial^3 g}{\\partial x^2 \\partial y} + 3 u_x u_y^2 \\frac{\\partial^3 g}{\\partial x \\partial y^2} + u_y^2 \\frac{\\partial^3 g}{\\partial x \\partial y^2}\\text{ .} \\]
</span>

This can be rewritten into a more familiar binomial-like expression,

<span class="equation">
\\[ D^n_\\vec{u} g(x,y) = \\left( u_x \\frac{\\partial}{\\partial x} + u_y \\frac{\\partial}{\\partial y} \\right)^n g \\text{ .} \\]
</span>

Which can be expanded with the binomial theorem to the result

<span class="equation">
\\[ {D^n_\\vec{u}} g(x,y) = \\sum_{k=0}^n \\binom{n}{k} \\left( u_x \\frac{\\partial}{\\partial x} \\right)^{n-k} \\left( u_y \\frac{\\partial}{\\partial y} \\right)^{k} \\text{ .}\\]
</span>


This result came in handy when I was working on my project, and hopefully will help others as well.
