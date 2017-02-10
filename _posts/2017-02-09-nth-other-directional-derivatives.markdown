---
layout: post
title:  "Fun with Derivatives"
date:   2017-01-07 20:01:17 -0500
categories: mathematics differentiation edge detection
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

# picture of z = x^2 + y
<img src="/images/posts/plots/derivatives_mesh-all.jpg" class="third-width-img">

Taking a derivative in just the $x$-direction will give you a very different result than the a derivative in just the $y$-direction.
Queue the directional derivative, which is a method for taking the derivative in any direction (that is, a little bit in the $x$- and $y$-directions).
It's written
<span class="equation">
\\[ D_\\vec{u} g(x,y) = \\vec{\\nabla} g \\cdot \\vec{u} = u_x \\frac{\\partial f}{\\partial x} + u_y \\frac{\\partial f}{\\partial y} \\text{ .}\\]
</span>
Note, the upside-down triangle $\\vec{\\nabla}$$ which comes up a lot in vector calculus -- I call it "del" -- and here is the [gradient](https://en.wikipedia.org/wiki/Gradient) of $g(x,y)$.


# I can also write equations, like $F = ma$! Maybe display equations work?
# <span class="equation">
# \\[ F = m { {d^2x} \\over {dt^2} } \\]
# </span>
# They do! But you have to double escape slashes!


#Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].
